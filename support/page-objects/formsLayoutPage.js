

export class FormLayoutPage {
    submitInlineformAndEmail(name,email){
        cy.contains('nb-card','Inline form').find('form').then(fillTheForm=>{
            cy.wrap(fillTheForm).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(fillTheForm).find('[placeholder="Email"]').type(email)
            cy.wrap(fillTheForm).find('[type="checkbox"]').check({force:true})
            cy.wrap(fillTheForm).submit()
        })

    }

    submitBasicformAndEmail(email,password){
        cy.contains('nb-card','Basic form').find('form').then(fillTheForm=>{
            cy.wrap(fillTheForm).find('[placeholder="Email"]').type(email)
            cy.wrap(fillTheForm).find('[placeholder="Password"]').type(password)
            cy.wrap(fillTheForm).find('[type="checkbox"]').check({force:true})
            cy.wrap(fillTheForm).submit()
        })

    }



}


export const onFomrLayoutPage = new FormLayoutPage()
