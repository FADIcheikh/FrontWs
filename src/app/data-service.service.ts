import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import{User} from './user'



let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' })
};


@Injectable({
  providedIn: 'root'
})




export class DataServiceService {
  private dataUrl = 'http://localhost:5000';  // URL to web api
  

  constructor(private http: HttpClient) { }


  getUsers() : Observable<User[]>{

    return this.http.get<User[]>(this.dataUrl+'/getjson',httpOptions);
  }

  
 public addUser(nom: string ,email: string,password:string): Observable<string>  {

  const response = this.http.post(
    this.dataUrl + '/postjson',
    {
      "nom": nom,
      "email" : email,
      "password": password
    },{headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }
  );
  return response;
}
  updateUser (user: User): Observable<User> {
    return this.http.put<User>(this.dataUrl+'/updatejson/'+user.id, user, httpOptions);
  }

  removeUser (id: number): Observable<{}> {
    return this.http.delete(this.dataUrl+'/removejson/'+id, httpOptions);
  }
}
