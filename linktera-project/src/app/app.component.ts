import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linktera-project';
  employees = [];
  news = [];
  jobs = [];
  advertisements = [];
  logs = [];
  tempLogs = [];
  menu = false;

  constructor(public api: ApiService) {
    this.getEmployees();
    this.getNews();
    this.getJobs();
    this.getAdvertisements();
    this.getLogs();
  }


  async getEmployees() {
    await this.api.getEmployees().then((res: any) => {
      if (res) {
        this.employees = res;
        // tslint:disable-next-line: only-arrow-functions
        this.employees = this.employees.sort(function (a: any, b: any) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return b.birthday - a.birthday;
        });
        console.log(this.employees);
      } else {
      }
    });
  }

  async getNews() {
    await this.api.getNews().then((res: any) => {
      if (res) {
        this.news = res;
      } else {
      }
    });
  }

  async getJobs() {
    await this.api.getJobs().then((res: any) => {
      if (res) {
        this.jobs = res;
      } else {
      }
    });
  }

  async getAdvertisements() {
    await this.api.getAdvertisements().then((res: any) => {
      if (res) {
        this.advertisements = res;
      } else {
      }
    });
  }

  async getLogs() {
    await this.api.getLogs().then((res: any) => {
      if (res) {
        this.logs = res;
        this.tempLogs = res;
      } else {
      }
    });
  }

  OpenClose() {
    this.menu = !this.menu;
  }

  employeeSelect(id: number) {
    if (id === 0) {
      this.logs = this.tempLogs;
    } else {
      this.logs = this.logs.filter(x => x.employee_id === id);
    }
  }

  projectSelect(id: number) {
    if (id === 0) {
      this.logs = this.tempLogs;
    } else {
      this.logs = this.logs.filter(x => x.project_id === id);
    }
  }

}
