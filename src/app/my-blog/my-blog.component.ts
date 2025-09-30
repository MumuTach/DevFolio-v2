import { Component } from '@angular/core';

@Component({
  selector: 'app-my-blog',
  standalone: false,
  templateUrl: './my-blog.component.html',
  styleUrl: './my-blog.component.css'
})
export class MyBlogComponent {

  ngAfterViewInit() {
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) {
      mainTitle.focus();
    }
  }

}
