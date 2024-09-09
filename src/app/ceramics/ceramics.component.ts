import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ceramics',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ceramics.component.html',
  styleUrl: './ceramics.component.css'
})
export class CeramicsComponent {
  title = 'Pagina delle cermiche'; 
}
