
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

    let date = new Date()
    date.setDate(date.getDate() + 35);
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleString('default', { month: 'short' })
    let assertDate = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()

    cy.contains('nb-card', 'Common Datepicker').find('input').then(Input => {
      cy.wrap(Input).click()
      selectCurrentDate()
      function selectCurrentDate() {
        cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
          if (!dateAttribute.includes(futureMonth)) {
            cy.get('[data-name="chevron-right"]').click()
            selectCurrentDate()
          } else {
            cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
          }
        })

      }

      // cy.wrap(Input).invoke('prop', 'value').should('contain', assertDate)
      cy.wrap(Input).should('have.value',assertDate)

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

  it('option and dropdown', () => {
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

  it('table test', () => {
    cy.visit('/')
    cy.contains("Tables & Data").click()
    cy.contains("Smart Table").click()

    cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
      cy.wrap(tableRow).find('.nb-edit').click()
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(6).should('contain', '25')

    })

    cy.get('thead').find('.nb-plus').click()
    cy.get('thead').find('tr').eq(2).then(tableRow => {
      cy.wrap(tableRow).find('[placeholder="First Name"]').type('Emad')
      cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Deym')
      cy.wrap(tableRow).find('.nb-checkmark').click()


    })

    cy.get('tbody tr').find('td').then(tableBody => {
      cy.wrap(tableBody).eq(2).should('contain', 'Emad')
      cy.wrap(tableBody).eq(3).should('contain', 'Deym')
    })

    const age = [20, 30, 40, 200]
    cy.wrap(age).each(age => {
      cy.get('thead [placeholder="Age"]').clear().type(age)
      cy.wait(500)
      cy.get('tbody tr').each(tableRow => {
        if (age == 200) {
          cy.wrap(tableRow).should('contain', 'No data found')
        } else {
          cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        }

      })
    })



  })


  it('tooltip', () => {
    cy.visit('/')
    cy.contains("Modal & Overlays").click()
    cy.contains("Tooltip").click()
    cy.contains('nb-card', 'Colored Tooltips').contains('Default').click()
    cy.get('nb-tooltip').should('contain', 'This is a tooltip')

  })

  it.only('dialog box', () => {
    cy.visit('/')
    cy.contains("Tables & Data").click()
    cy.contains("Smart Table").click()
    const stub = cy.stub()
    cy.on('window:confirm', stub)
    cy.get('tbody tr').first().find('.nb-trash').then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
    })

    //for reject confirmation of dialog
    // cy.get('tbody tr').first().find('.nb-trash')
    // cy.on('window:confirm',()=>{false})

  })


})


