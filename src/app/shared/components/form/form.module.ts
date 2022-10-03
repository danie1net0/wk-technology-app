import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { ErrorsComponent } from './errors/errors.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    ErrorsComponent,
    InputComponent,
    LabelComponent,
    SelectComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskModule],
  exports: [
    ErrorsComponent,
    InputComponent,
    LabelComponent,
    SelectComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FormModule {}
