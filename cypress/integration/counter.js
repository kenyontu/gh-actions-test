describe('Counter', () => {
  it('can increment the counter', () => {
    cy.visit('http://localhost:3000/gh-actions-test')
    cy.get('[data-testid="counter"]').should('contain', '0')

    cy.contains('Increment').click()
    cy.get('[data-testid="counter"]').should('contain', '1')

    cy.contains('Increment').click()
    cy.get('[data-testid="counter"]').should('contain', '2')

    cy.contains('Reset').click()
    cy.get('[data-testid="counter"]').should('contain', '0')

    cy.contains('Increment').click()
    cy.get('[data-testid="counter"]').should('contain', '1')
  })
})

describe('Routing', () => {
  it('can change pages', () => {
    cy.visit('http://localhost:3000/gh-actions-test')
    cy.contains('About').click()
    cy.contains('Home').click()
    cy.contains('About').should('exist')
  })
})
