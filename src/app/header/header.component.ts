import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: false
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;
  isLargeScreen = true;
  activeLink: string = 'home';
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth > 768;
    if (this.isLargeScreen) {
      this.isMenuOpen = false; 
    }
  }
  
  ngOnInit() {
    this.isLargeScreen = window.innerWidth > 768;
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

}
