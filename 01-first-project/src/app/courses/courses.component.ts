import { Component, OnInit, Inject } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public portalName: string;
  public courses: string[]

  constructor(private coursesService: CoursesService) {
    this.portalName = 'http:/loiane.training';
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

}
