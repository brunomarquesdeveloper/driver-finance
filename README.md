🚗 Driver Finance

Aplicativo de controle e gestão financeira para motoristas de aplicativo, desenvolvido como uma Progressive Web App (PWA).

O Driver Finance permite registrar os resultados do trabalho diário, controlar despesas e acompanhar indicadores financeiros para entender melhor a relação entre faturamento, custos, tempo trabalhado e quilometragem.

A proposta é oferecer uma alternativa simples às planilhas e anotações manuais, com uma interface pensada principalmente para utilização no celular.

---

🌐 Projeto

O aplicativo pode ser acessado através do deploy do projeto:

Driver Finance:
https://appcardriverfinance.vercel.app

---

🎯 Objetivo

O objetivo do projeto é criar uma ferramenta simples e prática para ajudar motoristas de aplicativo a:

- Registrar seus resultados diários;
- Controlar despesas relacionadas ao trabalho;
- Acompanhar faturamento e custos;
- Calcular o resultado líquido;
- Analisar ganhos por hora e quilômetro;
- Acompanhar sua evolução financeira ao longo do tempo.

O aplicativo busca transformar os dados registrados pelo motorista em informações úteis para acompanhar sua operação no dia a dia.

---

❗ Problema

Motoristas de aplicativos precisam lidar diariamente com diferentes informações e custos, como:

- Faturamento;
- Quantidade de corridas;
- Quilometragem;
- Horas trabalhadas;
- Combustível;
- Alimentação;
- Manutenção;
- Aluguel ou financiamento;
- Outros gastos relacionados ao trabalho.

Quando essas informações não são registradas e organizadas, torna-se mais difícil entender quanto foi faturado, quanto foi gasto e qual foi o resultado real do trabalho.

---

💡 Solução

O Driver Finance centraliza essas informações em um único aplicativo.

Através dos registros diários e das despesas cadastradas, o sistema calcula indicadores que ajudam o motorista a visualizar sua situação financeira.

Principais indicadores

- 💰 Ganhos brutos
- 💸 Despesas
- 📊 Resultado líquido
- 🚗 R$/km
- ⏱️ R$/hora
- 🛣️ Quilômetros percorridos
- 🏁 Quantidade de corridas
- 📈 Evolução financeira
- 📅 Resumo por período

---

📱 Funcionalidades

📊 Dashboard

Tela principal do aplicativo com uma visão geral dos resultados.

O Dashboard permite acompanhar informações como:

- Ganhos brutos;
- Total de despesas;
- Resultado líquido;
- Valor por quilômetro;
- Valor por hora;
- Quantidade de corridas;
- Quilometragem;
- Evolução dos resultados;
- Filtros por período.

Os cálculos são realizados a partir dos registros e despesas armazenados no aplicativo.

---

📝 Registros

Área destinada ao registro do trabalho realizado pelo motorista.

Cada registro representa um período diário de trabalho e pode conter:

- 📅 Data;
- 💰 Ganhos brutos;
- ⏱️ Tempo trabalhado;
- 🛣️ Quilometragem percorrida;
- 🏁 Quantidade de corridas;
- 🚗 Plataformas utilizadas.

Atualmente, o sistema permite trabalhar com diferentes plataformas, como:

- Uber
- 99
- inDrive
- Outra

---

💸 Despesas

Permite registrar os custos relacionados à atividade profissional.

As despesas podem ser organizadas por categorias, como:

- ⛽ Combustível;
- 🍔 Alimentação;
- 🔧 Manutenção;
- 🏠 Aluguel/financiamento;
- 📦 Outros.

O total das despesas é utilizado nos cálculos financeiros do Dashboard.

---

⚙️ Configurações

O aplicativo possui uma área de configurações organizada por categorias.

🎨 Personalização

Permite personalizar aspectos da utilização do aplicativo, incluindo:

- Tema;
- Primeiro dia da semana;
- Configuração do início do mês;
- Categorias de despesas.

O sistema possui suporte a:

- ☀️ Tema claro;
- 🌙 Tema escuro;
- 🔄 Tema automático.

💾 Dados

Área destinada ao gerenciamento dos dados armazenados localmente pelo aplicativo.

📱 Aplicativo

Configurações relacionadas ao funcionamento e à utilização do aplicativo.

---

📱 Progressive Web App

O Driver Finance é desenvolvido como uma PWA (Progressive Web App).

Isso permite que o aplicativo seja utilizado através do navegador e instalado no dispositivo como um aplicativo.

Recursos

- 📱 Interface mobile-first;
- 💻 Compatibilidade com computadores;
- 📲 Instalação no celular;
- ⚡ Carregamento otimizado;
- 📴 Armazenamento local;
- 💾 Funcionamento baseado em dados locais;
- 🔄 Service Worker;
- 📦 Manifest PWA.

A arquitetura foi pensada para que o aplicativo possa continuar sendo utilizado mesmo em situações onde a conexão com a internet não esteja disponível.

---

🗄️ Armazenamento

Os dados da aplicação são armazenados localmente no dispositivo utilizando IndexedDB, através da biblioteca Dexie.js.

Isso permite que os dados do motorista permaneçam no próprio dispositivo, sem depender de um servidor para as operações principais do aplicativo.

A estrutura atual utiliza dados relacionados a:

- Registros;
- Despesas;
- Configurações.

---

🛠️ Tecnologias

O projeto utiliza tecnologias modernas do ecossistema web:

Tecnologia| Utilização
React| Construção da interface
Vite| Ambiente de desenvolvimento e build
Bootstrap| Interface e componentes responsivos
JavaScript| Lógica da aplicação
Dexie.js| Gerenciamento do IndexedDB
IndexedDB| Armazenamento local
PWA| Instalação e experiência de aplicativo
Service Worker| Recursos offline e cache
Git| Controle de versão
GitHub| Hospedagem do código
Vercel| Deploy da aplicação

--- 

📋 Desenvolvimento

Para acompanhar as tarefas, etapas de implementação e próximos passos:

👉 "Consulte o CHECKLIST.md" (./CHECKLIST.md)

O "README.md" apresenta a visão geral do projeto, enquanto o "CHECKLIST.md" é utilizado como painel de desenvolvimento.

---

👨‍💻 Autor

Desenvolvido por Bruno Marques.

🌐 Portfólio:
https://bruno-marques.vercel.app/

💼 LinkedIn:
https://www.linkedin.com/in/bruno-marques-desenvolvedor/

---

📄 Licença

Este projeto está licenciado sob a MIT License.

Consulte o arquivo ""LICENSE"" (./LICENSE) para obter os detalhes completos da licença.