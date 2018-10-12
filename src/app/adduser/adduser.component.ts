import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  
    nom :"";
    email:"";
    password :"";

    
  
  constructor(private dataService: DataServiceService, private router:Router) { }

  ngOnInit() {
  }


  addUser(){
    
    this.dataService.addUser(this.nom,this.email,this.password).subscribe(data => {alert("Succesfully Added User details")},Error => {alert("failed while adding user details")});
    this.router.navigate(['']);   
  }

    inputValue :string;

     Cancel() {
       this.inputValue='';
  }

}

