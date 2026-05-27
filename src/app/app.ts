import { Component } from '@angular/core';
import { FichaSucreComponent } from './ficha-sucre/ficha-sucre';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FichaSucreComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = '3Dmentes';
}

// 👇 EXPORTAR TAMBIÉN COMO 'App' para que main.ts lo encuentre
export { AppComponent as App };