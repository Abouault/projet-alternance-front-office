ouvrir l'interface cypress : npx cypress open

syntaxe de base :

describe('My First Test', () => {
it('Does not do much!', () => {
// ecrit ton test ici
})
})

1.visiter une url : cy.visit('https://example.cypress.io')

2.le contenu doit contenir : cy.contains('type')

3.cliquer sur un élément : cy.contains('type').click()

4.faire une affirmation : cy.url().should('include', '/commands/actions')

5.entrer du texte sur un élément sélectionner : cy.get('.action-email').type('fake@email.com')

6.Affirmer que l'entrée reflète la nouvelle valeur : .should('have.value', 'fake@email.com')
