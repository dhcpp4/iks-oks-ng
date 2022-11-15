import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  @Input() position!: number;
  @Input() whoClicked !: string;
  @Output() clicked = new EventEmitter<number>();
  currentClasses = {};

  onClick() {
    this.currentClasses = {[this.whoClicked] : true};
    this.clicked.emit(this.position);
  }

}
