/// <reference types="cypress" />

describe('senario',()=>{

    it('sign in page',()=>{
        
      cy.visit('https://demo.productionready.io/#/login')
      cy.get(".ng-scope:eq(2)").contains("Sign in");
      cy.get('.col-md-6').find('h1')  //singn in h1
      cy.get('.text-xs-center a').last()  // need an account
      cy.get('[type="email"]') //email input
      cy.get('[placeholder="Password"]') //password input
      cy.get('button')
       

    });

    it('home page',()=>{
        cy.visit('https://demo.productionready.io/#/')

cy.get('.navbar.navbar-light .container a').contains('conduit')
cy.get('.navbar.navbar-light .container ').find('ul li').first()
cy.get('.navbar.navbar-light .container ').find('ul li').contains('Sign up')
cy.get('.banner .logo-font')
cy.get('.banner p')
cy.contains('a','Global Feed')
cy.get('.sidebar')
cy.get('.sidebar .tag-list').wait(7000).find('a').eq(3)
cy.get('.sidebar .tag-list').find('a').last()
cy.get('ng-transclude span').first()
cy.wait(5000)
cy.get('.article-preview a span').first()

    })

it('artical',()=>{
cy.visit('https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863')
cy.contains('If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!')
cy.get('.author.ng-binding').first()
cy.get('.info span').eq(0)
cy.get('.ng-scope follow-btn button').first()
cy.get('.ng-scope favorite-btn').first()
cy.get('.ng-binding p')
cy.get('.col-xs-12 ul li').first()
cy.get('.col-xs-12 ul li').last()

})


})