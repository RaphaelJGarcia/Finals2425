import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  imports:[CommonModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  standalone: true, 
})
export class ViewComponent {
  @Input() student: any;

  constructor() {}

  ngOnInit(): void {
    console.log('Student data received:', this.student); 
  }
}


