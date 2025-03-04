import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PesquisaComponent } from "./pesquisa/pesquisa.component";
import { TabelaComponent } from "./tabela/tabela.component";
import {MatButtonModule} from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PesquisaComponent, TabelaComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-mentoria';

  dadosFilhoPesquisa!: PeriodicElement

  recebeDadosPesquisa(param: PeriodicElement){
    this.dadosFilhoPesquisa = param
    console.log(this.dadosFilhoPesquisa, "Dados recebidos do filho - pesquisa")
  }
}
