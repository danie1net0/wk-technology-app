import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BarsIconComponent } from './bars.component';
import { BellIconComponent } from './bell-icon.component';
import { XMarkIconComponent } from './x-mark-icon.component';

@NgModule({
  declarations: [
    BarsIconComponent,
    BellIconComponent,
    XMarkIconComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BarsIconComponent,
    BellIconComponent,
    XMarkIconComponent,
  ],
})
export class IconsModule { }
