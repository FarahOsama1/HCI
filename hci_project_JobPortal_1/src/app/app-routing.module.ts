import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LogInComponent } from './log-in/log-in.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { PostJobComponent } from './post-job/post-job.component';

const routes: Routes = [
  {path: '', component:LogInComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LogInComponent},
  {path: 'home', component:PostJobComponent}, // modify it
  {path: 'com', component:ApplyForJobComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
