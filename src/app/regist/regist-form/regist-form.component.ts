import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-regist-form',
  templateUrl: './regist-form.component.html',
  styleUrls: ['./regist-form.component.scss']
})
export class RegistFormComponent implements OnInit {
  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i].markAsDirty) {
        this.validateForm.controls[ i ].markAsDirty();
      }
    }
  }

  constructor(private fb: FormBuilder) {
  }

  validUserName() {

  }

  validPassword() {

  }

  validConfirmPassword() {

  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      confirm: [ null, [ Validators.required ] ],
    });
  }
}
