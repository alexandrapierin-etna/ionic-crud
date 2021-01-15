import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {
  updateTaskForm: FormGroup;
  id: any;

  constructor(
    private taskService: TaskService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,

  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.taskService.getTask(this.id).valueChanges().subscribe(res => {
      this.updateTaskForm.setValue(res);
    });
  }


  ngOnInit() {
    this.updateTaskForm = this.fb.group({
      title: [''],
      description: [''],
    })
    console.log(this.updateTaskForm.value)
  }

  updateForm() {
    this.taskService.updateTask(this.id, this.updateTaskForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}
