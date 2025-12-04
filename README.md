# Central de Atendimento ao Cliente TAT - Testes Automatizados

Projeto de testes automatizados desenvolvido durante o curso **"Cypress, do Zero à Nuvem"** da [Escola Talking About Testing](https://www.udemy.com/course/cypress-do-zero-a-nuvem/).

## Sobre o Projeto

Este projeto contém uma suíte de testes end-to-end para a aplicação **Central de Atendimento ao Cliente TAT**, utilizando o framework Cypress. Os testes cobrem preenchimento de formulários, validações, upload de arquivos, navegação entre páginas e comportamento em dispositivos móveis.

## Tecnologias

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [npm](https://www.npmjs.com/) - Gerenciador de pacotes

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Git](https://git-scm.com/) (para clonar o repositório)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/TheSergioHenrique/cypress-course
```

2. Acesse o diretório do projeto:
```bash
cd cypress-course
```

3. Instale as dependências:
```bash
npm install
```

## Executando os Testes

### Modo Interativo (Cypress App)

Abre a interface gráfica do Cypress:
```bash
npm run cy:open
```

### Modo Interativo - Viewport Mobile

Abre o Cypress simulando um dispositivo móvel (410x860px):
```bash
npm run cy:open:mobile
```

### Modo Headless

Executa todos os testes em modo headless (sem interface gráfica):
```bash
npm test
```

### Modo Headless - Viewport Mobile

Executa os testes em modo headless simulando dispositivo móvel:
```bash
npm run test:mobile
```

## 📝 Estrutura dos Testes

Os testes estão organizados em:

- **Validações de formulário**: Campos obrigatórios, formatos de email, telefone
- **Interações com elementos**: Selects, radio buttons, checkboxes
- **Upload de arquivos**: Upload simples, drag-and-drop, usando fixtures
- **Navegação**: Links, páginas em novas abas, política de privacidade
- **Comandos customizados**: Reutilização de código através de comandos personalizados
- **Responsividade**: Testes em viewport mobile

## Comandos Customizados

O projeto utiliza comandos customizados para melhorar a legibilidade e manutenibilidade:

- `cy.fillMandatoryFieldsAndSubmit(data)` - Preenche campos obrigatórios e submete o formulário

## Conteúdo Aprendido

Durante o desenvolvimento deste projeto, foram abordados:

- ✅ Configuração do Cypress
- ✅ Seletores CSS e estratégias de seleção
- ✅ Comandos básicos do Cypress (type, click, select, check)
- ✅ Asserções e validações
- ✅ Upload de arquivos (`.selectFile()`)
- ✅ Manipulação de atributos (`.invoke()`)
- ✅ Fixtures e aliases
- ✅ Comandos customizados
- ✅ Configuração de viewport para diferentes dispositivos
- ✅ Boas práticas de estruturação de testes


Desenvolvido como parte do curso da [Escola Talking About Testing](https://www.udemy.com/course/cypress-do-zero-a-nuvem/).

## 🔗 Links Úteis

- [Documentação do Cypress](https://docs.cypress.io/)
- [Talking About Testing](https://talkingabouttesting.com/)
- [Curso Cypress do Zero à Nuvem](https://www.udemy.com/course/cypress-do-zero-a-nuvem/)
