import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();


  onCourseViewed(){
    console.log('card component = button clicked');
    this.courseSelected.emit(this.course);
  }

}
