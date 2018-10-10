import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {User} from '../user'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users;
  
  user = {
    nom :"",
    email:"",
    password:""
  }
  selectedUser: User;

  
  constructor(private dataService: DataServiceService) { }

  getUsers(){
    
    console.log(this.dataService.getUsers());

      
    return  this.dataService.getUsers().subscribe(      
      data => { this.users = data },
      err => console.error(err),
      () => console.log('done loading User'));
    
  }
 
  addUser({valid, value}){
    if (valid && value){
    this.dataService.addUser(this.user);
    }
    else{
           
      alert("misssing or incorrect fields");
    }
  }
 
  onSelect(user: User): void {
    this.selectedUser = user;
  }    

  
  public show:boolean = false;
  public buttonName:any = 'User Details'

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "User Details";
  }
  

  ngOnInit() {

    this.getUsers();
    
    }

}
