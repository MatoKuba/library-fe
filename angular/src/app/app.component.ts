import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styles: []
})
export class AppComponent {
  decimalValue = 0;
  binaryArray = [false, false, false, false, false, false, false, false];

  updateBinary() {
    const binary = this.decimalValue.toString(2).padStart(8, '0');
    this.binaryArray = binary.split('').map(digit => digit === '1');
  }

  updateDecimal() {
    const binary = this.binaryArray.map(checked => checked ? '1' : '0').join('');
    this.decimalValue = parseInt(binary, 2);
  }
}
