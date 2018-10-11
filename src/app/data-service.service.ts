import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import{User} from './user'



let headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})




export class DataServiceService {
  private dataUrl = 'http://localhost:5000';  // URL to web api
  

  constructor(private http: HttpClient) { }


  getUsers() : Observable<User[]>{

    return this.http.get<User[]>(this.dataUrl+'/getjson');
  }

  /**getUsers(){
    //return this.http.get<User[]>(this.dataUrl+'/getjson');
    return this.http.get(this.dataUrl + '/getjson');
  }**/
  /**addUser(user : User): Observable<string>{

    return this.http.post(this.dataUrl+'/postjson',user,{headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' });

  }**/
  addUser (user: User): Observable<User> {
    let body = JSON.stringify(user);
    alert(body);
    return this.http.put<User>(this.dataUrl+'/postjson', body, httpOptions);
  }
  updateUser (user: User): Observable<User> {
    return this.http.put<User>(this.dataUrl+'/updatejson/'+user.id, user, httpOptions);
  }

  removeUser (id: number): Observable<{}> {
    return this.http.delete(this.dataUrl+'/removejson/'+id, httpOptions);
  }
}
