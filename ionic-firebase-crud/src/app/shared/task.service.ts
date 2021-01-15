import { Injectable } from '@angular/core';
import { Task } from '../shared/Task';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskListRef: AngularFireList<any>;
  taskRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {

   }

  // Add a  new task and store it in database
  createTask(task: Task) {
    return this.taskListRef.push({
      title: task.title,
      description: task.description,
   })
  }

   // get the list of all tasks
   getTaskList() {
    this.taskListRef = this.db.list('/task');
    return this.taskListRef;
  }

  //get only one task
    getTask(id: string) {
      this.taskRef = this.db.object('/task/' + id);
      return this.taskRef;
    }

  //update the task inside the list
  updateTask(id, task: Task) {
    return this.taskRef.update({
      title: task.title,
      description: task.description,
  })
}

   // delete a task inside the list
   deleteTask(id: string) {
    this.taskRef = this.db.object('/task/' + id);
    this.taskRef.remove();
  }
}


