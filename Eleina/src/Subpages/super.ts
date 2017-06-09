import { HttpClient, json } from "aurelia-fetch-client"
import { autoinject } from "aurelia-framework"
import { Router } from 'aurelia-router'


export class Super{

    


    //username = '';
    //password = '';
    //message = ''

 

    //submitUserPass() {
        
    //    this.message = 'Hello ${username}, nice to meet you.'
    //}

    

    Username = '';
    Password = '';
    message = '';

    constructor(private http: HttpClient, private router: Router) {

    }

    sayHello() {
        this.message = `Hello ${this.Username}. Nice to meet you.`;
    }

    addUser() {
        this.http.fetch('login') {



        }
        
        
        

    }


}
