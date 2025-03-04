import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, NgModel } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import { map } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatTableModule
  ],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {
  positionInput: string = '';
  nameInput: string = '';
  weightInput: string = '';
  symbolInput: string = '';

  @Output() objetoEnviadosParaTabela = new EventEmitter<PeriodicElement>()


  enviaDadosTabela() {
    this.objetoEnviadosParaTabela.emit({ name: this.nameInput, position: +this.positionInput, symbol: this.symbolInput, weight: +this.weightInput})
    console.log(this.positionInput, this.nameInput, this.weightInput, this.symbolInput)
  }


  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    {initialValue: 'auto'},
  );



}
