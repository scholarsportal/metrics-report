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

    var downloads_graph_data_rev: Array<number> = this.data['downloads_graph_data']
    var datasets_graph_data_rev: Array<number> = this.data['datasets_graph_data']
    var files_graph_data_rev: Array<number> = this.data['files_graph_data']
    var users_graph_data_rev: Array<number> = this.data['users_graph_data']
    var size_graph_data_rev: Array<number> = this.data['size_graph_data']

    // downloads
    
    const worksheet_readme = workbook.addWorksheet(this.translocoService.translate('ReadMe'));
    worksheet_readme.addRow([this.translocoService.translate('FAQ')]);
    worksheet_readme.addRow([]);
    worksheet_readme.addRow([this.translocoService.translate('Tab'), this.translocoService.translate('FieldName'), this.translocoService.translate('Definition')]);

    worksheet_readme.addRow([this.translocoService.translate('Downloads'), "", ""]);
    worksheet_readme.addRow(["",this.translocoService.translate('Date'),""]);
    worksheet_readme.addRow(["", this.translocoService.translate('Count'), this.translocoService.translate('DownloadsCountDef')]);
    worksheet_readme.addRow(["", this.translocoService.translate('CumulCount'), this.translocoService.translate('DownloadsCumulCountDef')]);

    worksheet_readme.addRow([this.translocoService.translate('Datasets'), "", ""]);
    worksheet_readme.addRow(["",this.translocoService.translate('Date'),""]);
    worksheet_readme.addRow(["", this.translocoService.translate('Count'), this.translocoService.translate('DatasetsCountDef')]);
    worksheet_readme.addRow(["", this.translocoService.translate('CumulCount'), this.translocoService.translate('DatasetsCountDef')]);

    worksheet_readme.addRow([this.translocoService.translate('Files'), "", ""]);
    worksheet_readme.addRow(["",this.translocoService.translate('Date'),""]);
    worksheet_readme.addRow(["", this.translocoService.translate('Count'), this.translocoService.translate('FilesCountDef')]);
    worksheet_readme.addRow(["", this.translocoService.translate('CumulCount'), this.translocoService.translate('FilesCountDef')]);

    worksheet_readme.addRow([this.translocoService.translate('Users'), "", ""]);
    worksheet_readme.addRow(["",this.translocoService.translate('Date'),""]);
    worksheet_readme.addRow(["", this.translocoService.translate('Count'), this.translocoService.translate('UsersCountDef')]);
    worksheet_readme.addRow(["", this.translocoService.translate('CumulCount'), this.translocoService.translate('UsersCumulCountDef')]);

    worksheet_readme.addRow([this.translocoService.translate('Storage'), "", ""]);
    worksheet_readme.addRow(["",this.translocoService.translate('Date'),""]);
    worksheet_readme.addRow(["", this.translocoService.translate('Count'), this.translocoService.translate('StorageCountDef')]);
    worksheet_readme.addRow(["", this.translocoService.translate('Percent'), this.translocoService.translate('StorageCumulCountDef')]);

    worksheet_readme.addRow([this.translocoService.translate('SubjectBreakdown'), "", ""]);
    worksheet_readme.addRow(["",this.translocoService.translate('Subject'),this.translocoService.translate('SubjectDef')]);
    worksheet_readme.addRow(["", this.translocoService.translate('Count'), this.translocoService.translate('SubjectCountDef')]);
    worksheet_readme.addRow(["", this.translocoService.translate('Percent'), this.translocoService.translate('SubjectPercentDef')]);

    worksheet_readme.addRow([this.translocoService.translate('FileContentBreakdown'), "", ""]);
    worksheet_readme.addRow(["",this.translocoService.translate('Type'),this.translocoService.translate('FileTypeDef')]);
    worksheet_readme.addRow(["",this.translocoService.translate('SpecificFileType'),this.translocoService.translate('FileSpecficTypeDef')]);
    worksheet_readme.addRow(["", this.translocoService.translate('Count'), this.translocoService.translate('FileCountDef')]);
    worksheet_readme.addRow(["", this.translocoService.translate('Percent'), this.translocoService.translate('FilePercentDef')]);

    worksheet_readme.getColumn(1).width = 30;
    worksheet_readme.getColumn(2).width = 25;
    worksheet_readme.getColumn(3).width = 100;
    
    const worksheet_downloads = workbook.addWorksheet(this.translocoService.translate('Downloads'));  
    const headers_downloads = Object.keys([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);
    worksheet_downloads.addRow([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);

    worksheet_downloads.getColumn(1).width = 15;
    worksheet_downloads.getColumn(2).width = 15;
    worksheet_downloads.getColumn(3).width = 15;

    const worksheet_datasets = workbook.addWorksheet(this.translocoService.translate('Datasets'));  
    const headers_datasets = Object.keys([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);
    worksheet_datasets.addRow([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);

    worksheet_datasets.getColumn(1).width = 15;
    worksheet_datasets.getColumn(2).width = 15;
    worksheet_datasets.getColumn(3).width = 15;

    const worksheet_files = workbook.addWorksheet(this.translocoService.translate('Files'));  
    const headers_files = Object.keys([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);
    worksheet_files.addRow([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);

    worksheet_files.getColumn(1).width = 15;
    worksheet_files.getColumn(2).width = 15;
    worksheet_files.getColumn(3).width = 15;

    const worksheet_users = workbook.addWorksheet(this.translocoService.translate('Users'));  
    const headers_users = Object.keys([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);
    worksheet_users.addRow([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);

    worksheet_users.getColumn(1).width = 15;
    worksheet_users.getColumn(2).width = 15;
    worksheet_users.getColumn(3).width = 15;

    const worksheet_storage = workbook.addWorksheet(this.translocoService.translate('Storage'));  
    const headers_storage = Object.keys([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);
    worksheet_storage.addRow([this.translocoService.translate('Date'), this.translocoService.translate('Count'), this.translocoService.translate('CumulCount')]);

    worksheet_storage.getColumn(1).width = 15;
    worksheet_storage.getColumn(2).width = 15;
    worksheet_storage.getColumn(3).width = 15;

    const worksheet_subject = workbook.addWorksheet(this.translocoService.translate('SubjectBreakdown'));  
    const headers_subject = Object.keys([this.translocoService.translate('Subject'), this.translocoService.translate('Count'), this.translocoService.translate('Percent')]);
    worksheet_subject.addRow([this.translocoService.translate('Subject'), this.translocoService.translate('Count'), this.translocoService.translate('Percent')]);

    worksheet_subject.getColumn(1).width = 30;
    worksheet_subject.getColumn(2).width = 15;
    worksheet_subject.getColumn(3).width = 15;

    const worksheet_file = workbook.addWorksheet(this.translocoService.translate('FileContentBreakdown'));  
    const headers_file = Object.keys([this.translocoService.translate('FileType'), this.translocoService.translate('SpecificFileType'), this.translocoService.translate('Count'), this.translocoService.translate('Percent')]);
    worksheet_file.addRow([this.translocoService.translate('Type'), this.translocoService.translate('SpecificFileType'), this.translocoService.translate('Count'), this.translocoService.translate('Percent')]);

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

    const subjectTranslationMap: { [key: string]: string } = {
      'Social Sciences': "SocialSciences",
      'Earth and Environmental Sciences': "EarthandEnvironmentalSciences",
      'Other': "Other",
      'Medicine, Health and Life Sciences': "MedicineHealthandLifeSciences",
      'Arts and Humanities': "ArtsandHumanities",
      'Engineering': "Engineering",
      'Agricultural Sciences': "AgriculturalSciences",
      'Computer and Information Science': "ComputerandInformationScience",
      'Physics': "Physics",
      'Chemistry': "Chemistry",
      'Business and Management': "BusinessandManagement",
      'Law': "Law",
      'Mathematical Sciences': "MathematicalSciences",
      'Astronomy and Astrophysics': "AstronomyandAstrophysics"
    };

    const fileTranslationMap: { [key: string]: string } = {
      "image": "image",
      "text": "text",
      "application": "application",
      "video": "video",
      "audio": "audio",
      "model": "model",
      "type": "type",
      "chemical": "chemical",
      "biosequence": "biosequence",
      "multipart": "multipart",
    };

    for (let i = 0; i < this.data['subject_full_data'].length - 1; i++) {
      const subjectRaw = this.data['subject_full_data'][i]['subject'];
      const subjectKey = subjectTranslationMap[subjectRaw] || subjectRaw; // fallback if missing
      const translatedSubject = this.translocoService.translate(subjectKey);
      worksheet_subject.addRow([
        translatedSubject,
        this.data['subject_full_data'][i]['count'],
        this.data['subject_full_data'][i]['percent']
      ]); 
    }

    for (let i = 0; i < this.data['file_content_full_data'].length - 1; i += 1) {
      const entry = this.data['file_content_full_data'][i];

      const rawType = entry['type'];
      const typeKey = fileTranslationMap[rawType] || rawType;
      const translatedType = this.translocoService.translate(typeKey);
    
      worksheet_file.addRow([
        translatedType,
        entry ['contentType'],
        entry['count'],
        entry['percent']
      ]);
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
  
    const cardTitles = [this.translocoService.translate('Collections'), this.translocoService.translate('DatasetsSF'), this.translocoService.translate('Files'), this.translocoService.translate('Downloads'), 
    this.translocoService.translate('Users'), this.translocoService.translate('Storage')];
    
    const locale = this.translocoService.getActiveLang() === 'fr' ? 'fr-FR' : 'en-US';

    const sanitizeNumber = (num: number, isDecimal = false): string => {
      const options = isDecimal
        ? { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        : { maximumFractionDigits: 0 };

      return new Intl.NumberFormat(locale, options)
        .format(num)
        .replace(/\u202F|\u00A0/g, ' '); // Replace narrow/regular NBSP with normal space
    };

    const isEnglish = this.translocoService.getActiveLang() === 'en';

    const rawStorage = this.data['size_graph_data']?.at(-1) ?? 0;
    const formattedStorage = sanitizeNumber(rawStorage, true);

    // Get the localized unit for GB, fallback to 'GB' if translation missing
    const gbUnit = this.translocoService.translate('GB') || 'GB';

    // Append the localized unit for both languages
    const cleanedStorage = `${formattedStorage} ${gbUnit}`;

    const cardCounts = [
      sanitizeNumber(this.data['name_dropdown_data']?.length ?? 0),
      sanitizeNumber(this.data['datasets_graph_data']?.at(-1) ?? 0),
      sanitizeNumber(this.data['files_graph_data']?.at(-1) ?? 0),
      sanitizeNumber(this.data['downloads_graph_data']?.at(-1) ?? 0),
      sanitizeNumber(this.data['users_graph_data']?.at(-1) ?? 0),
      cleanedStorage
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

  private sanitizeText(text: string): string {
    const lang = this.translocoService.getActiveLang();
    
    if (lang === 'fr') {
      return text
        .replace(/\u00A0/g, ' ')  // Replace non-breaking space with regular space
        .replace(/\//g, '-')      // Optional: Replace slashes with dashes
        .trim();
    }
  
    // No changes for other languages
    return text.trim();
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

