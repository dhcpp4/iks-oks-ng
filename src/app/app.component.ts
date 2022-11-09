import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "iks-oks-ng";

  player: 1 | 2 = 1;

  situation: Array<0 | 1> = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];

  message : string = "";

  currentClasses = {
    clicked: false
  };

  onClick(e: Event) : void {
    let square = e.target as HTMLElement;
    this.currentClasses.clicked = true; //square.style.pointerEvents = "none";
    this.situation[Number(square.id)] = 1;
    this.isGameOver();
  }

  isGameOver() : void {
    if (this.situation[0] && this.situation[1] && this.situation[2] ||
        this.situation[3] && this.situation[4] && this.situation[5] ||
        this.situation[6] && this.situation[7] && this.situation[8] ||
        this.situation[0] && this.situation[3] && this.situation[6] ||
        this.situation[1] && this.situation[4] && this.situation[7] ||
        this.situation[2] && this.situation[5] && this.situation[8] ||
        this.situation[0] && this.situation[4] && this.situation[8] ||
        this.situation[2] && this.situation[4] && this.situation[6]) {
      this.message = "Game Over";
    }
  }


}
