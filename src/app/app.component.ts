import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [...COURSES];

  title = COURSES[0].description;

  price = 9.9998723;

  rate = 0.78;

  course = COURSES[0];

  startDate = new Date(2000, 0, 1);

  onCourseSelected(course: Course){
    console.log('app component', course);
    
  }

  // 트래킹을 index같은 동적으로 부여되는 값으로 하는게 좋지 않은 이유는
  // index의 경우 배열이 수정되면 실제 값을 변하지 않았더라도
  // 앵귤러에서는 실제 값이 바뀌었다 판단하여 다시 렌더링하게 되기 때문임
  
  // 반면에 고유한 값을 사용할 경우
  // 해당 dom의 위치만 조정해주면 되기 때문에 최적화 문제를 피할 수 있음
  trackCourse(index: number, course: Course){
    return course.id;
  }

}
