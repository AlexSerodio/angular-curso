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

  public currentValue = '';
  public savedValue = '';

  private isMouseOver = false;

  constructor() { }

  ngOnInit() {
  }

  public getValue() {
    return 1;
  }

  public getBooleanValue() {
    return true;
  }

  public onClickButton() {
    alert('Yeeey!');
  }

  public onKeyUp(event: KeyboardEvent) {
    this.currentValue = (event.target as HTMLInputElement).value;
  }

  public saveValue(value: string) {
    this.savedValue = value;
  }

  public onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
