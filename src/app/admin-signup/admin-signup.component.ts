import { Component, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent {
  @Input() toggleForms!: () => void; // Accept function from parent
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      therapistName: ['', Validators.required],
      city: ['', Validators.required],
      speciality: ['', Validators.required],
      gender: ['', Validators.required],
      years_experience: ['', [Validators.required, Validators.min(0)]],
      qualifications: ['', Validators.required],
      workplace: ['', Validators.required],
      contact_email: ['', [Validators.required, Validators.email]]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  onSignUp() {
    if (this.signupForm.valid) {
      console.log('Sign-up successful!', this.signupForm.value);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}