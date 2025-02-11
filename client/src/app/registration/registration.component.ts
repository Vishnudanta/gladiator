// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpService } from '../../services/http.service';


// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html'
 
// })
// export class RegistrationComponent {
//   itemForm!:FormGroup;


// }




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
 
})
export class RegistrationComponent implements OnInit{
  

  //todo: complete missing code
  itemForm!:FormGroup;
  formModel:any={role:null,email:'',password:'',username:''};
  showMessage:Boolean=false;
  responseMessage:any;

  constructor(private fb:FormBuilder,private http:HttpService){
    this.itemForm=this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
      role:['Role',[Validators.required]]
    })
  }
ngOnInit(): void {
    
  }
  onRegister(){
    if(this.itemForm.valid){
      this.http.registerUser(this.itemForm.value).subscribe((r)=>{
        console.log(r);
        this.showMessage=true;
        this.itemForm.reset();
      })
    }
    this.itemForm.markAllAsTouched();
  }


}