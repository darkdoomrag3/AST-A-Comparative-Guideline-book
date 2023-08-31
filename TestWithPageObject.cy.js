import { navigateTo } from "../support/page-objects/navigationPage"
import { onFomrLayoutPage } from "../support/page-objects/formsLayoutPage"
import { selectDatePicker } from "../support/page-objects/datePickerPage"
import { toSmartTable } from "../support/page-objects/smartTablePage"

describe('Test with Page Objecs', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigation', () => {
        navigateTo.formLayoutPages()
        navigateTo.datePickerPage()
        navigateTo.modalPages()
        navigateTo.tablePages()
        navigateTo.tooltipPages()
    })

    it('should submit inline and basid and select tommorow date in calandar',()=>{
        navigateTo.formLayoutPages()
        onFomrLayoutPage.submitInlineformAndEmail('Emad Bay','emadbay@gmail.com')
        onFomrLayoutPage.submitBasicformAndEmail('emadbay@gmail.com','test123456@test')
        navigateTo.datePickerPage()
        selectDatePicker.selectcommonDatePickerFromToday(1)
        selectDatePicker.selectDatePickerWithRangeFromToday(1,7)
        navigateTo.tablePages()
        toSmartTable.addNewRecordWithFirstAndLastName('Emad','Deym')
        toSmartTable.updateAgeByFirstName('Emad','32')
        toSmartTable.deletRowByIndex(1)
        
    })


})




