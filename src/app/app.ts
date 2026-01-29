import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyForm } from "./pages/my-form/my-form";

@Component({
  selector: 'app-root',
  imports: [MyForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
