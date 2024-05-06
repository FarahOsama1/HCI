import { Component } from '@angular/core';
import { job } from '../interfaces/job';
import { JobService } from '../services/job.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  filteredJobs: any[] = [];
  searchTerm: string = '';
  savedjobs: job[] = [];
  searching: boolean = false;
  
  keywordFilters = {
    front: false,
    back: false,
    ui: false,
    test: false
  };



  ngOnInit() {
    this.savedjobs = this.jobService.getSavedJobs(); 
    this.initJobs();// Retrieve saved jobs from service
  }
  constructor(private jobService: JobService) {}
  //Saved: boolean = true;
  jobs: job[] = [
    {
      id:1,
      companyName:'UI company',
      jobTitle:'UI designer',
      location: '12 street nasr city',
      salaryRange: '8000~9000',
      minSalary:8000,
      maxSalary:9000,
      description: 'company that offer ui services',
      isSaved: true
    },
    {
      id: 2,
      companyName:'Back end company',
      jobTitle:'Back-End Developer',
      location: '30 street 6 october',
      salaryRange: '9000~10000',
      minSalary:9000,
      maxSalary:10000,
      description: 'company that offer back end services',
      isSaved: true
    },
    {
      id: 3,
      companyName:'Front end company',
      jobTitle:'Front-End Developer',
      location: '29 street el saida zinab',
      salaryRange: '7000~8000',
      minSalary:7000,
      maxSalary:8000,
      description: 'company that provide front end services',
      isSaved: true
    },
    {
      id: 4,
      companyName:'Test company',
      jobTitle:'Test Engineering',
      location: '15 street elabassia',
      salaryRange: '5000~7000',
      minSalary:5000,
      maxSalary:7000,
      description: 'company that offer test services',
      isSaved: true
    },
    

  ];
  initJobs() {
    for (const savedjob of this.savedjobs) {
      for (const job of this.jobs) {
        if(savedjob.id == job.id){
          job.isSaved = false;
        }


      // // Check if the job's ID exists in the saved jobs list
      // const isSaved = this.savedjobs.some(savedJob => savedJob.id === job.id);
      // // Update the isSaved property of the current job
      // job.isSaved = isSaved;
      }
    }
  }
  toggleSaved(job: job) {
    job.isSaved = !job.isSaved;
    if (job.isSaved) {
      this.jobService.removeSavedJob(job);
    } else {
      this.jobService.saveJob(job);
    }
  }
  getRowIndexArray(): number[] {
    return Array(Math.ceil(this.jobs.length / 2)).fill(0).map((x, i) => i);
  }

  filterJobs() {
      // Filter jobs if searchTerm is not empty
      if (this.searchTerm.trim() !== '') {
        this.searching = true;
        this.filteredJobs = this.jobs.filter(job =>
          job.companyName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          job.jobTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        // Perform filtering here as before
      } else {
        this.searching = false;
      }
  }
}
