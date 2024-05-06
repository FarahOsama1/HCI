import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { passwordMatchValidator } from '../validators/password-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private formBuilder: FormBuilder) {}

  signUpForm = this.formBuilder.group({
    userName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z0-9_]*$/) // Only letters, numbers, and underscores allowed
      ]
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
    isCompany: [false], // Default value set here
  }, {
    validator: passwordMatchValidator
  });

  // Custom validation function to check against reserved keywords
  validateReservedKeywords(control: AbstractControl): ValidationErrors | null {
    const reservedKeywords = ['admin', 'root'];
    const username = (control.value as string).toLowerCase();

    if (reservedKeywords.includes(username)) {
      return { reservedKeyword: true }; // return an error if username is a reserved keyword
    }

    return null; // return null if validation passes
  }


  register(email: string, password: string): void {
    const userType = this.signUpForm.get('isCompany')?.value ? 'company' : 'individual';

  }
}
