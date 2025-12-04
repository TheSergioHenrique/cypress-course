describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('teste@example.com')
    cy.get('#open-text-area').type('Estou testando a aplicação com Cypress e está funcionando muito bem! Este é um texto mais longo para demonstrar como o delay zero acelera significativamente a digitação, tornando os testes mais rápidos e eficientes.', { delay: 0 })
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('teste@example,com')
    cy.get('#open-text-area').type('Teste de email inválido', { delay: 0 })
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('campo telefone continua vazio quando preenchido com valor não-numérico', () => {
    cy.get('#phone')
    .type('abcdefgh')
    .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('teste@example.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Teste de telefone obrigatório', { delay: 0 })
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
    .type('Teste')
    .should('have.value', 'Teste')
    .clear()
    .should('have.value', '')
    cy.get('#lastName')
    .type('Silva')
    .should('have.value', 'Silva')
    .clear()
    .should('have.value', '')
    cy.get('#email')
    .type('teste@example.com')
    .should('have.value', 'teste@example.com')
    .clear()
    .should('have.value', '')
    cy.get('#phone')
    .type('12345678')
    .should('have.value', '12345678')
    .clear()
    .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {
    const data = {
      firstName: 'Teste',
      lastName: 'da Silva',
      email: 'TesteDaSilva@example.com',
      message: 'Teste usando comando customizado'
    }
    cy.fillMandatoryFieldsAndSubmit(data)
    cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
    .select('youtube')
    .should('have.value', 'youtube')

  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
  })


  it('seleciona um produto (Blog) por seu índice)', () => {
    cy.get('#product')
    .select(1)
    .should('have.value', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value', 'feedback')
  })

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
    .should('have.length', 3)
    .each(($radio) => {
      cy.wrap($radio)
      .check()
      .should('be.checked')
    })
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
  })

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json')
    .then(($input) => {
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
    .should(($input) => {
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]')
    .selectFile('@sampleFile')
    .should(($input) => {
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.get('#privacy a')
    .should('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('#privacy a')
    .invoke('removeAttr', 'target')
    .click()

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
  })

  it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html')

    cy.contains('Talking About Testing').should('be.visible')
  })

})
