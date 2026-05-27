import { Component } from '@angular/core';

@Component({
  selector: 'app-ficha-sucre',
  standalone: true,
  templateUrl: './ficha-sucre.html',
  styleUrls: ['./ficha-sucre.css']
})
export class FichaSucreComponent {
  // ✅ Las rutas correctas (sin src/ al inicio)
  frontImagePath: string = '/assets/M1.jpeg';
  backImagePath: string = '/assets/M2.jpeg';
}