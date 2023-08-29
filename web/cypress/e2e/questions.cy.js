import data from '../fixtures/questions.json'

describe('receber perguntas', ()=> {

    // Entregar o desafio pelo Canal do Discord no dia 31 de agosto até as 16h
    // Além dos testes colocar a Url da API na porta 3333 no arquivo .env

    it('deve poder receber uma notificação com uma pergunta do aluno', ()=> {

        const dataTest = data.create

        cy.resetStudent(dataTest.student)
        cy.createEnroll(dataTest)
        cy.createQuestion(dataTest.question)

        // Desafio somente para quem participou da live
        // Automatizar a validaçao da notificação do sininho na página do administrador da Academia

    })

    it('deve poder responder uma pergunta de alunos', ()=> {

        // Construir uma nova massa de testes que possua pergunta e resposta
        // Em seguida, automatizar o fluxo de responsta da pergunta que foi recebida

    })

})