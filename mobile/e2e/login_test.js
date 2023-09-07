const students = require('../fixtures/students.json')


Feature('login');

Scenario('deve logar com sucesso', async ({ I, login, account }) => {

    const dataTest = students.success_login;

    I.resetStudent(dataTest.student)
    const enrollment_code =  await I.createEnroll(dataTest)

    login.with(enrollment_code)
    account.userLoggedIn()
});

Scenario('não deve logar com matrícula inexistente', ({ I, login }) => {
    login.with('ABC123')

    I.popHaveText(
        'Acesso não autorizado! Entre em contato com a central de atendimento.'
    )
});

Scenario('não deve logar com o plano health', async ({ I, login }) => {

    const dataTest = students.not_login;

    I.resetStudent(dataTest.student)
    const enrollment_code =  await I.createEnroll(dataTest)

    login.with(enrollment_code)

    I.popHaveText(
        'Seu plano não possui permissão para uso do App! Entre em contato com a central de atendimento.'
    )
});