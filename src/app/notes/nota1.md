 Features e Conceitos Angular Utilizados
1️⃣ Autenticação de Usuário (Login/Register)
Conceitos: Forms, Validation, Services and HTTP, Routing and Guards
Detalhes:
Formulários reativos com ngForms para login e registro.
Validação de campos (e.g., email válido, senha com no mínimo 8 caracteres).
Serviço de autenticação consumindo uma API fake com HttpClient.
Guards para proteger rotas (somente usuários autenticados acessam determinadas páginas).
2️⃣ CRUD de Cursos
Conceitos: Forms, Inputs, Validation, Services and HTTP, Event Binding, Lifecycle Hooks
Detalhes:
Listagem de cursos consumida de uma API.
Cadastro/Edição de cursos com formulário reativo (FormGroup, FormControl).
Botão de deletar curso com Event Binding.
Uso do ngOnInit() e ngOnDestroy() para inicializar e limpar assinaturas da API.
3️⃣ Cadastro de Alunos e Matrícula em Cursos
Conceitos: Forms, Validation, Directives, Routing and Guards, Lifecycle Hooks
Detalhes:
Formulário com inputs para cadastrar alunos.
Validações personalizadas via diretivas (Directives).
Serviço para buscar cursos disponíveis via HTTP.
Proteção de rota para impedir alunos não autenticados de se matricularem (Guards).
4️⃣ Dashboard com Estatísticas (State Management com NgRx)
Conceitos: @ngrx, State Management
Detalhes:
Exibição de gráficos sobre quantidade de alunos, cursos ativos, etc.
Gerenciamento de estado global dos cursos e alunos via NgRx Store.
Uso de Actions, Reducers e Effects para atualizar os dados no frontend.
5️⃣ Testes Unitários e de Integração (Jasmine)
Conceitos: Jasmine
Detalhes:
Testes unitários para os serviços (Services) e componentes (Components).
Testes de integração para garantir que chamadas HTTP retornem os dados esperados.
🌟 Possíveis Expansões
Pagamento de cursos.
Chat entre alunos e professores.
Upload de arquivos (certificados, PDFs de cursos).
Esse projeto é bem completo e cobre todos os conceitos que você quer praticar. O que acha?
