import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'cpf',
  standalone: true
})
export class CpfPipe implements PipeTransform {

  public transform(value: string): string {
    if (!value || value.length < 11) {
      return value;
    }

    return `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(-2)}`;
  }

}
