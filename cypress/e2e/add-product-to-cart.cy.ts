describe('template spec', () => {
  it('should be able to navigation to the product page and add it to the cart', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href^="/product/"]').first().click()

    cy.url().should('include', '/product/')
    cy.location('pathname').should('contain', '/product/')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart 1').should('exist')
  })

  it('should not count duplicated products on cart', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href^="/product/"]').first().click()

    cy.url().should('include', '/product/')
    cy.location('pathname').should('contain', '/product/')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart 1').should('exist')
  })

  it.only('should be able to search for a product and add to the cart', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[type="text"]').type('moletom').parent('form').submit()

    cy.get('a[href^="/product/"]').first().click()
    cy.location('pathname').should('contain', '/product/')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart 1').should('exist')
  })
})
