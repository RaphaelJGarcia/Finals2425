import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isModalOpen = false;
  appointment = {
    name: '',
    email: '',
    date: '',
    time: ''
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitAppointment() {
    console.log('Appointment Data:', this.appointment);
    alert('Appointment Request Submitted');
    this.isModalOpen = false;
    this.appointment = { name: '', email: '', date: '', time: '' }; // Reset the form
  }
}
