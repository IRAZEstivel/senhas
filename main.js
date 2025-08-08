// Selecionando o elemento que exibe o número de caracteres da senha
const numeroSenha = document.querySelector('.parametro-senha__texto');

// Inicializando o número de caracteres da senha como 12
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha; // Exibe o valor inicial de 12 caracteres no HTML

// Definindo os conjuntos de caracteres possíveis para a senha
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';  // Letras maiúsculas
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';  // Letras minúsculas
const numeros = '0123456789';  // Números de 0 a 9
const simbolos = '!@%*?';  // Símbolos especiais

// Selecionando todos os botões que controlam o tamanho da senha
const botoes = document.querySelectorAll('.parametro-senha__botao');

// Selecionando o campo onde a senha gerada será exibida
const campoSenha = document.querySelector('#campo-senha');

// Selecionando todos os checkboxes que indicam quais tipos de caracteres a senha pode conter
const checkbox = document.querySelectorAll('.checkbox');

// Selecionando o elemento visual que indica a força da senha
const forcaSenha = document.querySelector('.forca');

// Atribuindo as funções aos botões de aumentar e diminuir o tamanho da senha
botoes[0].onclick = diminuiTamanho;  // Botão para diminuir o tamanho da senha
botoes[1].onclick = aumentaTamanho;  // Botão para aumentar o tamanho da senha

// Função para diminuir o tamanho da senha
function diminuiTamanho() {
    // Impede que o tamanho da senha fique menor que 1
    if (tamanhoSenha > 1) {
        tamanhoSenha--;  // Decrementa o tamanho
    }
    // Atualiza a exibição do número de caracteres
    numeroSenha.textContent = tamanhoSenha;
    // Gera uma nova senha com o tamanho atualizado
    geraSenha();
}

// Função para aumentar o tamanho da senha
function aumentaTamanho() {
    // Impede que o tamanho da senha ultrapasse 20 caracteres
    if (tamanhoSenha < 20) {
        tamanhoSenha++;  // Incrementa o tamanho
    }
    // Atualiza a exibição do número de caracteres
    numeroSenha.textContent = tamanhoSenha;
    // Gera uma nova senha com o tamanho atualizado
    geraSenha();
}

// Loop para associar a função de geração de senha a cada checkbox
for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;  // Quando qualquer checkbox for marcado/desmarcado, gera a senha
}

// Função responsável por gerar a senha com base nas opções do usuário
function geraSenha() {
    let alfabeto = '';  // Inicializa a variável que armazenará todos os caracteres possíveis para a senha

    // Se a opção de letras maiúsculas estiver marcada, adiciona as letras maiúsculas ao alfabeto
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    // Se a opção de letras minúsculas estiver marcada, adiciona as letras minúsculas ao alfabeto
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    // Se a opção de números estiver marcada, adiciona os números ao alfabeto
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    // Se a opção de símbolos estiver marcada, adiciona os símbolos ao alfabeto
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }

    // Gerando a senha com caracteres aleatórios do alfabeto definido
    let senha = '';  // Variável que armazenará a senha gerada
    for (let i = 0; i < tamanhoSenha; i++) {
        // Gera um número aleatório entre 0 e o comprimento do alfabeto
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);  // Arredonda para o número inteiro mais próximo
        senha = senha + alfabeto[numeroAleatorio];  // Adiciona o caractere correspondente ao número aleatório à senha
    }

    // Exibe a senha gerada no campo de texto
    campoSenha.value = senha;
    // Classifica a força da senha com base no tamanho do alfabeto
    classificaSenha(alfabeto.length);
}

// Função que classifica a força da senha com base na "entropia" (complexidade)
function classificaSenha(tamanhoAlfabeto) {
    // Calcula a entropia da senha usando a fórmula: tamanho * log2(tamanho do alfabeto)
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);  // Exibe a entropia no console (pode ser útil para depuração)
}
    // Remove qualquer classe de força anterior (fraca, média ou forte)
    forcaSenha.classList.remove('fraca', 'media', 'forte');

    // Classifica a força da senha com base na entropia
    if (entropia > 57) {
        // Se a entropia for maior que 57, considera a senha "forte"
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia <= 57) {
        // Se a entropia for entre 35 e 57, considera a
}






