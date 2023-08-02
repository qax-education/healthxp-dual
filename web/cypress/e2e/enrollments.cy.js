
import data from '../fixtures/enrollments.json'

import enrollsPage from '../support/pages/EnrollsPage'

describe('matriculas', ()=> {

    it('deve por matricular um novo aluno', ()=> {
        const dataTest = data.create

        //cy.task('resetStudent', dataTest.student)
        cy.resetStudent(dataTest.student)

        cy.adminLogin()

        enrollsPage.navbar.goToEnrolls()
        enrollsPage.goToForm()
        enrollsPage.selectItem('student', dataTest.student.name)
        enrollsPage.selectItem('plan', dataTest.plan.name)
        enrollsPage.fillCard(dataTest.student)
        enrollsPage.submit()

        enrollsPage.popup.haveText('Matrícula cadastrada com sucesso.')
    })

    it('não deve criar matricula duplicada', ()=> {
        const dataTest = data.duplicate

        // cy.task('resetStudent', dataTest.student)
        cy.resetStudent(dataTest.student)
        cy.createEnroll(dataTest)

        cy.adminLogin()

        enrollsPage.navbar.goToEnrolls()
        enrollsPage.goToForm()
        enrollsPage.selectItem('student', dataTest.student.name)
        enrollsPage.selectItem('plan', dataTest.plan.name)
        enrollsPage.fillCard(dataTest.student)
        enrollsPage.submit()

        enrollsPage.popup.haveText('O aluno já possui matrícula cadastrada!')
    })
})