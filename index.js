const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "vari x = 10;",
        "int x = 10;",
        "let x = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método JavaScript é usado para imprimir algo no console?",
      respostas: [
        "console.print()",
        "console.log()",
        "print.console()",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona todos os elementos com a classe especificada",
        "Seleciona o primeiro elemento com a classe especificada",
        "Seleciona o último elemento com a classe especificada",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Igualdade estrita",
        "Igualdade solta",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "array.push()",
        "array.add()",
        "array.insert()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Converte uma string para um número inteiro",
        "Arredonda um número para o inteiro mais próximo",
        "Converte um número para uma string",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "/* Este é um comentário de uma linha */",
        "<!-- Este é um comentário de uma linha -->",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      respostas: [
        "Remove um ouvinte de evento de um elemento",
        "Adiciona um ouvinte de evento a um elemento",
        "Substitui um ouvinte de evento em um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '2 + 2 + '5' em JavaScript?",
      respostas: [
        "22",
        "9",
        "25",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método JavaScript usado para remover o último elemento de um array?",
      respostas: [
        "array.delete()",
        "array.pop()",
        "array.remove()",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
  
         }
  
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  