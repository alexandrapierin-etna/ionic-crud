import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/Task';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.page.html',
  styleUrls: ['./detail-task.page.scss'],
})
export class DetailTaskPage implements OnInit {
  public task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const taskId: string= this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(taskId).subscribe(task => { this.task = task;
    //second solution : this.task = await thiens.taskService.getTask(taskid).toPromise();
    //third solution : this.task = taskId.(switchMap(taskId => this.taskService.getTask(taskId)))

    });
  }
  


}
