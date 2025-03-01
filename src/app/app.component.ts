import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PesquisaComponent } from "./pesquisa/pesquisa.component";
import { TabelaComponent } from "./tabela/tabela.component";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PesquisaComponent, TabelaComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-mentoria';
}
