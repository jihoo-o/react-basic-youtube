/// <reference types="cypress" />

import '@testing-library/cypress/add-commands';

describe('Youtube', () => {
    beforeEach(() => {
        cy.intercept('GET', /(mostPopular)/g, {
            fixture: 'popular.json',
        }).as('getMostPopular');
        cy.visit('/');
    });

    it('renders', () => {
        cy.findByText('Youtube').should('exist');
    });

    it('display most popular videos first', () => {
        cy.findByText(
            'Test Data: 레전드 박종팔 반응 속도 ㄷㄷ.. (김계란 잽 피하기)'
        ).should('exist');
    });
});
