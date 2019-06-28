describe('Form on home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads with an initial state', () => {
    cy.get('form')
      .find('input[type="checkbox"]')
      .as('checkboxes');

    cy.get('@checkboxes')
      .should($c => {
        expect($c).to.have.length(9);
      })
      .each($c => {
        expect($c).to.not.be.checked;
      });

    cy.get('form+div')
      .find('span')
      .should($spans => {
        expect($spans).to.have.length(2);
      });

    cy.get('form+div span')
      .first()
      .should('have.text', '000');

    cy.get('form+div span')
      .eq(1)
      .should('have.text', '----------');
  });

  it('updates octal and symbolic value if any of the checkboxes are clicked', () => {
    cy.get('form')
      .find('label')
      .as('checkboxes');

    const checkboxIndexes = [0, 1, 3, 6];

    checkboxIndexes.forEach(i => {
      cy.get('@checkboxes')
        .eq(i)
        .click();
    });

    cy.get('form+div span')
      .first()
      .should('have.text', '644');

    cy.get('form+div span')
      .eq(1)
      .should('have.text', '-rw-r--r--');

    cy.get('@checkboxes')
      .eq(6)
      .click();

    cy.get('form+div span')
      .first()
      .should('have.text', '640');

    cy.get('form+div span')
      .eq(1)
      .should('have.text', '-rw-r-----');
  });
});
