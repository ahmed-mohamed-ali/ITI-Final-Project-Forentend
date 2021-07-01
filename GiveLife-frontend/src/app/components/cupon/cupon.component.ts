import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import {ErrorHandlerService} from 'src/app/service/error-handler.service'
@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.css']
})
export class CuponComponent implements OnInit {

  public errorMessage: string = '';
  cupons:[]
  constructor(public jwtservice:JwtService,private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.jwtservice.getCupon().subscribe(res=>{
      let response:any=res;
      console.log(response);
      if(response.success){
        
        this.cupons=response.cupon
        console.log(this.cupons);
      }
    
    },err=>{
      this.errorHandler.handleError(err);
      this.errorMessage = this.errorHandler.errorMessage;
      
      console.log(err.error)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    }
    )
  }

}
