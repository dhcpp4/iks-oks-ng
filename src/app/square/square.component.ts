import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  @Input() position!: number;
  @Output() clicked = new EventEmitter<number>();
  isClicked: boolean = false;

  onClick() {
    this.isClicked = true;
    this.clicked.emit(this.position);
  }

}
