import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  fullText: string = ' Hello, at your service.The site is currently under development.You can only register in it or buy pro mode to use it unlimitedly after completing the site (only if you buy it now). ';
  displayedText: string = '';
  index: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 50); // Adjust speed here
    }
  }
}
