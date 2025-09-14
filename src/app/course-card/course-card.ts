import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input()
  title:string = "this is the title from child component";
 
  interpolation = "This is called interpolation";

}
