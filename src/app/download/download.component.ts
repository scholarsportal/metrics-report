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

    // downloads
    const worksheet_downloads = workbook.addWorksheet('Downloads');  
    const headers_downloads = Object.keys(['date', 'count']);
    worksheet_downloads.addRow(['date', 'count']);

    const worksheet_datasets = workbook.addWorksheet('Datasets');  
    const headers_datasets = Object.keys(['date', 'count']);
    worksheet_datasets.addRow(['date', 'count']);

    const worksheet_users = workbook.addWorksheet('Users');  
    const headers_users = Object.keys(['date', 'count']);
    worksheet_users.addRow(['date', 'count']);

    const worksheet_storage = workbook.addWorksheet('Storage');  
    const headers_storage = Object.keys(['date', 'count']);
    worksheet_storage.addRow(['date', 'count']);

    const worksheet_subject = workbook.addWorksheet('Subject Breakdown');  
    const headers_subject = Object.keys(['subject', 'count', 'percent']);
    worksheet_subject.addRow(['subject', 'count', 'percent']);

    const worksheet_file = workbook.addWorksheet('File Breakdown');  
    const headers_file = Object.keys(['file', 'count', 'percent']);
    worksheet_file.addRow(['content type', 'count', 'percent']);

    for (let i = 0; i < months.length - 1; i+=1){
      worksheet_downloads.addRow([months[i],this.data['downloads_graph_agg_data'][i]]); 
      worksheet_datasets.addRow([months[i],this.data['datasets_graph_agg_data'][i]]); 
      worksheet_users.addRow([months[i],this.data['users_graph_agg_data'][i]]); 
      worksheet_storage.addRow([months[i],this.data['size_graph_agg_data'][i]]); 
    }

    for (let i = 0; i < this.data['subject_full_data'].length - 1; i+=1){
      worksheet_subject.addRow([this.data['subject_full_data'][i]['subject'], this.data['subject_full_data'][i]['count'], this.data['subject_full_data'][i]['percent'] ]); 
    }

    for (let i = 0; i < this.data['file_content_full_data'].length - 1; i+=1){
      worksheet_file.addRow([this.data['file_content_full_data'][i]['contenttype'], this.data['file_content_full_data'][i]['count'], this.data['file_content_full_data'][i]['percent'] ]); 
    }

    workbook.xlsx.writeBuffer().then((buffer: any) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, `${fileName}.xlsx`);
    });
  }

  generatePDF(){
    console.log('hefkdaskfdsokfsakfs');
    var x = document.getElementById('contentToConvert')!;
    console.log(x)
    html2canvas(x).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF

      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('dynamicData.pdf'); // Generated PDF
    });
  }

  generateExcel() {
    this.exportToExcel(this.data, 'test');
  }

}

