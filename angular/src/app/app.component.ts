import { Component } from '@angular/core';
export class AppComponent {
  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }
}
