import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponent {
  private instructorSource = new BehaviorSubject<string>('');
  currentInstructor = this.instructorSource.asObservable();

  private instructorEmailSource = new BehaviorSubject<string>('');
  currentInstructorEmail = this.instructorEmailSource.asObservable();

  private coursesSource = new BehaviorSubject<string>('');
  currentCourses = this.coursesSource.asObservable();

  private consultationScheduleSource = new BehaviorSubject<string>('No schedule available');
  currentConsultationSchedule = this.consultationScheduleSource.asObservable();

  // Mapping of instructors to their consultation schedules
  private instructorScheduleMap: { [key: string]: string } = {
    'Angel Locsin': 'Mon, 1 PM - 3 PM',
    'Netizen Nanghuhuli': 'Fri, 8 AM - 10 AM',
    'Mimi Em': 'Wed-, 12 PM - 3 PM',
  };

  changeInstructor(instructor: string, email: string, courses: string) {
    this.instructorSource.next(instructor);
    this.instructorEmailSource.next(email);
    this.coursesSource.next(courses);
    
    const schedule = this.instructorScheduleMap[instructor] || 'No schedule available'; // Default schedule
    this.consultationScheduleSource.next(schedule);
  }
}