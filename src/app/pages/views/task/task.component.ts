import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public taskID;
  public currentTask;
  constructor(
    private route: ActivatedRoute,
    // private _task: TaskService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.taskID = parseInt(params.get('id'))
      console.log(params)
    })
    // this._task.getTaskbyID(this.taskID)
    // .pipe(task => {
    //   return this.currentTask = task;
    // })
  }

}
