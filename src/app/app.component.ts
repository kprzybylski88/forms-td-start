import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultQuestion = 'teacher';
  answer = '';
  eyeColor = ['blue', 'green', 'brown', 'black', 'red', 'rainbow', 'glowing red', 'glowing white'];

  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    eyeColor: ''
  };

  submitted = false;

  @ViewChild('f', {static: true}) signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
    console.log('uuuu');
  }

/*   onSubmit(form: NgForm) {
    console.log(form);
  } */

  onSubmit() {
    console.log(this.signupForm.value);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.eyeColor = this.signupForm.value.eyeColor;

    this.submitted = true;

    this.signupForm.reset();
  }
}
