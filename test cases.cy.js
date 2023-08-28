
/// <reference types="Cypress" />



describe('Element Test', () => {

  it('our First test', () => {
    cy.visit('/')
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()
    cy.get('#inputEmail1')
    cy.get('.input-full-width')
    cy.get('[placeholder]')
    cy.get('[class="input-full-width size-medium shape-rectangle"]')
    cy.get('[placeholder][fullwidth]')
    cy.get('[data-cy="imputEmail1"]')

  })

  it('second test', () => {
    cy.visit('/')
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()
    cy.get('[data-cy="signInButton"]')
    cy.get('[status="warning"]')
    cy.get('#inputEmail3').parents('form').find('button').parents('form').find('nb-checkbox').click()
    cy.contains('nb-card', 'Using the Grid').find('[type="email"]')

  })

  it('then and wrap', () => {
    cy.visit('/')
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()
    cy.contains('nb-card', 'Using the Grid').then(firstForm => {
      const emailInputText = firstForm.find('[for="inputEmail1"]').text()
      const passwordInputText = firstForm.find('[for="inputPassword2"]').text()
      expect(emailInputText).to.equal('Email')
      expect(passwordInputText).to.equal('Password')

      cy.contains('nb-card', 'Basic form').then(secondForm => {
        cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')

      })


    })



  })

  it('Invoke func', () => {
    cy.visit('/')
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()

    cy.contains('nb-card', 'Basic form')
      .find('nb-checkbox')
      .click()
      .find('.custom-checkbox')
      .invoke('attr', 'class')
      .then(classValue => {
        expect(classValue).to.contain('checked')
      })



  })

  it('assert date picker', () => {
    cy.visit('/')
    cy.contains("Forms").click()
    cy.contains("Datepicker").click()
    cy.contains('nb-card', 'Common Datepicker').find('input').then(Input => {
      cy.wrap(Input).click()
      cy.get('nb-calendar-day-picker').contains('18').click()
      cy.wrap(Input).invoke('prop', 'value').should('contain', 'Aug 18, 2023')

    })


  })

  it('form test', () => {
    cy.visit('/')
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()
    cy.get('[data-cy="imputEmail1"]').type('emadbay@gmail.com')
    cy.get('#inputPassword2').type('emad@40304030')
    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(RadioButton => {
      cy.wrap(RadioButton)
        .first()
        .check({ force: true })
        .should('be.checked')

      cy.wrap(RadioButton)
        .eq(1)
        .check({ force: true })

      cy.wrap(RadioButton)
        .first()
        .should('not.be.checked')
      cy.wrap(RadioButton)
        .eq(1)
        .check({ force: true })

    })
    cy.get('[data-cy="signInButton"]').click()

  })

  it('checkbox', () => {
    cy.visit('/')
    cy.contains("Modal & Overlays").click()
    cy.contains("Toastr").click()
    cy.get('[type="checkbox"]').check({ force: true })
    cy.get('[type="checkbox"]').eq(0).click({ force: true })
  })

  it.only('option and dropdown', () => {
    cy.visit('/')
    // cy.get('nav nb-select').click()
    // cy.get('.options-list').contains('Dark').click()
    // cy.get('nav nb-select').should('contain','Dark')
    // cy.get('nb-layout-header nav').should('have.css','background-color','rgb(34, 43, 69)')


    cy.get('nav nb-select').then(dropdown => {
      cy.wrap(dropdown).click()
      cy.get('.options-list nb-option').each((itemSelect, index) => {
        const item = itemSelect.text().trim()

        const colors = {
          "Light": "rgb(255, 255, 255)",
          "Dark": "rgb(34, 43, 69)",
          "Cosmic": "rgb(50, 50, 89)",
          "Corporate": "rgb(255, 255, 255)"
        }

        cy.wrap(itemSelect).click()
        cy.wrap(dropdown).should('contain', item)
        cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[item])
        if (index < 3) {
          cy.wrap(dropdown).click()
        }

      })

    })


  })




})


