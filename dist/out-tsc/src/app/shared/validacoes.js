export class Validacoes {
    static ValidaEmail(controle) {
        const email = controle.value;
        if (email && email.indexOf('.com') > -1) {
            return null;
        }
        return { emailInvalido: { descricao: 'faltou .com' } };
    }
    static ValidaSenha(controle) {
        const senha = controle.value;
        const confirmSenha = "controle2.value";
        if (senha !== confirmSenha) {
            return null;
        }
        return { senhaInvalido: { descricao: 'Valor diferente.' } };
    }
}
//# sourceMappingURL=validacoes.js.map