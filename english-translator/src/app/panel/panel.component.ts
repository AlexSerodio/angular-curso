import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrases-mock';

import { RoundStatus } from '../shared/roundStatus.enum';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public instruction = 'Traduza a frase:';
  public phrases: Phrase[] = PHRASES;
  public answer = '';

  public round = 0;
  public roundPhrase: Phrase;

  public attempts = 3;

  public progress = 0;
  private readonly maxProgress = 100;

  private readonly progressIncrement: number;

  @Output()
  public finishGame: EventEmitter<RoundStatus> = new EventEmitter();

  constructor() {
    this.progressIncrement = this.maxProgress / this.phrases.length;

    this.updateRoundPhrase();
  }

  ngOnInit() {
  }

  public updateAnswer(event: Event): void {
    this.answer = (event.target as HTMLInputElement).value;
  }

  public verifyAnswer(): void {
    if (this.isRightAnswer()) {
      if (!this.isLastRound()) {
        this.goToNextRound();
      } else {
        this.finishGame.emit(RoundStatus.Victory);
      }
    } else {
      this.decreaseAttempts();

      if (!this.hasAttemptsRemaining()) {
        this.finishGame.emit(RoundStatus.Defeat);
      }
    }
  }

  private isLastRound(): boolean {
    return this.round === this.phrases.length - 1;
  }

  private decreaseAttempts(): void {
    this.attempts--;
  }

  private hasAttemptsRemaining(): boolean {
    return this.attempts >= 0;
  }

  private goToNextRound(): void {
    this.round++;
    this.updateRoundPhrase();
    this.updateProgress();
    this.clearAnswer();
  }

  private updateRoundPhrase(): void {
    this.roundPhrase = this.phrases[this.round];
  }

  private updateProgress(): void {
    if (!this.reachedMaxProgress()) {
      this.progress += this.progressIncrement;
    }
  }

  private clearAnswer(): void {
    this.answer = '';
  }

  private reachedMaxProgress(): boolean {
    return this.progress >= this.maxProgress;
  }

  private isRightAnswer(): boolean {
    return this.answer.toLowerCase() === this.roundPhrase.translatedSentence.toLowerCase();
  }

}
