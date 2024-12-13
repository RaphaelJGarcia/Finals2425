import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgForOf } from '@angular/common';
import { ViewComponent } from '../view/view.component';
import { ServiceComponent } from '../service/service.component';

declare var bootstrap: any;

@Component({
  selector: 'app-class-record',
  imports: [RouterLink, CommonModule, NgForOf, ViewComponent],
  templateUrl: './class-record.component.html',
  styleUrls: ['./class-record.component.css'],
  standalone: true
})
export class ClassRecordComponent {
  students = [
    { id: 1, name: 'Maris Racal', subject : 'Theater', activity: 'Movie Actor', additionalInfo: 'Was caught cheating in an activity', instructor: 'Miss. Netizen Nanghuhuli', email: 'Mars@s.ubaguio.edu', courses: 'ISCANDALO1, MAPEH, ARTISTIC2' },
    { id: 2, name: 'Anthony Jennings', activity: 'Public Relations', additionalInfo: 'Reacently lost a sweater during one his activites ', subject: 'Speech', instructor: 'Miss. Netizen Nanghuhuli', email: 'Ant@s.ubaguio.edu', courses: 'PUBLICSPEAKING1, PUBLICRELATIONS1' },
    { id: 3, name: 'Sarah DoDirty', activity: 'Politics', additionalInfo: 'Spent the class funds for herself', subject: 'Political Science', instructor: 'Mimi Em', email: 'DoDirty@s.ubaguio.edu', courses: 'POLSCI1, GASTOSERA2' },
    { id: 4, name: 'Mariah Carey', activity: 'Music', additionalInfo: 'Forda music writing si akla', subject: 'Music101', instructor: 'Angel Locsin', email: 'Mariah@s.ubaguio.edu', courses: 'MUSICOLOGY1' }
  ];

  selectedStudent: any = null;

  constructor(private service: ServiceComponent) {}

  viewStudent(student: any) {
    this.selectedStudent = student;
    console.log('Selected student:', this.selectedStudent);

    // Update instructor details
    this.service.changeInstructor(student.instructor, student.email, student.courses);

    // Show the modal using Bootstrap
    const modalElement = document.getElementById('studentModal');
    if (!modalElement) {
      console.error('Modal element not found!');
      return;
    }
    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.show();
  }
}
