import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  IsLoggin:any=false;
  roleName!: string | null;
  constructor(private authService: AuthService, private router:Router)
  {
   
  }
  ngOnInit(): void {
    
    this.IsLoggin=this.authService.getLoginStatus;
    if(this.IsLoggin==true)
    {
      this.router.navigateByUrl('/login'); 
    }
    else
    {
      this.roleName=this.authService.getRole;
    }
  }
  logout()
{
  this.authService.logout();
  window.location.reload();
}

}


// import { Component, OnInit } from '@angular/core';
// // import { AuthService } from './auth.service';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   IsLoggin: any = false;
//   roleName: string | null = null;

//   constructor(private authService: AuthService, private router: Router) {}

//   ngOnInit(): void {
//     this.IsLoggin = this.authService.getLoginStatus;
//     if (!this.IsLoggin) {
//       this.router.navigateByUrl('/login');
//     } else {
//       this.roleName = this.authService.getRole;
//     }
//   }

//   logout(): void {
//     this.authService.logout();
//     window.location.reload();
//   }
// }


