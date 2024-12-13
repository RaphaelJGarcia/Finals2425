import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLinkActive, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student: any = {};
  students = [
    { id: '1', name: 'Maris Racal', subject : 'Theater', activity: 'Movie Actor', additionalInfo: 'Was caught cheating in an activity', instructor: 'Miss. Netizen Nanghuhuli', instructorEmail: 'Net@e.ubaguio.edu', courses: 'ISCANDALO1, MAPEH, ARTISTIC2', consultationSchedule:'Fri, 8 AM - 10 AM' },
    { id: '2', name: 'Anthony Jennings', activity: 'Public Relations', additionalInfo: 'Reacently lost a sweater during one his activites ', subject: 'Speech', instructor: 'Miss. Netizen Nanghuhuli', instructorEmail: 'net@e.ubaguio.edu', courses: 'PUBLICSPEAKING1, PUBLICRELATIONS1', consultationSchedule:'Fri, 8 AM - 10 AM' },
    { id: '3', name: 'Sarah DoDirty', activity: 'Politics', additionalInfo: 'Spent the class funds for herself', subject: 'Political Science', instructor: 'Mimi Em', instructorEmail: 'Mimi@s.ubaguio.edu', courses: 'POLSCI1, GASTOSERA2',consultationSchedule: 'Wed-, 12 PM - 3 PM'},
    { id: '4', name: 'Mariah Carey', activity: 'Music', additionalInfo: 'Forda music writing si akla', subject: 'Music101', instructor: 'Angel Locsin', instructorEmail: 'angel@e.ubaguio.edu', courses: 'MUSICOLOGY1',consultationSchedule: 'Mon, 1 PM - 3 PM' },
   ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: ServiceComponent
  ) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.student = this.students.find(student => student.id === studentId) || null;
      if (this.student) {
        // Initialize the consultation schedule
        this.service.currentConsultationSchedule.subscribe(schedule => {
          this.student.consultationSchedule = schedule;
        });
      } else {
        console.error('Student not found');
      }
    } else {
      console.error('No student ID provided');
    }
  }

  saveStudent(): void {
    if (this.student) {
      console.log('Saving student:', this.student);

      // Update the service with the new values
      this.service.changeInstructor(this.student.instructor, this.student.instructorEmail, this.student.courses);

      // Navigate back after saving
      this.goBack();
    }
  }

  goBack(): void {
    this.location.back();
  }
}