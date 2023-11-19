/// <reference types="cypress" />

it("lesson3",()=>{
    //cy.visit("https://magento.softwaretestingboard.com");
    cy.visit("https://magento.softwaretestingboard.com/radiant-tee.html")
//    cy.get(".home-t-shirts .action")
// cy.viewport(1000,1000)
   cy.get(".towishlist")
   cy.get(".tocart")
   cy.get(".add")
//    cy.get(".breadcrumbs .items .product")
cy.get("[option-label=Purple]")
    
    })