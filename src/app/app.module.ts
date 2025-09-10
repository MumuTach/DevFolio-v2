import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { DescriptionComponent } from './home-page/description/description.component';
import { AboutMeComponent } from './home-page/about-me/about-me.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProjetsComponent } from './home-page/projets/projets.component';
import { ContactsComponent } from './home-page/contacts/contacts.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { provideHttpClient } from '@angular/common/http'; //remplace HttpClienModule pour Angular 18
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CertificationsComponent } from './home-page/certifications/certifications.component';
import { SkillsComponent } from './home-page/skills/skills.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescriptionComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjetsComponent,
    ContactsComponent,
    FooterComponent,
    CertificationsComponent,
    MyBlogComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    LazyLoadImageModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideHttpClientTesting()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
