import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PostComponent } from './Post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'post',
    component:PostComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
