import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'startpage';


  border_radius: number = 0; 
  border_size: number = 0; 
  border_color: string = 'FFAAFF';
  type_of_background: string = "solid_color"; //solid_color, cover_image, repeat_image
  url_image: string = ""

  isModalOpen: boolean = false;


  ngOnInit(): void {
    this.setStyles()

  }

  openModal() {
    this.isModalOpen = true;
  }

  // Función para cerrar la modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Función para guardar los cambios en localStorage
  saveChanges() {
    const settings = {
      border_radius: this.border_radius,
      border_size: this.border_size,
      border_color: this.border_color,
      type_of_background: this.type_of_background,
      url_image: this.url_image
    };

    localStorage.setItem('settings', JSON.stringify(settings));
    this.closeModal(); // Cerrar la modal después de guardar
  }

  setStyles() {
    const root = document.documentElement;

    // Establecer las variables CSS personalizadas
    root.style.setProperty('--border-radius', `${this.border_radius}px`);
    root.style.setProperty('--border-size', `${this.border_size}px`);
    root.style.setProperty('--border-color', `#${this.border_color}`);
    root.style.setProperty('--background-color', this.type_of_background === 'solid_color' ? '#000000' : 'transparent');
    root.style.setProperty('--background-image', this.type_of_background === 'cover_image' ? this.url_image : '');
  }
}
