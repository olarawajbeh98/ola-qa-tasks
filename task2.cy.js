/// <reference types="cypress" />
describe('senario',()=>{
it('add to cart',()=>{
cy.visit('https://magento.softwaretestingboard.com')
cy.get('.product-item-info').first().click()
cy.get('.swatch-attribute-options [option-label="XS"]').click()
cy.get('.swatch-attribute-options [option-label="Blue"]').click()
cy.get('.actions button').last().click()
cy.wait(5000)
cy.get('.showcart').click()
cy.get('.block-minicart #top-cart-btn-checkout').click()
cy.wait(10000)
cy.get('[type="email"]').eq(1)
cy.get('[name="firstname"]')
cy.get('[name="lastname"]')
cy.get('[name="company"]')
cy.get('[name="street[0]"]')
cy.get('[name="street[1]"]')
cy.get('[name="street[2]"]')
cy.get('[name="city"]')
cy.get('[name="region_id"]')
cy.get('[name="postcode"]')
cy.get('[name="country_id"]')
cy.get('[name="telephone"]')



})

})