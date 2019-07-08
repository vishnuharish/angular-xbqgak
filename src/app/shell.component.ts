import {Component, OnInit} from '@angular/core';

@Component({
  selector: "shell",
  template: `<app-root></app-root>
              <router-outlet></router-outlet>`
})

export class ShellComponent{
  constructor(){

  }
}