import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showDropdownMenu = false

  public toggleDropdownMenu(): void {
    this.showDropdownMenu = !this.showDropdownMenu
  }
}
