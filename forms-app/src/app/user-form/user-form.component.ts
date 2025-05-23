import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbidenNameValidator, ForbidenNameValidator } from '../validators';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  userForm!:FormGroup;

  constructor( private fb:FormBuilder){
this.initForm();
  }

  // initForm(){
  //   this.userForm=new FormGroup({
  //     username:new FormControl(''),
  //     email:new FormControl(''),
  //     age: new FormControl(''),
  //     phone: new FormControl('')
  //   });
  // }/

  initForm(){
    this.userForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(4),forbidenNameValidator(/admin/i)]],
      age:['',[Validators.required,Validators.pattern(/^(1[0-9]|[2-9][0-9])$/)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required]]
    });
  }
}
