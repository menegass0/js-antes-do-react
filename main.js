const destruct = document.querySelector(".destructuring");
const restOp = document.querySelector(".rest-operators");

const tab= "__";

const user ={
  name:'Diego',
  idade: 27,
  address: {
    street: "rua teste", 
    Number: 176,
  },
};
// Nullish coalescing Operator;
{
const nullOp = document.querySelector(".null-operator");
// operador para lidar com valores nulos
let idade = null;

//podemos usar o operador ou(||) mas o problema é que ele considera valores como 0 nao validos também
nullOp.innerHTML +=`
  <p>podemos usar o operador ou(||) mas o problema é que ele considera valores como 0 nao validos também</p>
  <div class="script">
    const idade = null;<br>
    `+'Sua idade é: ${idade || "nao Informado"}'+`<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    Sua idade é: ${idade || "nao Informado"}
  </div>
`;

idade =0;
nullOp.innerHTML +=`
  <p>note que aqui o valor de idade foi mudado para 0 mas a condiçao continua retornando idade como nao informado</p>
  <div class="script">
    idade = 0;<br>
    `+'Sua idade é: ${idade || "nao Informado"}'+`<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    Sua idade é: ${idade || "nao Informado"}
  </div>
`;


nullOp.innerHTML +=`
  <p>Aqui a idade continua sendo 0 porém </p>
  <div class="script">
    idade = 0;<br>
    `+'Sua idade é: ${idade ?? "nao Informado"}'+`<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    Sua idade é: ${idade ?? "nao Informado"}
  </div>
`;

nullOp.innerHTML +=`
  <button onclick="location.href='#header'">Voltar</button>
`;
}

//Objetos

{
const Obj = document.querySelector(".objects")

Obj.innerHTML += `
<p>Objeto inicial:</p>
<div class="script">
  const user ={<br>
  ${tab}name: 'Diego',<br>
  ${tab}idade: 27,<br>
  ${tab}address: {<br>
  ${tab}${tab}street: "rua teste",<br>
  ${tab}${tab}Number: 176,<br>
  ${tab}},<br>
  };
</div>
`;

//a expressao in retorna true ou false caso haja o campo dentro do objeto
Obj.innerHTML +=`
  <h2>expressão in</h2>
  <p>a expressao in retorna true ou false caso haja o campo dentro do objeto</p>
  <div class="script">
    'name' in user<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    ${'name' in user}
  </div>
`;
Obj.innerHTML +=`
  <div class="script">
    nickname' in user<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    ${'nickname' in user}
  </div>
`;

Obj.innerHTML +=`
  <h2>Função Object.keys(obj)</h2>
  <p>a funçao retorna todas as keys de um tipo objeto</p>
  <div class="script">
    Object.keys(user)<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    ${Object.keys(user)}
  </div>
`;

Obj.innerHTML +=`
  <h2>Função Object.values(obj)</h2>
  <p>a funçao retorna todas as valores de um tipo objeto</p>
  <div class="script">
    Object.values(user)<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    ${Object.values(user)}
  </div>
`;

Obj.innerHTML +=`
  <p>a javascript nao entende como printar um tipo objeto dentro do objeto, um jeito de resolver isso é usando JSON</p>
  <div class="script">
    JSON.stringify(Object.values(user))<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    ${JSON.stringify(Object.values(user))}
  </div>
`;

Obj.innerHTML +=`
  <h2>Função Object.entries(obj)</h2>
  <p>cria varios vetores contendo em cada vetor a key e o value de cada atributo</p>
  <div class="script">
    JSON.stringify(Object.entries(user))<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    ${JSON.stringify(Object.entries(user))}
  </div>
`;

Obj.innerHTML +=`
<button onclick="location.href='#header'">Voltar</button>
`;
}

//Desestruturação

{

  let address1 = user.address;
  destruct.innerHTML +=`
  <p>o modo convencional consiste em criar uma variavel e atribur o campo do objeto a ela</p>
  <div class="script">
    const address = user.address<br>
    `+'address: ${JSON.stringify(address)}'+`
  </div>
  <p>Resultado:</p>
  <div class="result">
    address: ${JSON.stringify(address1)}
  </div>
  `;

  let {address, idade} = user;
  destruct.innerHTML +=`
  <p>o metodo de destruct faz a mesma operação dessa maneira:</p>
  <div class="script">
    const {address} = user<br>
    `+'address: ${JSON.stringify(address)}'+`
  </div>
  <p>Resultado:</p>
  <div class="result">
    address: ${JSON.stringify(address)}
  </div>
  `;

  destruct.innerHTML +=`
  <p>podendo ate mesmo declarar outros campos na mesma linha</p>
  <div class="script">
    const {address, idade} = user<br>
    `+'campos: ${JSON.stringify(address, idade)}'+`
  </div>
  <p>Resultado:</p>
  <div class="result">
    campos: ${JSON.stringify({address, idade})}<br>
  </div>
  `;

}

//Desestruturação 2
//criando outra area de desestruturação para poder usar a mudança de nome na variavel
{
  const {address, idade:age} = user;
  destruct.innerHTML +=`
  <p>você também pode mudar o nome da variavel na instanciação</p>
  <div class="script">
    const {address, idade: age} = user<br>
    `+'address: ${JSON.stringify({address, age})}'+`
  </div>
  <p>Resultado:</p>
  <div class="result">
    campos: ${JSON.stringify({address, age})}
  </div>
  `;

  function mostraIdade({ idade }){
    return idade;
  }
  destruct.innerHTML +=`
  <h2>Funçoes com desestruturação</h2>
  <p>desestruturações podem ser usadas em funcçoes também</p>
  <div class="script">
    function mostraIdade({ idade }){<br>
    ${tab}return idade;<br>
    }
  </div>
  <p>Nesse caso, o usuario passa o objeto como parametro mas só é pego o  campo idade</p>
  <div class="script">
    idade: `+'mostraIdade(user)'+`
  </div>
  <p>Resultado:</p>
  <div class="result">
    idade: ${mostraIdade(user)}
  </div>
  `;
  
  destruct.innerHTML +=`
  <button onclick="location.href='#header'">Voltar</button>
`;
}

//REST OPERATOR
{
  const { name, idade, ...rest } = user;
  restOp.innerHTML +=`
  <p>como podemos ver a serguir o retorno de rest nos entrega todo o objeto user menos o nome e idade</p>
  <div class="script">
  const { name, idade, ...rest } = user;<br>
    `+'result: ${JSON.stringify(rest)};'+`
  </div>
  <p>Resultado:</p>
  <div class="result">
    result: ${JSON.stringify(rest)}
  </div>
  `;

  restOp.innerHTML +=`
  <button onclick="location.href='#header'">Voltar</button>
  `;
}

//Short syntax

{
  const name = "jaozin";
  const idade = 15;

  const jaozin = {
    name,
    idade,
  }
  
  shorSyn.innerHTML +=`
  <p>na hora de construir um objeto nos podemos usar variaveis para inserir como um value da key</p>
  <div class="script">
  const name = "jaozin";<br>
  const idade = 15;<br><br>
  const jaozin = {<br>
  ${tab}name: name,<br>
  ${tab}idade: idade,<br>
  }<br><br>
  `+'result: ${JSON.stringify(jaozin)};'+`
  </div>
  <p>Resultado:</p>
  <div class="result">
    result: ${JSON.stringify(jaozin)}
  </div>
  `;

  shorSyn.innerHTML +=`
  <p>pode-se obter o mesmo resultado colocando a variavel comom a propria key, assim ela associa o nome da variavel ao nome da key e o conteúdo da variavel ao counteudo da value</p>
  <div class="script">
  const name = "jaozin";<br>
  const idade = 15;<br><br>
  const jaozin = {<br>
  ${tab}name,<br>
  ${tab}idade,<br>
  }<br><br>
  `+'result: ${JSON.stringify(jaozin)};'+`
  </div>
  <p>Resultado:</p>
  <div class="result">
    result: ${JSON.stringify(jaozin)}
  </div>
  `;
  

  shorSyn.innerHTML +=`
  <button onclick="location.href='#header'">Voltar</button>
  `;
}


//chaining Optional
{

}










