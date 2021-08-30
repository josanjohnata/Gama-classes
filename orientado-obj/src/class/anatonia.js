class Person {
  constructor(name, occupation, age) {
    name,
    occupation,
    age
  }

  hello(name, occupation, age) {
    if ( occupation === 'dev' ) {
      return `Fala ${occupation} seu nome é ${name} e você tem ${age} anos.`;
    } else {
      return `Fala ${name} e você tem ${age} anos e sua profissão é ${occupation}.`;
    }
  }
}

function NewPerson(name) {
  this.name = name;
}

const SegundaPessoa = new NewPerson('Ester');

const Pessoa = new Person;

// module.exports = Pessoa;

module.exports = SegundaPessoa;