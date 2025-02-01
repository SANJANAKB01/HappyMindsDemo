import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; // Ensure this is imported
import { WebcamComponent } from './webcam/webcam.component';
import { ReactiveFormsModule } from '@angular/forms';  // 
import { RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent, // Ensure this is declared
    WebcamComponent, AdminLoginComponent, AdminSignupComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule,ReactiveFormsModule  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

