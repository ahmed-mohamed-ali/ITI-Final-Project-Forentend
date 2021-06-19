import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ NgForm, FormControl, FormGroup, Validators }from '@angular/forms'


export class User {
    name:string;
    NID:number;
    visa:number;
    region:[];
    password:any;
}