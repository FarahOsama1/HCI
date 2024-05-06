import { Component } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  jobTitle: string = "Software Engineer";
  companyName: string = "ABC Company";
  location: string = "New York, NY";
  fullTimePartTime: string = "Full Time";
  remoteOnsite: string = "Onsite";
  yearsOfExperience: number = 3;
  jobDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae commodo est. Integer interdum felis id nunc commodo ullamcorper.";
  jobQualifications: string = "Bachelor's degree in Computer Science or related field, experience with JavaScript frameworks such as Angular or React, strong problem-solving skills.";
  jobResponsibilities: string = "Develop and maintain web applications, collaborate with team members on project requirements, participate in code reviews and debugging sessions.";
}
