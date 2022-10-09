import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm! : FormGroup
  constructor(private formbuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:['']
    })
  }
  signUp(){
    alert("Rigestered Successfully!!!");
    this.signupForm.reset();
    this.router.navigate(['/login'])
  }

}
