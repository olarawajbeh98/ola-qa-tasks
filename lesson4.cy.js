/// <reference types="cypress" />

it("lesson3",()=>{
    // cy.visit("https://magento.softwaretestingboard.com/sale.html")
    // cy.contains("strong","Luma Gear Steals").click()
    cy.visit("https://magento.softwaretestingboard.com/elisa-evercool-trade-tee.html")
    cy.get(".product.data.items ").contains("a","More Information ").click()

    })