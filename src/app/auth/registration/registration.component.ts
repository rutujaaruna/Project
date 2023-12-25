import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  signInForm : FormGroup = new FormGroup({});
  constructor(
    private fb : FormBuilder
  ){}

  ngOninit(){
    this.signInForm = this.fb.group({
      
    })
      const container = document.getElementById('container');
      const registerBtn = document.getElementById('register');
      const loginBtn = document.getElementById('login');
  
      if (container && registerBtn && loginBtn) {
        registerBtn.addEventListener('click', () => {
          container.classList.add("active");
        });
  
        loginBtn.addEventListener('click', () => {
          container.classList.remove("active");
        });
      
    }
  }

}
