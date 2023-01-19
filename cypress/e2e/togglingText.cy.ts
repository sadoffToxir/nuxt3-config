describe('template spec', () => {
  it('passes', () => {
    cy.visit('/arbitrage')

    cy.wait(1000)
    cy.get("[data-test=togglingText]").should('be.not.visible')
    cy.get("[data-test=toggle-btn]").click()
    cy.get("[data-test=togglingText]").should('be.visible')
  })
})