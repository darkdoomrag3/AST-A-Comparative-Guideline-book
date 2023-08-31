
function SelecDayFromCurrentDay(day) {

    let date = new Date()
    date.setDate(date.getDate() + day)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleString('default', { month: 'short' })
    let assertDate = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()

    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
        if (!dateAttribute.includes(futureMonth)) {
            cy.get('[data-name="chevron-right"]').click()
            SelecDayFromCurrentDay(day)
        }
        else {
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        }
    })

    return assertDate

}




export class datePickerSelect {

    selectcommonDatePickerFromToday(dayFromToday) {

        cy.contains('nb-card', 'Common Datepicker').find('input').then(Input => {
            cy.wrap(Input).click()
            let assertDate = SelecDayFromCurrentDay(dayFromToday)
            cy.wrap(Input).invoke('prop', 'value').should('contain', assertDate)
            cy.wrap(Input).should('have.value', assertDate)
        })

    }

    selectDatePickerWithRangeFromToday(firstDay,secondDay) {

        cy.contains('nb-card', 'Datepicker With Range').find('input').then(Input => {
            cy.wrap(Input).click()
            let firstassert = SelecDayFromCurrentDay(firstDay)
            let secondAssert = SelecDayFromCurrentDay(secondDay)
            const finalAssert = firstassert+' - '+secondAssert
            cy.wrap(Input).invoke('prop', 'value').should('contain', finalAssert)
            cy.wrap(Input).should('have.value', finalAssert)
        })

    }


}

export const selectDatePicker = new datePickerSelect()