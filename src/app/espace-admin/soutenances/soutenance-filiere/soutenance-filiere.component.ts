import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-soutenance-filiere',
  templateUrl: './soutenance-filiere.component.html',
  styleUrls: ['./soutenance-filiere.component.css'],
})
export class SoutenanceFiliereComponent implements OnInit {
  @Input() filiere: string;
  @Input() soutenances;
  @ViewChild('content') content: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  public export() {

    var data = document.getElementById('content');  
    const div = document.getElementById('content');
    const options = {
      background: 'white',
      scale: 1
    };

    html2canvas(div, options).then((canvas) => {

      var img = canvas.toDataURL("image/JPG");
      var doc = new jsPDF('l', 'mm', 'a4', 1);

      // Add image Canvas to PDF
      const bufferX = 5;
      const bufferY = 5;
      const imgProps = (<any>doc).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'JPG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');

      return doc;
    }).then((doc) => {
      doc.save('test.pdf');  
    });
    // var data = document.getElementById('content');
    // html2canvas(data).then((canvas) => {
    //   // Few necessary setting options
    //   var imgWidth = 208;
    //   var pageHeight = 295;
    //   var imgHeight = (canvas.height * imgWidth) / canvas.width;
    //   var heightLeft = imgHeight;

    //   const contentDataURL = canvas.toDataURL('image/png');
    //   let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    //   var position = 0;
    //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    //   pdf.save('new-file.pdf'); // Generated PDF
    // });
  }
}
