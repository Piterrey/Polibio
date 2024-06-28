import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-number-buttons',
  templateUrl: './number-buttons.page.html',
  styleUrls: ['./number-buttons.page.scss'],
})
export class NumberButtonsPage {
  constructor() {}

  numbers: string = '';
  translation: string = '';
  matrix = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'K'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z'],
  ];

  onButtonClick(number: number) {
    this.numbers += number.toString();

    if (this.numbers.replace(/\s/g, '').length % 2 == 0) {
      this.numbers += ' ';
    }

    let couples:string[] = this.numbers.split(" ");

    this.translation = "";

    couples.forEach(couple => {

        let line:number = parseInt(couple.charAt(0)) - 1;
        let column:number = parseInt(couple.charAt(1)) - 1;

        if(couple.length == 2){
            this.translation += this.matrix[line][column];
        }
    })
  }

  clear() {
    this.numbers = '';
    this.translation = '';
  }
}
