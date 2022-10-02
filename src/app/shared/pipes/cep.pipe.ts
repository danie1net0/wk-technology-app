import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'cep',
  standalone: true
})
export class CepPipe implements PipeTransform {

  public transform(value: string): string {
    if (!value || value.length < 8) {
      return value;
    }

    return `${value.substr(0, 5)}-${value.substr(5, 8)}`;
  }

}
