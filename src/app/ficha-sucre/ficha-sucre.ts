// ficha-sucre/ficha-sucre.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ficha-sucre',
  standalone: true,
  templateUrl: './ficha-sucre.html',
  styleUrls: ['./ficha-sucre.css']
})
export class FichaSucreComponent {
  // Rutas de las imágenes (funciona con src="M1.jpeg")
  frontImagePath: string = 'M1.jpeg';
  backImagePath: string = 'M2.jpeg';

  // Scroll suave a la sección de historia
  scrollToStory(): void {
    const storyElement = document.querySelector('.story-lego');
    if (storyElement) {
      storyElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Manejador de error de imágenes (opcional)
  handleImageError(event: Event, tipo: string): void {
    console.warn(`No se pudo cargar la imagen ${tipo}: ${tipo === 'front' ? this.frontImagePath : this.backImagePath}`);

  }
}