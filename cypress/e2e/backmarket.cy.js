let user = require('../fixtures/userData.json');
const firstName = user.firstName;
const lastName = user.lastName;
const email = user.email;
const pwd = user.password;


describe('Back Marcket', () => {
    //connexion réussie
    it.skip('Inscription réussie', () => {
      cy.visit('https://preprod.backmarket.fr/register')
      cy.get('#firstName').type(firstName)
      cy.get('#lastName').type(lastName)
      cy.get('#signup-email').type(email)
      cy.get('#signup-password').type(pwd)
      cy.get('[data-qa="signup-submit-button"]').click({force:true})
      })

      //Connexion échoue
      it.skip('Inscription réussie', () => {
      cy.visit('https://preprod.backmarket.fr/register')
      cy.get('#firstName').type(firstName)
      cy.get('#lastName').type(lastNamee)
      cy.get('#signup-email').type(email)
      cy.get('#signup-password').type(pwd)
      cy.get('[data-qa="signup-submit-button"]').click({force:true})
      })

      //Authentification
      it('Inscription réussie', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('#signin-email').type(email)
        cy.get('#signin-password').type(pwd)
        cy.get('[data-qa="signin-submit-button"]').click({force:true})
        })


  })