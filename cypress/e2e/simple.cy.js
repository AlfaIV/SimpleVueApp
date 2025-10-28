describe('Интеграционное тестирование', () => {
  it('Проверяем запуск приложения', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#app').should('be.visible');
  })
})