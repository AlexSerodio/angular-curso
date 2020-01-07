import { Component } from '@angular/core';
import { RoundStatus } from './shared/roundStatus.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public playing = true;
  public finalMessage: string;

  public finishGame(status: RoundStatus): void {

    if (status === RoundStatus.Victory) {
      this.finalMessage = 'Fim do jogo. Parabéns, você venceu!';
    } else {
      this.finalMessage = 'Fim do jogo. Você perdeu!';
    }

    this.playing = false;
  }

  public restartGame(): void {
    this.playing = true;
  }

}
