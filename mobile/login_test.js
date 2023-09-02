Feature('login');

Scenario('deve logar com sucesso',  ({ I, loginScreen }) => {
    loginScreen.with('QHARBV')
    I.see('Minha conta')
});

Scenario('não deve logar com matrícula inexistente',  ({ I, loginScreen }) => {
    loginScreen.with('ABC123')

    I.see(
        'Acesso não autorizado! Entre em contato com a central de atendimento.',
        '#android:id/message'
    )
});

Scenario('não deve logar com o plano health',  ({ I, loginScreen }) => {
    loginScreen.with('MMDBKN')

    I.see(
        'Seu plano não possui permissão para uso do App! Entre em contato com a central de atendimento.',
        '#android:id/message'
    )
});