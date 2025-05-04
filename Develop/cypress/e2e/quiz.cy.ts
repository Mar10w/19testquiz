describe('Tech Quiz End-to-End Test', () => {
    it('allows the user to complete the quiz', () => {
      cy.visit('/');
      cy.contains('Start Quiz').click();
  
      cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
      cy.wait('@getQuestions');
  
      cy.get('button').contains('1').click();
      cy.contains('Quiz Completed').should('be.visible');
      cy.contains('Your score:').should('be.visible');
    });
  });