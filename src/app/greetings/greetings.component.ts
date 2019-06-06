import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'greetings',
  template: `<h1>Welcome</h1>
              <p>to test dynamic title updation</p>`,
  styles: ['']
})

export class GreetingsComponent implements OnInit {
  public constructor(){

  }
  ngOnInit(){

  }
}