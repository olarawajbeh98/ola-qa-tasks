/// <reference types="cypress" />

it("lesson1",()=>{
//cy.visit("https://magento.softwaretestingboard.com");
cy.visit("/")
// cy.get(".footer.content .widget.block.block-static-block ul li:nth-child(1) a").click()
cy.get(".navigation ul li:nth-child(6) a").click()

})
it("task",()=>{
    cy.visit("/checkout/#shipping");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#search').clear('s');
    cy.get('#search').type('shirt{enter}');
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-167').click();
    cy.get('.swatch-attribute.color > .swatch-attribute-options').click();
    cy.get('#option-label-color-93-item-57').click();
    cy.get('#product-addtocart-button > span').click();
    cy.wait(3000);
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click();
    cy.wait(5000);
    /* ==== End Cypress Studio ==== */


   //  start writing your code from here


})

