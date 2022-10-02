import { FormControl, ValidationErrors } from '@angular/forms';

import { cpf } from 'cpf-cnpj-validator';

export class CustomValidators {
  public static phone(formControl: FormControl): ValidationErrors | null {
    const pattern = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/;

    if (!formControl.value || (formControl.value && pattern.test(formControl.value))) {
      return null;
    }

    return { phone: { message: 'Número de celular inválido' } };
  }

  public static cpf(formControl: FormControl): ValidationErrors | null {
    if (cpf.isValid(formControl.value)) {
      return null;
    }

    return { cpf: { message: 'CPF inválido' } };
  }

  public static zipCode(formControl: FormControl): ValidationErrors | null {
    if (!formControl.value || /^[0-9]{8}$/.test(formControl.value)) {
      return null;
    }

    return { cep: { message: 'CEP inválido' } };
  }

  public static getErrorMessage(validatorName: string, validationErrors?: ValidationErrors): any {
    if (validationErrors['message']) {
      return validationErrors['message'];
    }

    const messages = {
      required: 'Este campo é obrigatório',
      email: 'E-mail inválido',
      minlength: `Este campo deve ter no mínimo ${validationErrors['requiredLength']} caracteres`,
      maxlength: `Este campo deve ter no máximo ${validationErrors['requiredLength']} caracteres`,
      min: `Este valor deve ser maior que ${validationErrors['min']}`,
      max: `Este valor deve ser menor que ${validationErrors['max']}`,
    };

    return messages[validatorName];
  }
}
