// Nullish coalescing Operator;
const nullOp = document.querySelector(".null-operator");
const tab= "__";
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

//Objetos

const Obj = document.querySelector(".objects")

const user ={
  name:'Diego',
  idade: 27,
  address: {
    street: "rua teste", 
    Number: 176,
  },
};


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
    `+"'name' in user"+`<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    ${'name' in user}
  </div>
`;
Obj.innerHTML +=`
  <div class="script">
    `+"'nickname' in user"+`<br>
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
    `+"Object.keys(user)"+`<br>
  </div>
  <p>Resultado:</p>
  <div class="result">
    ${Object.keys(user)}
  </div>
`;





