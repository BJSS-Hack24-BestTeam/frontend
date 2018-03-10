import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {
  globalApi: string = 'http://51.143.186.87:8080/message/';

  constructor(public http: HttpClient) {
  }

  public broadcastGlobally(message: string) {
    //const body = JSON.stringify({ message });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    this.http.put(this.globalApi + '-1', message, { headers: headers} ).subscribe(v => console.log(v));
  }

  public broadcastToPerson(personId: number, message: string) {
    //const body = JSON.stringify({ message });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    this.http.put(this.globalApi + personId, message, { headers: headers} ).subscribe(v => console.log(v));
  }
}
