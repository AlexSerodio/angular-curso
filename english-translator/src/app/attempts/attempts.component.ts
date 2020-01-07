import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input()
  public attemptsCount: number;

  public hearts: Array<Heart> = [
    new Heart(),
    new Heart(),
    new Heart()
  ];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.attemptsCount !== this.hearts.length) {
      const index = this.hearts.length - this.attemptsCount;
      this.hearts[index - 1].filled = false;
    }
  }

}
