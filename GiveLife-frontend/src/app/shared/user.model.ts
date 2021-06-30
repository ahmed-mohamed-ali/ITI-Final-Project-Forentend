import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ NgForm, FormControl, FormGroup, Validators }from '@angular/forms'


export class User {
    name:string;
    NID:string;
    visa:string;
    region:[];
    password:any;
}