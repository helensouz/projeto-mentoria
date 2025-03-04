import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  nome: string;
  position: number;
  cargo: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Hydrogen', cargo: 'Dev front end'},
  {position: 2, nome: 'Helium', cargo: 'Dev back end'},
  {position: 3, nome: 'Lithium', cargo: 'Dev front end'},
  {position: 4, nome: 'Beryllium', cargo: 'Dev back end'},
  {position: 5, nome: 'Boron', cargo: 'DevOps'},
  {position: 6, nome: 'Carbon', cargo: 'Dev front end'},
  {position: 7, nome: 'Nitrogen', cargo: 'DevOps'},
  {position: 8, nome: 'Oxygen', cargo: 'Dev front end'},
  {position: 9, nome: 'Fluorine', cargo: 'DevOps'},
  {position: 10, nome: 'Neon', cargo: 'DevOps'},
];


@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss'
})


export class TabelaComponent {
  displayedColumns: string[] = ['position', 'nome', 'cargo'];
  dataSource = ELEMENT_DATA;
}
