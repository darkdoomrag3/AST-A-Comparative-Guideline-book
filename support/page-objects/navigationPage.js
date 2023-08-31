
function selectGroupItemValue(groupMenue) {
    cy.contains('a', groupMenue).then(menue => {
        cy.wrap(menue).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if (attr.includes('chevron-left')) {
                cy.wrap(menue).click()
            }
        })
    })
}


export class NavigationOnPages {

    formLayoutPages() {

        selectGroupItemValue("Form")
        cy.contains("Form Layouts").click()
    }
    datePickerPage() {
        selectGroupItemValue("Form")
        cy.contains("Datepicker").click()
    }

    modalPages() {
        selectGroupItemValue("Modal & Overlays")
        cy.contains("Toastr").click()


    }

    tablePages() {
        selectGroupItemValue("Tables & Data")
        cy.contains("Smart Table").click()
    }
    tooltipPages() {
        selectGroupItemValue("Modal & Overlays")
        cy.contains("Tooltip").click()
    }


}




export const navigateTo = new NavigationOnPages()
