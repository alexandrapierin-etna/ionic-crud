import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { TaskService } from './../shared/task.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  taskForm: FormGroup;

  //to create and to initialize an object with a class
  constructor(
    private taskService: TaskService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  // initialized composant for Angular
  ngOnInit() {
    this.taskForm = this.fb.group({
      title: [''],
      description: ['']
    })
  }

  formSubmit() {
    if (!this.taskForm.valid) {
      return false;
    } else {
      this.taskService.createTask(this.taskForm.value).then(res => {
        console.log(res)
        this.taskForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

}
