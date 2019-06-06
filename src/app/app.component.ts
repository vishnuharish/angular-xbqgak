import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, ActivationEnd} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
constructor(private router: Router,
            private titleService: Title ){}
ngOnInit(){
  this.router.events.subscribe(
    (event) => {
      if(event instanceof ActivationEnd){
        this.titleService.setTitle(event.snapshot.data.title)
      }
    }
  )
}

}
