import { Component, OnInit } from '@angular/core';
import { Task } from './../shared/Task';
import { TaskService } from './../shared/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Tasks = [];

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.fetchTasks();
    let taskRes = this.taskService.getTaskList();
    taskRes.snapshotChanges().subscribe(res => {
      this.Tasks = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Tasks.push(a as Task);
      })
    })
  }

  fetchTasks() {
    this.taskService.getTaskList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteTask(id) {
    if (window.confirm('Please confirm before delete your task')) {
      this.taskService.deleteTask(id)
    }
  }


}
