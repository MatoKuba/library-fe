import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Domaca uloha2</h1>
      <app-my-tabs></app-my-tabs>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
  `],
})
export class AppComponent {}
