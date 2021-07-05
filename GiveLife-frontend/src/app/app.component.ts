import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'ngx-connection-service';
import { HeaderComponent} from 'src/app/components/header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GiveLife-frontend';
   hasNetworkConnection: boolean;
  hasInternetAccess: boolean;
  status: string;
 
  constructor(private connectionService: ConnectionService,private router: Router) {
    this.connectionService.monitor().subscribe(currentState => {
      this.hasNetworkConnection = currentState.hasNetworkConnection;
      this.hasInternetAccess = currentState.hasInternetAccess;
      if (this.hasNetworkConnection && this.hasInternetAccess) {
        this.status = 'ONLINE';
        console.log(" internet connection");
        
      } else {
        this.status = 'OFFLINE';
        
      }
     
    });
   
  
  }

}


