import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  something = 0;
  shown1 = false;
  shown2 = false;
  shown3 = false;
  shown4 = false;
  shown5 = false;
  shown6 = false;
  shown7 = false;
  shown8 = false;
  toBin(cislo : string) : void {
    let binArray = [0, 0, 0, 0, 0, 0, 0, 0]
    let changed = Number(cislo);
    let number = changed.toString(2);
    let i = number.length;
    let index = 7;
    while (i > 0) {
      if (number.charAt(i - 1) == "1") {
        binArray[index] = 1;
      }
      index--;
      i--;
    }
    this.shown8 = binArray[7] == 1;
    this.shown7 = binArray[6] == 1;
    this.shown6 = binArray[5] == 1;
    this.shown5 = binArray[4] == 1;
    this.shown4 = binArray[3] == 1;
    this.shown3 = binArray[2] == 1;
    this.shown2 = binArray[1] == 1;
    this.shown1 = binArray[0] == 1;
    let decimal = binArray.toString();
    this.something = parseInt(decimal,2);
  }

}
