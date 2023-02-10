import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desiatkova = 0;
  input = 0;
  binArray = [0 ,0 ,0 ,0 ,0 ,0 ,0, 0]
  toBin(cislo: string) : void {
    let convert = parseInt(cislo);
    let binary = convert.toString(2);
    console.log(binary.length)
    let temp = "";
    for (let i = binary.length; i <= 7; i++) {
      temp = temp.concat("0");
    }
    let vysledok = temp.concat(binary);
    if(vysledok.charAt(7) == "1"){
      const checkbox = document.getElementById(
        '1',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = true;
      }
    }
    else if(vysledok.charAt(7) == "0"){
      const checkbox = document.getElementById(
        '1',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;

      }
    }
    if(vysledok.charAt(6) == "1"){
      const checkbox = document.getElementById(
        '2',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = true;
      }
    }
    else if(vysledok.charAt(6) == "0"){
      const checkbox = document.getElementById(
        '2',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;
      }
    }
    if(vysledok.charAt(5) == "1"){
      const checkbox = document.getElementById(
        '3',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = true;
      }
    }
    else if(vysledok.charAt(5) == "0"){
      const checkbox = document.getElementById(
        '3',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;
      }
    }
    if(vysledok.charAt(4) == "1"){
      const checkbox = document.getElementById(
        '4',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = true;
      }
    }
    else if(vysledok.charAt(4) == "0"){
      const checkbox = document.getElementById(
        '4',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;
      }
    }
    if(vysledok.charAt(3) == "1"){
      const checkbox = document.getElementById(
        '5',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = true;
      }
    }
    else if(vysledok.charAt(3) == "0"){
      const checkbox = document.getElementById(
        '5',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;
      }
    }
    if(vysledok.charAt(2) == "1"){
      const checkbox = document.getElementById(
        '6',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = true;
      }
    }
    else if(vysledok.charAt(2) == "0"){
      const checkbox = document.getElementById(
        '6',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;
      }
    }
    if(vysledok.charAt(1) == "1"){
      const checkbox = document.getElementById(
        '7',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = true;
      }
    }
    else if(vysledok.charAt(1) == "0"){
      const checkbox = document.getElementById(
        '7',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;
      }
    }

    if(vysledok.charAt(0) == "1"){
      const checkbox = document.getElementById(
        '8',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = true;
      }
    }
    else if(vysledok.charAt(0) == "0"){
      const checkbox = document.getElementById(
        '8',
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;
      }
    }


  }
  toDecimal(cislo: number) : void {
    let vysledok: number;
    if(cislo == 1){
      if(this.binArray[7] == 1) {
        this.binArray[7] = 0;
      }
      else{
        this.binArray[7] = 1;
      }

    }
    if(cislo == 2){
      if(this.binArray[6] == 1) {
        this.binArray[6] = 0;
      }
      else{
        this.binArray[6] = 1;
      }

    }
    if(cislo == 3){
      if(this.binArray[5] == 1) {
        this.binArray[5] = 0;
      }
      else{
        this.binArray[5] = 1;
      }

    }
    if(cislo == 4){
      if(this.binArray[4] == 1) {
        this.binArray[4] = 0;
      }
      else{
        this.binArray[4] = 1;
      }

    }
    if(cislo == 5){
      if(this.binArray[3] == 1) {
        this.binArray[3] = 0;
      }
      else{
        this.binArray[3] = 1;
      }

    }
    if(cislo == 6){
      if(this.binArray[2] == 1) {
        this.binArray[2] = 0;
      }
      else{
        this.binArray[2] = 1;
      }

    }
    if(cislo == 7){
      if(this.binArray[1] == 1) {
        this.binArray[1] = 0;
      }
      else{
        this.binArray[1] = 1;
      }

    }
    if(cislo == 8){
      if(this.binArray[0] == 1) {
        this.binArray[0] = 0;
      }
      else{
        this.binArray[0] = 1;
      }

    }
    this.binArray.toString();
    let joined = this.binArray.join("");
    vysledok = parseInt(joined,2)
    console.log(vysledok);
    this.input = vysledok;
  }
}
