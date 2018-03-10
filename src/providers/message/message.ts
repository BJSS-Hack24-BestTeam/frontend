import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {
  globalApi: string = '51.143.186.87:8080/message/-1';

  constructor(public http: HttpClient) {
  }

  public broadcastGlobally(message: string) {
    const body = JSON.stringify({ message });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put(this.globalApi, body, { headers: headers} );
  }

}
