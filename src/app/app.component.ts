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

    return victoryCombinations.find(el =>
      this.situation[el[0]] == 'X' && this.situation[el[1]] == 'X' && this.situation[el[2]] == 'X' ||
      this.situation[el[0]] == 'O' && this.situation[el[1]] == 'O' && this.situation[el[2]] == 'O'
    ) != undefined;

    // let check = (symbol: string) => {
    //   return this.situation[0] == symbol && this.situation[1] == symbol && this.situation[2] == symbol
    // }

    // [0, 1, 2].reduce((previous: number, current: number) =>
    //   this.situation[previous] == 'X' && this.situation[current] == 'X')


    // let xInd: number[] = [], yInd: number[] = [];
    // this.situation.forEach((el, ind) => {
    //   if (el == 'X') xInd.push(ind);
    //   else if (el == 'O') yInd.push(ind);
    // })
    // console.log(xInd);
    // return victoryCombinations.every((combination) =>
    //   xInd.indexOf(combination) > -1 || yInd.indexOf(combination) > -1);
  }


}
