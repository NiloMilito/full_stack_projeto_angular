import {AbstractControl} from '@angular/forms';

export class Validacoes {
  static ValidaEmail(controle: AbstractControl) {
    const email = controle.value;

    if (email && email.indexOf('.com') > -1 ) {
      return null;
    }

    return { emailInvalido: {descricao: 'faltou .com'} };
  }

  static ValidaSenha(controle: AbstractControl) {
    const senha = controle.value;
    const confirmSenha = "controle2.value";

    if (senha !== confirmSenha ) {
      return null;
    }

    return { senhaInvalido: {descricao: 'Valor diferente.'} };
  }
}
