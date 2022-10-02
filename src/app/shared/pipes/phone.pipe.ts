import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  public transform(value: string): string {
    if (!value || value.length < 10 || value.length > 11) {
      return value;
    }

    if (value.length === 10) {
      return `(${value.substr(0, 2)}) ${value.substr(2, 4)}-${value.substr(6, 4)}`;
    }

    return `(${value.substr(0, 2)}) ${value.substr(2, 5)}-${value.substr(7, 4)}`;
  }

}
