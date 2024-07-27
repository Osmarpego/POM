export default class AccountLinks{
    static onlineBanking(){
        cy.contains('Online Banking').click()
    }

    static clickSummary(){
        cy.get('#account_summary_link').click()
    }

    static clickActivity(){
        cy.get('#account_activity_link').click()
    }

    static clickFunds(){
        cy.get('#transfer_funds_link').click()
    }

    static clickPayBills(){
        cy.get('#pay_bills_link').click()
    }

    static clickMoneyMap(){
        cy.get('#money_map_link').click()
    }

    static clickAcStatements(){
        cy.get('#online_statements_link').click()
    }
}