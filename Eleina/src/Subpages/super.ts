﻿import { HttpClient, json } from "aurelia-fetch-client"

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

    sayHello() {
        this.message = `Hello ${this.Username}. Nice to meet you.`;
    }

    addUser() {
        this.http.fetch{
    }


}
