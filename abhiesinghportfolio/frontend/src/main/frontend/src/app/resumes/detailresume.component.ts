import { Component } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
    selector: 'detail-resume',
    templateUrl: './detailresume.component.html'
})
export class DetailResumeComponent {

    pdfSrc = '/DetailResumeAbhie.pdf';
    page: number = 1;
    pageurl: SafeResourceUrl;

    constructor(private domSanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
    }

};