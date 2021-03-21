import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  click1(){
    document.getElementById('para').style.color="#4A0EE9";
  }

  click2(){
    document.getElementById('para').style.color="#F19A0D";
  }

  
  click3(){
    document.getElementById('para').style.color="#F1210D ";
  }

  

}
