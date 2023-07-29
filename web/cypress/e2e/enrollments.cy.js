
import data from '../fixtures/enrollments.json'

import enrollsPage from '../support/pages/EnrollsPage'

describe('matriculas', ()=> {

    it('deve por matricular um novo aluno', ()=> {
        const dataTest = data.create

        cy.task('resetStudent', dataTest.student)

        cy.adminLogin()

        enrollsPage.navbar.goToEnrolls()
        enrollsPage.goToForm()
        enrollsPage.selectItem('student', dataTest.student.name)
        enrollsPage.selectItem('plan', dataTest.plan)
        enrollsPage.fillCard(dataTest.student)
        enrollsPage.submit()

        enrollsPage.popup.haveText('Matrícula cadastrada com sucesso.')
    })

    it.only('não deve criar matricula duplicada', ()=> {
        const dataTest = data.duplicate

        cy.task('resetStudent', dataTest.student)
        cy.task('selectStudentId', dataTest.student.email)
            .then(result => {
   
                cy.request({
                    url: 'http://localhost:3333/sessions',
                    method: 'POST',
                    body: {
                        email: "admin@healthxp.com",
                        password: "xperience"
                    }
                }).then(response=> {
                    cy.log(response.body.token)

                    const payload = {
                        student_id: result.success.rows[0].id,
                        plan_id: dataTest.plan.id,
                        credit_card: "4242"
                    }

                    cy.request({
                        url: 'http://localhost:3333/enrollments',
                        method: 'POST',
                        body: payload,
                        headers: {
                            Authorization: 'Bearer ' + response.body.token
                        }
                    }).then(response => {
                        expect(response.status).to.eq(201)
                    })

                })



            })

        


    })
})