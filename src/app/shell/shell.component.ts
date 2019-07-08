import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `<app-root></app-root>
              <router-outlet></router-outlet>`,
  styleUrls: ['']
})
export class ShellComponent implements OnInit {
  title = "shell";
  public constructor(){}
  
  ngOnInit(){

  }
}