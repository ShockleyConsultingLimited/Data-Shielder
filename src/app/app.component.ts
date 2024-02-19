import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'ds-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-shielder';

  loadWindow() {
    console.log("Loading window");
    console.log(window, window.electronAPI);
    // @ts-ignore
    if (window.electronAPI) {
      window.electronAPI.createWindowAndFillForm();
    }
  }
}
