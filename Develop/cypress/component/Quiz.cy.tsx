import Quiz from '../../Develop/client/src/components/Quiz';
import { mount } from 'cypress/react18';

describe('Quiz Component', () => {
  it('renders the start button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz and displays a question', () => {
    mount(<Quiz />);
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('h2').should('contain', 'What is the output of print(2 ** 3)?');
  });
});