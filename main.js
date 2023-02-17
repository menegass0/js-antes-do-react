const destruct = document.querySelector(".destructuring"),
restOp = document.querySelector(".rest-operators"),
shorSyn = document.querySelector(".short-syntax"),
chainOpt = document.querySelector(".chain-opt"),
filterFunc = document.querySelector(".filter"),
everyFunc = document.querySelector(".every"),
mapFunction = document.querySelector(".map"),            
someFunc = document.querySelector(".some");


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
  const jaozin ={
    name:'Diego',
    idade: 27,
    address: {
      street: "rua teste", 
      Number: 176,
      zip:{
        zipcode: 11750,
        city: 'casa da mae joana',
      },
      showFullAddress(){
        return "ok";
      },
    },
  };
  const faltando ={
    name:'Diego',
    idade: 27,
  }

  chainOpt.innerHTML += `
    <p>suponha que você tenha o seginte objeto:</p>
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
    <p>ao tentar retornar o valor de street em address voce faz o seguinte comando:</p>
    <div class="script">
    `+'result: ${JSON.stringify(user.address.street)};'+`
    </div> 
    <p> e o resultado seria:</p>
    <div class="result">
    result: ${JSON.stringify(user.address.street)};
    </div>
    <p>vamos supor que o endereço nao exista e o usuario esteja da seguinte maneira e voce tente retornar o endereço da mesma maneira</p>
    <div class="script">
    const user ={<br>
    ${tab}name: 'Diego',<br>
    ${tab}idade: 27,<br>
    };<br><br>
    `+'result: ${JSON.stringify(user.address.street)};'+`
    </div>
    <p>o resultado seria esse</p>
    <div class="result"></div>
    <p>como voce pode ver nao acusaria nenhum erro, porém nao mostraria nada. Ao olhar a aba de console voce receberia o seguinte alerta de erro</p>
    <div class="error">Uncaught TypeError: Cannot read properties of undefined (reading 'street')</div> 
    <p>voce poderia fazer uma condicional na saida</p>
    <div class="script">
    `+'result: ${JSON.stringify((user.address ? user.address.street : "Nao Informado"))};'+`
    </div> 
    <p>esse resultado parece bom no começo, porém caso houvessem outros campos e o objeto fosse muito complexo, cada vez mais nossa condicional seria mais complexa. Nesse exemplo o campo address posui um campo objeto zip com dois valores dentro</p>
    <div class="script">
      const user ={<br>
      ${tab}name:'Diego',<br>
      ${tab}idade: 27,<br>
      ${tab}address: {<br>
      ${tab}${tab}street: "rua teste", <br>
      ${tab}${tab}Number: 176,<br>
      ${tab}${tab}zip:{<br>
      ${tab}${tab}${tab}zipcode: 11750,<br>
      ${tab}${tab}${tab}city: 'casa da mae joana',<br>
      ${tab}${tab}},<br>
      ${tab}},<br>
      };<br>
    </div>
    <p>Nesse caso a condicional para tratar essa exceção seria algo como:</p>
    <div class="script">
      condicao = user.address<br>
      ${tab}? user.address.zip<br>
      ${tab}${tab}? user.address.zip.zipcode<br>
      ${tab}${tab}: 'Nao informado'<br>
      ${tab}:'Nao informado<br><br>
      `+'result: ${JSON.stringify(condicao)};'+`
    </div>
  `;
  let condicao = jaozin.address
      ? jaozin.address.zip
        ? jaozin.address.zip.zipcode
        : 'Nao Informado'
      :'Nao Informado';
  
  chainOpt.innerHTML +=`
    <div class="result">
      ${JSON.stringify(condicao)}
    </div>
    <p>O chained option reduz a parte de condiçoes tornando a mesma condição em algo muito menor (note que para a verificação de caso seja nulo é usado o Nullish operato)</p>
    <div class="script">
      condicao = user.address?.zip?.zipcode ?? 'Nao Informado';
    </div>
  `;
  condicao = jaozin.address?.zip.zipcode ?? 'Nao informado';

  chainOpt.innerHTML +=`
    <div class="result">
      ${JSON.stringify(condicao)};
    </div>
    <p>desse jeito ele verifica passo a passo caso nao haja uma parte do caminho</p><br><br>
    <h2>Chain Options em funções</h2>
    <p>chain options podem ser usadas em funçoes também. Considere o seguinte objeto</p>
    <div class="script">
      const user ={<br>
      ${tab}name:'Diego',<br>
      ${tab}idade: 27,<br>
      ${tab}address: {<br>
      ${tab}${tab}street: "rua teste", <br>
      ${tab}${tab}Number: 176,<br>
      ${tab}${tab}zip:{<br>
      ${tab}${tab}${tab}zipcode: 11750,<br>
      ${tab}${tab}${tab}city: 'casa da mae joana',<br>
      ${tab}${tab}},<br>
      ${tab}${tab}showFullAddress(){<br>
      ${tab}${tab}${tab}return "ok";<br>
      ${tab}${tab}},<br>
      ${tab}},<br>
      };<br>
    </div>
    <p>é possivel fazer o mesmo tipo de condicional de chain option com funções, onde verifica-se caso a função exista e executa-a caso sim</p>
    `
  //verifica caso endereço exista e caso a função exista e entao chama ela
  condicao = jaozin.address?.showFullAddress?.() ?? "nao existe";
  
  chainOpt.innerHTML +=`
    <div class="script">
      condicao user.address?.showFullAddress?.() ?? "nao existe";
    </div>
    <div class="result">
      ${JSON.stringify(condicao)}
    </div>
  `;

  chainOpt.innerHTML +=`
    <button onclick="location.href='#header'">Voltar</button>
  `;
}

//map

{
  const array =[1, 2, 3, 4, 5];

  mapFunction.innerHTML +=`
    <p>quando queremos percorrer um array, podemos fazer isso de varias formas. Considere o array abaixo:</p>
    <div class="script">
      const array =[1, 2, 3, 4, 5];
    </div>
    <p>as duas maneiras principais envolvem laços de repetições</p>
    <div class="script">
      for (const i of array){<br>
      ${tab}result += i;<br>
      }<br>
      console.log(`+'result'+`)<br><br>

      array.forEach(item =>{<br>
      ${tab}result +=item;<br> 
      })<br>
      console.log(`+'result'+`)<br>
    </div>
    <p>ambos os dois consoles logs iriam resultar em:</p>
  `;
  let result = "";
  for (const i of array){
    result += i;
  }
  let novoArray = array.forEach(item => {
    return item * 2;
  })
  mapFunction.innerHTML += `
    <div class="result">
      ${result}
    </div> 
    <p>Suponha que eu queira retornar um novo array em funçao dos elementos do primeiro array</p>
    <div class="script">
      const novoArray = array.forEach(item =>{<br>
      ${tab}return item * 2;<br> 
      })<br><br>
      //imprimindo o valor<br>
      `+'${JSON.stringify(novoArray)}'+`
    </div>
    <p>Caso eu tente retornar o valor do novo Array vou receber isso:
    <div class="result">
      ${JSON.stringify(novoArray)}
    </div>
    <p>Isso porque o forEach nao trabalha muito bem com a função de retorno e pra que isso funcione seria dessa maneira</p>
    <div class="script">
      //instanciando a variavel novoArray antes do forEach<br>
      const novoArray = [];<br><br>
      array.forEach(item =>{<br>
      ${tab}novoArray.push(item * 2);<br> 
      })<br><br>
      //imprimindo o resultado<br>
      `+'${JSON.stringify(novoArray)}'+`
    </div>
  `;
  novoArray =[2, 4, 6, 8, 10];

  mapFunction.innerHTML +=`
    <p>Só assim voce conseguiria retornar:</p>
    <div class="result">
    ${JSON.stringify(novoArray)}
    </div>
    <p>a função map() diferente disso consegue fazer o retorno de dentro da sua execução</p>
    <div class="script">
      const novoArray = array.map(item => {<br>
        return item * 3;<br>
      })<br><br>
      //imprimindo o resultado<br>
      `+'result: ${JSON.stringify(novoArray)}'+`
    </div>
  `;
  
  novoArray = array.map(item =>{
    return item * 3;
  })

  mapFunction.innerHTML += `
    <div class="result">
      result: ${novoArray}
    </div>
    <p>é possivel usar condicionais dentro do map também</p>
    <div class="script">
      const novoArray = array.map(item =>{<br>
      ${tab}if(item % 2 == 0){<br>
      ${tab}${tab}return item * 10;<br>
      ${tab}}<br><br>
      ${tab}return item;<br>
      })
    </div>
  `;
  
  novoArray = array.map(item =>{
    if(item % 2 ==0){
      return item * 10;
    }

    return item;
  })
  mapFunction.innerHTML += `
    <div class="result">
      result: ${novoArray}
    </div>
  `;

  mapFunction.innerHTML +=`
    <button onclick="location.href='#header'">Voltar</button>
  `;
}

{
  const array = [1, 2, 3, 4, 5];
  let novoArray = array.filter(item => item % 2 !== 0);

  filterFunc.innerHTML +=`
    <p>o modo como a função filter funciona é igual ao da função map, mas diferente da função map, filter retorna uma parte do array de acordo com um condiocional</p>
    <div class="script">
      const array = [1, 2, 3, 4, 5];<br>
      const novoArray = array.filter(item => item % 2 !== 0);<br><br>

      //imprimindo novoArray<br>
      `+'result: ${JSON.stringify(novoArray)}'+`
    </div>
    <div class="result">
      result: ${JSON.stringify(novoArray)}
    </div>
    <p>outro ponto importante é que diferente do map(), o filter pega uma porção do array original, ou seja, tem um tamanho variavel, diferente do map() que mantinha o mesmo tamanho do array original</p>
    <div class="script">
    `+'result: novoArray.length'+`
    </div>
    <div class="result">
      ${novoArray.length}
    </div><br>
    <h2>map() + filter()
    <p>você também pode juntar as duas funções na hora de operar em um array<p>
  `;
  
  novoArray = array.filter(item => item % 2 !== 0).map(item => item * 10)

  filterFunc.innerHTML += `
    <div class="script">
    novoArray = array.filter(item => item % 2 !== 0).map(item => item * 10);<br><br>
    //exibindo<br>
    `+'result: ${JSON.stringify(novoArray)}'+`
    </div>
    <div class="result">
      ${JSON.stringify(novoArray)}
    </div>
  `;

  filterFunc.innerHTML +=`
    <button onclick="location.href='#header'">Voltar</button>
  `;
}

{
  let array = [1, 2, 3, 4, 5];
  let res = array.every(item => typeof item === 'number');

  everyFunc.innerHTML +=`
    <p>exemplo:</p>
    <div class="script">
      let array = [1, 2, 3, 4, 5];<br>
      let res = array.every(item => typeof item === 'number');<br><br>
      //exibição<br>
      result: res
    </div>
    <div class="result">
      ${res}
    </div>
  `;
  
  array.push('farofa');
  res = array.every(item => typeof item === 'number');
  everyFunc.innerHTML +=`
  <p>vamos adicionar mais um valor e chamar novamente a função:</p>
  <div class="script">
  array.push('farofa');<br>
  res = array.every(item => typeof item === 'number');<br><br>
  //exibição<br>
  result: res
  </div>
  <div class="result">
    ${res}
  </div>
`;
  
everyFunc.innerHTML +=`
    <button onclick="location.href='#header'">Voltar</button>
  `;
}

{
  let array = ['jaozin', 'diego', 'vitinho'];
  let res = array.some(item => typeof item === 'number');
  someFunc.innerHTML +=`
    <p>para experimentar essa função vamos usar o mesmo processo da função anterior</p>
    <div class="script">
      let array = ['jaozin', 'diego', 'vitinho'];<br>
      let res = array.some(item => typeof item === 'number');<br><br>
      //exibição<br>
      result: res
    </div>
    <div class="result">
    ${res}
    </div>
  `;
  array.push(1);
  res = array.some(item => typeof item === 'number');
  someFunc.innerHTML += `
    <div class="script">
      array.push(1);<br>
      res = array.some(item => typeof item === 'number');<br><br>
      //exibição<br>
      result: res
    </div>
    <div class="result">
    ${res}
    </div>
  `;

  someFunc.innerHTML +=`
    <button onclick="location.href='#header'">Voltar</button>
  `;
}

