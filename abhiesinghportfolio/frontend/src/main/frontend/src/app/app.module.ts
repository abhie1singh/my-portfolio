import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TabsModule } from 'ng2-bootstrap';

import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routing } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { LandPageComponent } from './landpage/landpage.component';
import { IntroComponent } from './intro/intro.component';
import { MyWorkComponent } from './mywork/mywork.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { ResumeComponent } from './resumes/resume.component';
import { ShortResumeComponent } from './resumes/shortresume.component';
import { DetailResumeComponent } from './resumes/detailresume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    LandPageComponent,
    IntroComponent,
    MyWorkComponent,
    FooterComponent,
    EducationComponent,
    ResumeComponent,
    PdfViewerComponent,
    ShortResumeComponent,
    DetailResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
