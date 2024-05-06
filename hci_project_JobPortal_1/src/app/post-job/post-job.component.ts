import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AbstractControl, ValidationErrors, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
  constructor(private formBuilder:FormBuilder,private router: Router){}
  postJobForm = this.formBuilder.group({
    companyName: ['', [Validators.required]],
    jobTitle: ['', [Validators.required, Validators.maxLength(50)]],
    location: ['', [Validators.required]],
    applyingMethod: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    qualifications: ['', [Validators.required, Validators.maxLength(300)]]

    });

      // Getter methods for easier access in the template
  get companyName() { return this.postJobForm.get('companyName'); }
  get jobTitle() { return this.postJobForm.get('jobTitle'); }
  get location() { return this.postJobForm.get('location'); }
  get applyingMethod() { return this.postJobForm.get('applyingMethod'); }
  get description() { return this.postJobForm.get('description'); }
  get qualifications() { return this.postJobForm.get('qualifications'); }


}
