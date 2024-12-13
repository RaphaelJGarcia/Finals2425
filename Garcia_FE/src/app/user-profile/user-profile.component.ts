import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ViewComponent } from '../view/view.component';
import { ServiceComponent } from '../service/service.component';
import { RouterModule } from '@angular/router';

declare var window: any; 

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, ViewComponent, NgForOf, RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  email = 'Ubstudent@s.ubaguio.edu';

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

    this.service.changeInstructor(student.instructor, student.email, student.courses);
  }

  openModal() {
    const modal = new window.bootstrap.Modal(document.getElementById('studentModal'));
    modal.show();
  }
}