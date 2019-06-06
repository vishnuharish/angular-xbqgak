import {Component, OnInit} from '@angular/core';

@Component({
  selector: "test",
  template: `<h1>Test Component</h1>
    <p></p>`,
  styles: ['']
})

export class TestComponent implements OnInit{
  data: string = "Test Data";
  constructor(){}
  ngOnInit(){
  }
}