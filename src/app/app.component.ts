import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "iks-oks-ng";

  player: 'X' | 'O' = 'X';

  situation: Array<'X' | 'O' | 0> = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];

  message : string = "";

  changeSituation(position: number) {
    this.situation[position] = this.player;
    this.player = (this.player == 'X') ? 'O' : 'X';
    if (this.isGameOver()) {
      console.log(`Game over! Player ${this.player} lost.`);
    }
  }

  isGameOver() : boolean {
    let victoryCombinations: number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    return victoryCombinations.some(
      el => {
        let temp = this.indexByArray(this.situation, el);
        return temp.every(e => e == 'X') || temp.every(e => e == 'O')
      })
  }

  private indexByArray(arr: any[], ind: number[]) : any[] {
    return ind.map(e => arr[e]);
  }
}
