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
  
  selectedUser: User;

  
  constructor(private dataService: DataServiceService) { }

  getUsers(){
    
    console.log(this.dataService.getUsers());

      
    return  this.dataService.getUsers().subscribe(      
      data => { this.users = data },
      err => console.error(err),
      () => console.log('done loading User'));
    
  }
 /*
  addUser({valid, value}){
    if (valid && value){
   // this.dataService.addUser(this.newuser);
    
    this.dataService.addUser(this.newuser).subscribe(data => {alert("Succesfully Added User details");this.getUsers();},Error => {alert("failed while adding user details")});
    }
    else{
           
      alert("misssing or incorrect fields");
    }
  }
*/
  putUser(){
    
    console.log(this.dataService.updateUser(this.selectedUser));

      
    return  this.dataService.updateUser(this.selectedUser).subscribe(      
      data => { this.users = data },
      err => console.error(err),
      () => console.log('done updating User'));
    
  }


  deleteUser(id: number) {

    console.log(this.dataService.removeUser(this.selectedUser.id));

    return  this.dataService.removeUser(this.selectedUser.id).subscribe(      
      data => { this.users = data },
      err => console.error(err),
      () => console.log('done deleting User'));
  }

  deleteRefreshUser(id : number){
    this.deleteUser(id);
    this.show=false;
    this.getUsers();

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


  logTest()
  {
    console.log("ceci est un test "+this.selectedUser.password);
    
  }

  ngOnInit() {

    this.getUsers();
    
    }

}
