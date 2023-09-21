import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listStudents : any[] = []

  constructor(private studentServer: StudentService) {
    this.studentServer.getStudents().subscribe((list : any) => {
      console.log(list)
      this.listStudents = list.rows
    })
  }
}
