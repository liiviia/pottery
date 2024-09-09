import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule per i collegamenti

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],  // Importa RouterModule per gestire i link
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
