import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public url = 'http://loiane.com';
  public urlImage = 'http://lorempixel.com/400/200/nature/';
  public booleanValue = true;

  constructor() { }

  ngOnInit() {
  }

  public getValue() {
    return 1;
  }

  public getBooleanValue() {
    return true;
  }

}
