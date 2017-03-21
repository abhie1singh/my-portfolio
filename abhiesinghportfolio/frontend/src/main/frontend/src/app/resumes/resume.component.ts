import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ng2-bootstrap';
import { Router }                 from '@angular/router';

@Component({
    selector: 'resume',
    templateUrl: './resume.component.html',
})
export class ResumeComponent {

    @ViewChild('staticTabs') staticTabs: TabsetComponent;

    pdfSrc: string = '/ShortResumeAbhie.pdf';
    page: number = 1;

constructor(private router: Router) {}
    public alertMe(): void {
        setTimeout(function (): void {
            alert('You\'ve selected the alert tab!');
        });
    }

    selectTab(tab_id: number) {
        this.staticTabs.tabs[tab_id].active = true;
    }

    disableEnable() {
        this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled
    }

    goBack(){
        this.router.navigate(['/home']);
    }

};