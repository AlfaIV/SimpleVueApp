describe('Интеграционное тестирование', () => {
  it('Проверяем запуск приложения', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#app').should('be.visible');
  })
  it('Проверяем переход на карточку', () => {
    cy.visit('http://localhost:8080/');
    cy.get('[data-test-id="NewsCard"]').click();
    cy.url().should('include', '/news');
  })
})