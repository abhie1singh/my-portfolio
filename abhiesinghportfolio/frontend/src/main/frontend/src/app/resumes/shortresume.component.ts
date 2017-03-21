import { Component } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
    selector: 'short-resume',
    templateUrl: './shortresume.component.html'
})
export class ShortResumeComponent {

    pdfSrc = '/ShortResumeAbhie.pdf';
    page: number = 1;
    pageurl: SafeResourceUrl;

    constructor(private domSanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
    }

};