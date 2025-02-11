import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  itemForm!:FormGroup;
  formModel:any={};
  showError:boolean=false;
  errorMessage:any;

  constructor(private fb:FormBuilder,private httpService:HttpService, private authService:AuthService,private router:Router){
    // this.formModel.username;
    // this.formModel.password;
    // this.formModel=this.formModel || {username:'',password:''};

    this.itemForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{8,}$/)]],
    });
  }


  ngOnInit() {

  }

  onLogin(): void{
    if(this.itemForm.valid){
      this.httpService.Login(this.itemForm.value).subscribe((a:any)=>{
        if(a && a.user){
          this.authService.saveToken(a.token);
          this.authService.SetRole(a.user.role);
          this.authService.saveUserId(a.user.id);

          this.router.navigate(['/dashboard']);
        }
    
        else{
          this.showError=true;
          this.errorMessage="Invalid username or password";
        }
        (error:any)=>{
          this.showError=true;
          this.errorMessage="An error has occured, please try again later."
        }
      });
      }
      else{
          this.showError=true;
          this.errorMessage="Please fill in all required fields."

      }
 
  
  }

  registration():void{
    this.router.navigateByUrl('/registration');
  }

}