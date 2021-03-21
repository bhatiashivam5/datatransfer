import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model={
    username:'',
    useremail:'',
    password:'',
    confirmpassword:'',
 }


  constructor() { }

  ngOnInit(): void {
  }

  getValues(f:NgForm)
  {
      console.log(f.value);
  }

}
