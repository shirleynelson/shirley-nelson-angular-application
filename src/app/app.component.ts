import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  grouptitle='app.component.ts data binding';
  httptitle='http event';
  clicktitle= 'click button';
  keydowntitle='key down';
  firstname='First Name';
  jsonvalue={
    a: 'hello',
    b: 'world'
  }

  newdate= new Date()

  constructor(private httpService: HttpService ){ }
  httphandleEvent() {
      this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
      console.log('app.component.ts http event')
  }

  keydownhandleEvent() {
    console.log('app.component.ts Event KeyDown ', this.keydowntitle,  this.clicktitle)
  }
  buttonclickhandleEvent() {
    console.log('app.component.ts Event Button Clicked', this.clicktitle)
  }
  firstnameedithandlEvent() {
    console.log('app.component.ts Event First Name Edit ',this.firstname)
  }


}
