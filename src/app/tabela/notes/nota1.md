pesquisa - component
tabela - component

insercao de dados - 


formsModule 
reactive forms

NgForms

'position', 'name', 'weight', 'symbol'



    this.objetoEnviadosParaTabela.emit({ name: this.nameInput, position: +this.positionInput, symbol: this.symbolInput, weight: +this.weightInput})



spread


Filtros Avançados
Permita que os usuários filtrem por múltiplas colunas (exemplo: nome, data, status).
Adicione um filtro por intervalo de datas.
Implemente um dropdown para selecionar categorias ou tipos de dados.
2. Ordenação Personalizada
Adicione a opção de ordenar os dados por qualquer coluna (ascendente e descendente).
Permita salvar a ordem preferida do usuário.
3. Paginação Inteligente
Utilize paginação para melhorar a performance ao exibir grandes volumes de dados.
Adicione um seletor de quantidade de itens por página (10, 25, 50, 100).
Mostre um indicador de quantos registros foram encontrados.
4. Exportação de Dados
Permita exportar a tabela para CSV, Excel ou PDF.
Adicione a opção de imprimir a tabela formatada.
5. Destaque de Texto Pesquisado
Quando o usuário faz uma busca, destaque o termo encontrado na tabela.
6. Atualização em Tempo Real
Use WebSockets ou polling para atualizar os dados automaticamente sem precisar recarregar a página.
7. Edição Inline
Permita editar os dados diretamente na tabela sem abrir um modal.
8. Ações Rápidas
Botões para excluir, editar ou visualizar detalhes ao lado de cada linha.
Dropdown para ações em lote (excluir vários registros de uma vez).
9. Pesquisa Global e por Coluna
Um campo de pesquisa global que busca em todas as colunas.
Campos de pesquisa individuais em cada coluna para buscas mais precisas.
10. Modo Escuro e Responsividade
Adapte a tabela para telas menores.
Adicione suporte ao modo escuro para melhor acessibilidade.
