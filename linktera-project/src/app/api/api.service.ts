import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getEmployees() {
        return this.http.get<any>('assets/employees.json')
            .toPromise()
            .then(response => {
                return response;
            });
    }

    getNews() {
        return this.http.get<any>('assets/news.json')
            .toPromise()
            .then(response => {
                return response;
            });
    }

    getJobs() {
        return this.http.get<any>('assets/jobs.json')
            .toPromise()
            .then(response => {
                return response;
            });
    }
}
