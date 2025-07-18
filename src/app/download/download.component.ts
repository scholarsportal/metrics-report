import { Component, Injectable, Input } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})

@Injectable()
export class DownloadComponent {
  @Input() data: any; 
  @Input() name: string;

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

  async generatePDF(){
    console.log('hefkdaskfdsokfsakfs');
    const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var a = document.getElementById('pdf_name')!;
    var b = document.getElementById('pdf_date')!;
    var c = document.getElementById('pdf_collections_num')!;
    var d = document.getElementById('pdf_datasets_num')!;
    var e = document.getElementById('pdf_files_num')!; 
    var f = document.getElementById('pdf_download_nums')!;
    var g = document.getElementById('pdf_users_nums')!;
    var h = document.getElementById('pdf_storage_nums')!;
    var i = document.getElementById('pdf_bargraphs')!;
    var j = document.getElementById('subjectGraph')!;
    var k = document.getElementById('fileGraph')!;
    var l = document.getElementById('subjectGraphTitle')!;
    var m = document.getElementById('fileGraphTitle')!;

    {
      const elements = [
        { el: a, x: 10, y: 5, width: 300 },
        { el: b, x: 10, y: 12, width: 300 },
        { el: c, x: 10, y: 20, width: 30 },
        { el: d, x: 41, y: 20, width: 30 },
        { el: e, x: 72, y: 20, width: 30 },
        { el: f, x: 103, y: 20, width: 30 },
        { el: g, x: 134, y: 20, width: 30 },
        { el: h, x: 165, y: 20, width: 30 },
        { el: i, x: 10, y: 35, width: 90},
        { el: h, x: 165, y: 20, width: 30 },
        { el: i, x: 10, y: 35, width: 90},
        { el: h, x: 165, y: 20, width: 30 },
        { el: i, x: 10, y: 35, width: 90},
        { el: j, x: 105, y: 45, width: 140 },
        { el: k, x: 105, y: 95, width: 140},

        { el: l, x: 105, y: 40, width: 90},
        { el: m, x: 105, y: 90, width: 90},


      ];
    
      const pdf = new jsPDF(); // or however you're initializing it
    
      for (const item of elements) {
        const canvas = await html2canvas(item.el);
        const imgWidth = item.width;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('image/png');
    
        pdf.addImage(imgData, 'PNG', item.x, item.y, imgWidth, imgHeight);
      }
    
      // Final save after all canvases are processed
      let temp_name = "Borealis Report";
      if (this.name && this.name !== "(All)") {
        temp_name = this.name + " - " + temp_name;
      }
    
      pdf.save(temp_name);
    }
}

  generateExcel() {
    var temp_name = "Borealis Report";
    if (this.name != "(All)"){
      temp_name = this.name + " - " + temp_name; 
    }
    this.exportToExcel(this.data, temp_name);
  }

  generateSubject() {
    var a = document.getElementById('subjectGraph')!;
    html2canvas(a).then(canvas => {
    const imageData = canvas.toDataURL('image/png');

    const scaleFactor = 0.5;
    const scaledCanvas = document.createElement('canvas');
    scaledCanvas.width = canvas.width * scaleFactor;
    scaledCanvas.height = canvas.height * scaleFactor;

    const ctx = scaledCanvas.getContext('2d');
    if (ctx) {
      ctx.scale(scaleFactor, scaleFactor);
      ctx.drawImage(canvas, 0, 0);
    }

      // Create a temporary download link
      const link = document.createElement('a');
      link.download = 'component-small.png';
      link.href = scaledCanvas.toDataURL('image/png');
      link.click();
    });
  }

  generateFile(){
    var a = document.getElementById('fileGraph')!;
    html2canvas(a).then(canvas => {
    const imageData = canvas.toDataURL('image/png');

    const scaleFactor = 0.5;
    const scaledCanvas = document.createElement('canvas');
    scaledCanvas.width = canvas.width * scaleFactor;
    scaledCanvas.height = canvas.height * scaleFactor;

    const ctx = scaledCanvas.getContext('2d');
    if (ctx) {
      ctx.scale(scaleFactor, scaleFactor);
      ctx.drawImage(canvas, 0, 0);
    }

      // Create a temporary download link
      const link = document.createElement('a');
      link.download = 'component-small.png';
      link.href = scaledCanvas.toDataURL('image/png');
      link.click();
    });
  }
}

