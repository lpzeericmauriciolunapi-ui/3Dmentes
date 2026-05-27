// ficha-sucre/ficha-sucre.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ficha-sucre',
  standalone: true,
  templateUrl: './ficha-sucre.html',
  styleUrls: ['./ficha-sucre.css']
})
export class FichaSucreComponent implements OnInit, OnDestroy {
  frontImagePath: string = 'M1.jpeg';
  backImagePath: string = 'M2.jpeg';
  private particleInterval: any;
  private particles: HTMLElement[] = [];

  ngOnInit() {
    this.startParticleEffect();
  }

  ngOnDestroy() {
    if (this.particleInterval) {
      clearInterval(this.particleInterval);
    }
    this.particles.forEach(p => p.remove());
  }

  startParticleEffect() {
    // Crear partículas sutiles cada 3 segundos
    this.particleInterval = setInterval(() => {
      this.createDustParticle();
    }, 3000);
  }

  createDustParticle() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const particle = document.createElement('div');
    particle.classList.add('dust-particle');
    
    // Posición aleatoria en el ancho de la pantalla
    const left = Math.random() * 100;
    // Duración aleatoria entre 4 y 8 segundos
    const duration = 4 + Math.random() * 4;
    // Tamaño variable entre 1px y 3px
    const size = 1 + Math.random() * 2;
    
    particle.style.left = `${left}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    particle.style.opacity = `${0.1 + Math.random() * 0.3}`;
    
    container.appendChild(particle);
    this.particles.push(particle);
    
    // Eliminar la partícula después de que termine la animación
    setTimeout(() => {
      particle.remove();
      const index = this.particles.indexOf(particle);
      if (index > -1) this.particles.splice(index, 1);
    }, duration * 1000);
  }

  scrollToStory(): void {
    const storyElement = document.querySelector('.story-section');
    if (storyElement) {
      storyElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  handleImageError(event: Event, tipo: string): void {
    console.warn(`Error cargando imagen ${tipo}`);
  }
}