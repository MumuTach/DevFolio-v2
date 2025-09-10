import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrl: './description.component.css',
    standalone: false
})
export class DescriptionComponent implements OnInit {
  animatedText = '';

  private fullText = "I am a fullstack developer";
  private currentIndex = 0;

   
  ngOnInit() {
    this.typeText();
  }

  private typeText() {
    if (this.currentIndex < this.fullText.length) {
      this.animatedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeText(), 50); // Ajuster la vitesse de l'animation
    }
  }
}
