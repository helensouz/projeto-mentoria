import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import { map } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {

  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);



  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    {initialValue: 'auto'},
  );

}
