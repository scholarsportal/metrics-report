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

    
    const worksheet_downloads = workbook.addWorksheet('Downloads');  
    const headers_downloads = Object.keys(['date', 'count', 'cumul count']);
    worksheet_downloads.addRow(['date', 'count', 'cumul count']);

    const worksheet_datasets = workbook.addWorksheet('Datasets');  
    const headers_datasets = Object.keys(['date', 'count', 'cumul count']);
    worksheet_datasets.addRow(['date', 'count', 'cumul count']);

    const worksheet_files = workbook.addWorksheet('Files');  
    const headers_files = Object.keys(['date', 'count', 'cumul count']);
    worksheet_files.addRow(['date', 'count', 'cumul count']);

    const worksheet_users = workbook.addWorksheet('Users');  
    const headers_users = Object.keys(['date', 'count', 'cumul count']);
    worksheet_users.addRow(['date', 'count', 'cumul count']);

    const worksheet_storage = workbook.addWorksheet('Storage');  
    const headers_storage = Object.keys(['date', 'count', 'cumul count']);
    worksheet_storage.addRow(['date', 'count', 'cumul count']);

    const worksheet_subject = workbook.addWorksheet('Subject Breakdown');  
    const headers_subject = Object.keys(['subject', 'count', 'percent']);
    worksheet_subject.addRow(['subject', 'count', 'percent']);

    const worksheet_file = workbook.addWorksheet('File Breakdown');  
    const headers_file = Object.keys(['file type', 'specific type', 'count', 'percent']);
    worksheet_file.addRow(['type', 'content type', 'count', 'percent']);

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

  generatePDF(){
    console.log('hefkdaskfdsokfsakfs');
    const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var a = document.getElementById('title_download')!;
    var b = document.getElementById('title_date')!;
    var c = document.getElementById('main_meteris')!;
    var d = document.getElementById('contentToConvert')!;
    var e = document.getElementById('subject_convert')!; 
    var f = document.getElementById('file_convert')!;


    html2canvas(a).then(canvas => {
      const imgWidth = 100;
      const pageHeight = 100;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      let position = 5;
      pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight);
    });

    html2canvas(b).then(canvas => {
      const imgWidth = 100;
      const pageHeight = 100;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      let position = 12;
      pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight);
    });

    html2canvas(c).then(canvas => {
      const imgWidth = 100;
      const pageHeight = 100;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      let position = 20;
      pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, imgHeight);
    });

    html2canvas(d).then(canvas => {
      const imgWidth = 100;
      const pageHeight = 100;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      let position = 5;
      pdf.addImage(contentDataURL, 'PNG', 110, position, imgWidth, imgHeight);
    });

    html2canvas(e).then(canvas => {
      const imgWidth = 100;
      const pageHeight = 100;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      let position = 155;
      pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, imgHeight);
    });

    html2canvas(f).then(canvas => {
      const imgWidth = 100;
      const pageHeight = 100;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      let position = 220;
      pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, imgHeight);
      pdf.save('dynamicData.pdf'); // Generated PDF
    });
  }

  generateExcel() {
    this.exportToExcel(this.data, 'test');
  }

}

