import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './home-page/description/description.component';
import { AboutMeComponent } from './home-page/about-me/about-me.component';
import { ProjetsComponent } from './home-page/projets/projets.component';
import { ContactsComponent } from './home-page/contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SkillsComponent } from './home-page/skills/skills.component';
import { CertificationsComponent } from './home-page/certifications/certifications.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatIconModule,
        MatFormFieldModule
        
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        DescriptionComponent,
        AboutMeComponent,
        ProjetsComponent,
        ContactsComponent,
        FooterComponent,
        SkillsComponent,
        CertificationsComponent
      ],
      providers: [
        provideHttpClient()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
