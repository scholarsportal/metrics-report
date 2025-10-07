import { Component, Injectable, Input, OnInit, SimpleChanges } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { InteractionService } from '../shared/interaction.service';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})

@Injectable()
export class DownloadComponent implements OnInit {
  @Input() data: any; 
  @Input() name: string;

  constructor(private interactionService: InteractionService, private translocoService: TranslocoService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) {
      this.name = changes['name'].currentValue;
    }
  }

  ngOnInit(): void {
    this.interactionService.downloadSubjectTriggered$.subscribe(() => {
      this.generateSubject();
    });
    this.interactionService.downloadFileTriggered$.subscribe(() => {
      this.generateFile();
    });
    this.interactionService.downloadExcelTriggered$.subscribe(() => {
      this.generateExcel();
    });
    this.interactionService.downloadPDFTriggered$.subscribe(() => {
      this.generatePDF();
    });
  }

  exportToExcel(data: any[], fileName: string){
    const workbook = new ExcelJS.Workbook();

    const months = this.data['months'];
    console.log(this.data);

    var downloads_graph_data_rev: Array<number> = this.data['downloads_graph_data'].reverse();
    var datasets_graph_data_rev: Array<number> = this.data['datasets_graph_data'].reverse();
    var files_graph_data_rev: Array<number> = this.data['files_graph_data'].reverse();
    var users_graph_data_rev: Array<number> = this.data['users_graph_data'].reverse();
    var size_graph_data_rev: Array<number> = this.data['size_graph_data'].reverse();

    // downloads
    
    const worksheet_readme = workbook.addWorksheet('Read Me');
    worksheet_readme.addRow(['FAQ']);
    worksheet_readme.addRow([]);
    worksheet_readme.addRow(['Tab', 'Field Name', 'Definition']);

    worksheet_readme.addRow(['Downloads', "", ""]);
    worksheet_readme.addRow(["",'Date',""]);
    worksheet_readme.addRow(["", 'Count', 'Total amount of downloads in the given month']);
    worksheet_readme.addRow(["", 'Cumul Count', 'Total cumulative downloads in the given month']);

    worksheet_readme.addRow(['Datasets', "", ""]);
    worksheet_readme.addRow(["",'Date',""]);
    worksheet_readme.addRow(["", 'Count', 'Total amount of realesed datasets in the given month']);
    worksheet_readme.addRow(["", 'Cumul Count', 'Total cumulative realesed datasets in the given month']);

    worksheet_readme.addRow(['Files', "", ""]);
    worksheet_readme.addRow(["",'Date',""]);
    worksheet_readme.addRow(["", 'Count', 'Total amount of files in realesed datasets in the given month']);
    worksheet_readme.addRow(["", 'Cumul Count', 'Total cumulative files in realesed datasets in the given month']);

    worksheet_readme.addRow(['Users', "", ""]);
    worksheet_readme.addRow(["",'Date',""]);
    worksheet_readme.addRow(["", 'Count', 'Total count of users who opened an account in the given month']);
    worksheet_readme.addRow(["", 'Cumul Count', 'Total cumulative count of users in the given month']);

    worksheet_readme.addRow(['Storage', "", ""]);
    worksheet_readme.addRow(["",'Date',""]);
    worksheet_readme.addRow(["", 'Count', 'Total approximate GB of storage allocated in the given month']);
    worksheet_readme.addRow(["", 'Percent', 'Total cumulative approximate GB of storage allocated in the given month']);

    worksheet_readme.addRow(['Subject Breakdown', "", ""]);
    worksheet_readme.addRow(["",'Subject',"Subect of Dataset"]);
    worksheet_readme.addRow(["", 'Count', 'Total count of datasets with assigned subject']);
    worksheet_readme.addRow(["", 'Percent', 'Percent of datasets with assigned subject over all other subjects']);

    worksheet_readme.addRow(['File Breakdown', "", ""]);
    worksheet_readme.addRow(["",'Type',"type of file"]);
    worksheet_readme.addRow(["",'Content Type',"specfic format of file"]);
    worksheet_readme.addRow(["", 'Count', 'Total count of datasets with assigned subject']);
    worksheet_readme.addRow(["", 'Percent', 'Percent of datasets with file type over all other file types']);

    worksheet_readme.getColumn(1).width = 20;
    worksheet_readme.getColumn(2).width = 15;
    worksheet_readme.getColumn(3).width = 60;
    
    const worksheet_downloads = workbook.addWorksheet('Downloads');  
    const headers_downloads = Object.keys(['date', 'count', 'cumul count']);
    worksheet_downloads.addRow(['date', 'count', 'cumul count']);

    worksheet_downloads.getColumn(1).width = 15;
    worksheet_downloads.getColumn(2).width = 15;
    worksheet_downloads.getColumn(3).width = 15;

    const worksheet_datasets = workbook.addWorksheet('Datasets');  
    const headers_datasets = Object.keys(['date', 'count', 'cumul count']);
    worksheet_datasets.addRow(['date', 'count', 'cumul count']);

    worksheet_datasets.getColumn(1).width = 15;
    worksheet_datasets.getColumn(2).width = 15;
    worksheet_datasets.getColumn(3).width = 15;

    const worksheet_files = workbook.addWorksheet('Files');  
    const headers_files = Object.keys(['date', 'count', 'cumul count']);
    worksheet_files.addRow(['date', 'count', 'cumul count']);

    worksheet_files.getColumn(1).width = 15;
    worksheet_files.getColumn(2).width = 15;
    worksheet_files.getColumn(3).width = 15;

    const worksheet_users = workbook.addWorksheet('Users');  
    const headers_users = Object.keys(['date', 'count', 'cumul count']);
    worksheet_users.addRow(['date', 'count', 'cumul count']);

    worksheet_users.getColumn(1).width = 15;
    worksheet_users.getColumn(2).width = 15;
    worksheet_users.getColumn(3).width = 15;

    const worksheet_storage = workbook.addWorksheet('Storage');  
    const headers_storage = Object.keys(['date', 'count', 'cumul count']);
    worksheet_storage.addRow(['date', 'count', 'cumul count']);

    worksheet_storage.getColumn(1).width = 15;
    worksheet_storage.getColumn(2).width = 15;
    worksheet_storage.getColumn(3).width = 15;

    const worksheet_subject = workbook.addWorksheet('Subject Breakdown');  
    const headers_subject = Object.keys(['subject', 'count', 'percent']);
    worksheet_subject.addRow(['subject', 'count', 'percent']);

    worksheet_subject.getColumn(1).width = 30;
    worksheet_subject.getColumn(2).width = 15;
    worksheet_subject.getColumn(3).width = 15;

    const worksheet_file = workbook.addWorksheet('File Breakdown');  
    const headers_file = Object.keys(['file type', 'specific type', 'count', 'percent']);
    worksheet_file.addRow(['type', 'content type', 'count', 'percent']);

    worksheet_file.getColumn(1).width = 20;
    worksheet_file.getColumn(2).width = 30;
    worksheet_file.getColumn(3).width = 15;
    worksheet_file.getColumn(3).width = 15;

    for (let i = 0; i < months.length - 1; i+=1){
      worksheet_downloads.addRow([months[i],this.data['downloads_graph_agg_data'][i], downloads_graph_data_rev[i]]); 
      worksheet_datasets.addRow([months[i],this.data['datasets_graph_agg_data'][i], datasets_graph_data_rev[i]]); 
      worksheet_files.addRow([months[i],this.data['files_graph_agg_data'][i], files_graph_data_rev[i]]); 
      worksheet_users.addRow([months[i],this.data['users_graph_agg_data'][i], users_graph_data_rev[i]]); 
      worksheet_storage.addRow([months[i],this.data['size_graph_agg_data'][i], size_graph_data_rev[i]]); 
    }

    for (let i = 0; i < this.data['subject_full_data'].length - 1; i+=1){
      worksheet_subject.addRow([this.data['subject_full_data'][i]['subject'], this.data['subject_full_data'][i]['count'], this.data['subject_full_data'][i]['percent'] ]); 
    }

    for (let i = 0; i < this.data['file_content_full_data'].length - 1; i+=1){
      worksheet_file.addRow([this.data['file_content_full_data'][i]['type'], this.data['file_content_full_data'][i]['contenttype'], this.data['file_content_full_data'][i]['count'], this.data['file_content_full_data'][i]['percent']]); 
    }

    workbook.xlsx.writeBuffer().then((buffer: any) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, `${fileName}.xlsx`);
    });
  }

  async generatePDF() {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageHeight = pdf.internal.pageSize.getHeight();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const marginX = 10;
    const marginY = 10;
    const lineSpacing = 5;
  
    const barGraphWidth = 90;
    const pieGraphWidth = 90;
  
    let currentY = marginY;
  
    const drawCanvasToPDF = (
      canvas: HTMLCanvasElement,
      x: number,
      y: number,
      maxWidth: number
    ): number => {
      const aspectRatio = canvas.width / canvas.height;
      const targetWidth = maxWidth;
      const targetHeight = maxWidth / aspectRatio;
  
      if (y + targetHeight > pageHeight - marginY) {
        pdf.addPage();
        y = marginY;
        currentY = marginY;
      }
  
      const bufferCanvas = document.createElement('canvas');
      bufferCanvas.width = canvas.width;
      bufferCanvas.height = canvas.height;
  
      const ctx = bufferCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, bufferCanvas.width, bufferCanvas.height);
        ctx.drawImage(canvas, 0, 0);
      }
  
      const imgData = bufferCanvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', x, y, targetWidth, targetHeight);
      return targetHeight + lineSpacing;
    };
  
    // ===== Top Left Static Export Title =====
    let exportTitle = "Borealis Report";
    if (this.name && this.name !== "(All)") {
      exportTitle = `${this.name} - ${exportTitle}`;
    }
  
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.text(exportTitle, marginX, marginY);
    const dateWidth = pdf.getTextWidth(currentDate);
    pdf.text(currentDate, pageWidth - marginX - dateWidth, marginY);
  
    // ===== Dynamic Wrapped Title =====
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(14);
    let temp_title_name = document.getElementById('responsive-title')?.textContent ?? '';
    if (temp_title_name === "(All)" || temp_title_name === '') {
      temp_title_name = "Borealis (All)";
    }
  
    const maxTitleWidth = pageWidth - 2 * marginX;
    const wrappedTitle = pdf.splitTextToSize(temp_title_name, maxTitleWidth);
    const lineHeight = 7;
    const titleY = marginY + 10;
    pdf.text(wrappedTitle, marginX, titleY);
  
    const titleHeight = wrappedTitle.length * lineHeight;
  
    // ===== Date Text (Below Title) =====
    pdf.setFont('helvetica', 'italic');
    pdf.setFontSize(11);
    const datetext = document.getElementById('pdf_date')?.textContent ?? '';
    const dateY = titleY + titleHeight + 1.5;
    pdf.text(datetext, marginX, dateY);
  
    // ===== Update currentY for rest of content =====
    currentY = dateY + 6;
  
    // ===== Summary Cards =====
    const cardCount = 6;
    const gap = 4;
    const cardWidth = (pageWidth - marginX * 2 - gap * (cardCount - 1)) / cardCount;
    const cardHeight = 15;
    const cardY = currentY;
  
    const cardTitles = [this.translocoService.translate('Collections'), this.translocoService.translate('Datasets'), this.translocoService.translate('Files'), this.translocoService.translate('Downloads'), 
    this.translocoService.translate('Users'), this.translocoService.translate('Storage')];
    const cardCounts = [
      document.getElementById('total_collections_num')?.textContent ?? '',
      document.getElementById('total_datasets_num')?.textContent ?? '',
      document.getElementById('total_files_num')?.textContent ?? '',
      document.getElementById('total_downloads_num')?.textContent ?? '',
      document.getElementById('total_users_num')?.textContent ?? '',
      document.getElementById('total_size_num')?.textContent ?? ''
    ];
  
    for (let i = 0; i < cardCount; i++) {
      const cardX = marginX + i * (cardWidth + gap);
      this.drawCard(pdf, cardTitles[i], cardCounts[i], cardX, cardY, cardWidth, cardHeight);
    }
  
    currentY += cardHeight + 10;
  
    // ===== Get All Graphs =====
    const barDiv = document.querySelector('#pdf_bargraphs');
    const allBarCanvases = barDiv?.querySelectorAll('canvas') ?? [];
  
    const subjectCanvas = document.querySelector('#subjectGraph canvas') as HTMLCanvasElement;
    const fileCanvas = document.querySelector('#fileGraph canvas') as HTMLCanvasElement;
  
    const graphX = pageWidth - marginX - barGraphWidth;
    let rowY = currentY;
  
    const rows = [
      {
        leftIndex: 0,
        leftTitle: this.translocoService.translate('NumberofDownloads'),
        rightCanvas: allBarCanvases[4], // Storage Usage
        rightTitle: this.translocoService.translate('StorageUsage')
      },
      {
        leftIndex: 1,
        leftTitle: this.translocoService.translate('NumberofDatasets'),
        rightCanvas: subjectCanvas,
        rightTitle: this.translocoService.translate('SubjectBreakdown')
      },
      {
        leftIndex: 2,
        leftTitle: this.translocoService.translate('NumberofFiles'),
        rightCanvas: fileCanvas,
        rightTitle: this.translocoService.translate('FileContentBreakdown')
      },
      {
        leftIndex: 3,
        leftTitle: this.translocoService.translate('Numberofusers'),
        rightCanvas: null,
        rightTitle: ""
      }
    ];
  
    for (const row of rows) {
      if (rowY + 10 > pageHeight - marginY) {
        pdf.addPage();
        rowY = marginY;
      }
  
      let rowHeight = 0;
  
      // Left chart
      const leftCanvas = allBarCanvases[row.leftIndex] as HTMLCanvasElement;
      if (leftCanvas) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.text(row.leftTitle, marginX, rowY);
        const usedHeight = drawCanvasToPDF(leftCanvas, marginX, rowY + 4, barGraphWidth);
        rowHeight = usedHeight;
      }
  
      // Right chart
      if (row.rightCanvas) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.text(row.rightTitle, graphX, rowY);
        const usedHeight = drawCanvasToPDF(row.rightCanvas, graphX, rowY + 4, barGraphWidth);
        rowHeight = Math.max(rowHeight, usedHeight);
      }
  
      rowY += rowHeight + 6; // vertical space between rows
    }
  
    // ===== Save PDF =====
    let temp_name = "Borealis Report";
    if (this.name && this.name !== "(All)") {
      temp_name = `${this.name} - ${temp_name}`;
    }
  
    pdf.save(temp_name);
  }      
  
  private exportChartAsJPEG(elementId: string, fileName: string, scaleFactor = 0.5) {
    const container = document.getElementById(elementId)!;
    const canvas = container.querySelector('canvas') as HTMLCanvasElement;
    if (!canvas) {
      console.error(`No canvas found inside element with id ${elementId}`);
      return;
    }
  
    const newCanvas = document.createElement('canvas');
    newCanvas.width = canvas.width;
    newCanvas.height = canvas.height;
  
    const ctx = newCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'white';               // white background
      ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
      ctx.drawImage(canvas, 0, 0);
    }
  
    const scaledCanvas = document.createElement('canvas');
    scaledCanvas.width = newCanvas.width * scaleFactor;
    scaledCanvas.height = newCanvas.height * scaleFactor;
  
    const scaledCtx = scaledCanvas.getContext('2d');
    if (scaledCtx) {
      scaledCtx.scale(scaleFactor, scaleFactor);
      scaledCtx.drawImage(newCanvas, 0, 0);
    }
  
    const dataUrl = scaledCanvas.toDataURL('image/jpeg', 1.0);
  
    const link = document.createElement('a');
    link.download = fileName;
    link.href = dataUrl;
    link.click();
  }

  drawCard(
    pdf: jsPDF,
    title: string,
    count: string,
    x: number,
    y: number,
    width: number,
    height: number,
    radius = 2
  ) {
    const paddingX = 2; // smaller left/right padding
    const paddingTop = 5;
    const paddingBottom = 3;
  
    // Draw rounded card
    pdf.setDrawColor(180,180,180); // border color
    pdf.setFillColor(255, 255, 255); // background
    pdf.roundedRect(x, y, width, height, radius, radius, 'FD');
  
    // Title (very top-left, minimal padding)
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8); // smaller title
    pdf.text(title, x + paddingX, y + paddingTop); // ⬅️ Top-left
  
    // Count (bottom-right)
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    const textWidth = pdf.getTextWidth(count);
    const countX = x + width - paddingX - textWidth;
    const countY = y + height - paddingBottom;
  
    pdf.text(count, countX, countY); // ⬇️ Bottom-right
  }

  generateSubject() {
    this.exportChartAsJPEG('subjectGraph', 'subject-graph.jpeg', 1);
  }
  
  generateFile() {
    this.exportChartAsJPEG('fileGraph', 'file-graph.jpeg', 1);
  }

  generateExcel() {
    var temp_name = "Borealis Report";
    if (this.name != "(All)"){
      temp_name = this.name + " - " + temp_name; 
    }
    this.exportToExcel(this.data, temp_name);
  }
}

