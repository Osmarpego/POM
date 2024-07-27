import { login_password, login_username, url } from "../../config"
import Navbar from "../page-objects/components/Navbar"
import LoginPage from "../page-objects/pages/LoginPage"

describe('Login Failed Test', () =>{
    before(function(){
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should try to login with invalid credentials', () =>{
        LoginPage.login('123', '123')
    })

    it('should display error message', () =>{
        LoginPage.displayErrorMessage()
    })
})

describe('Login Success Test', () =>{
    before(function(){
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should login into application', () =>{
        LoginPage.login(login_username, login_password)
    })

    it('should logout from application', () =>{
        Navbar.logout()
        LoginPage.displaySignInButton()
    })

})