import BasePage from "../BasePage"

export default class LoginPage extends BasePage{
    static login(username, password){
        cy.login(username, password)
    }


    static clickforgotPasswordLink(){
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage(){
        //cy.get('.alert alert-error').should('be.visible')
        cy.isVisible('.alert')
    }

    static displaySignInButton(){
        cy.isVisible('#signin_button')
    }
}