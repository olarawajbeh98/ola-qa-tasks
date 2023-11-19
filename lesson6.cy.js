/// <reference types="cypress" />
it('filter',()=>{
cy.visit("/")
// cy.get('li a').filter('[role="menuitem"]')
cy.get('li a').not('[role="menuitem"]')

})