import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
 constructor(private http:HttpClient){}
 GetAllRecord(){
  return this.http.get('http://jsonplaceholder.typicode.com/posts');
 }
 getRecordById(id: any){
return this.http.get('http://jsonplaceholder.typicode.com/posts/'+id);
 }
}