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
  decArray = [0 ,0 ,0 ,0 ,0 ,0 ,0, 0];
  toBin(cislo : string) : void {
    this.decArray = [0 ,0 ,0 ,0 ,0 ,0 ,0, 0];
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
  }
  toDecimal(cislo : number) : void {
    switch (cislo){
      case 8:
        if(this.decArray[0] == 0){
          this.decArray[0] = 1;
        }
        else{
          this.decArray[0] = 0;
          this.shown1 = false;
        }
        break
      case 7:
        if(this.decArray[1] == 0){
          this.decArray[1] = 1;
        }
        else{
          this.decArray[1] = 0;
          this.shown2 = false;
        }
        break
      case 6:
        if(this.decArray[2] == 0){
          this.decArray[2] = 1;
        }
        else{
          this.decArray[2] = 0;
          this.shown3 = false;
        }
        break
      case 5:
        if(this.decArray[3] == 0){
          this.decArray[3] = 1;
        }
        else{
          this.decArray[3] = 0;
          this.shown4 = false;
        }
        break
      case 4:
        if(this.decArray[4] == 0){
          this.decArray[4] = 1;
        }
        else{
          this.decArray[4] = 0;
          this.shown5 = false;
        }
        break
      case 3:
        if(this.decArray[5] == 0){
          this.decArray[5] = 1;
        }
        else{
          this.decArray[5] = 0;
          this.shown6 = false;
        }
        break
      case 2:
        if(this.decArray[6] == 0){
          this.decArray[6] = 1;
        }
        else{
          this.decArray[6] = 0;
          this.shown7 = false;
        }
        break
      case 1:
        if(this.decArray[7] == 0){
          this.decArray[7] = 1;
        }
        else{
          this.decArray[7] = 0;
          this.shown8 = false;
        }
        break
    }
    let prevod = this.decArray.join("");
    prevod.toString();
    this.something = parseInt(prevod,2);
  }

}
