import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class StudentService
{
    constructor(private http : HttpClient)
    {
        
    }

    getStudents(){
        return this.http.get<any>("http://localhost:3000");
    }
}