import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";  
@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  //////////////////////signalr//////////////////////////////
 // public data: PostModel[];
  private hubConnection: signalR.HubConnection
    public startConnection = () => {
      this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl('http://localhost:55720/Donate')
                              .build();
      this.hubConnection
        .start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err))
    }
    data:any;
    
    public DonationDataListener = () => {
      this.hubConnection.on('d', (data) => {
        this.data = data;
        console.log(data);
      });
    }
////////////////////////////////////////////
  constructor() {}
}
