const databaseGerente = [];
const databaseFuncionario = [];

let idCounter = 0;

class Employee {
  name;
  birthdate;
  salary;
  id;
  constructor(name, birthdate, salary, id) {
    this.name = name;
    this.birthdate = birthdate;
    this.salary = salary;
    this.id = id;
  }

  calcAge() {
    const yearNow = new Date().getFullYear();
    const date = this.birthdate;
    const yearEmployee = Number(date.slice(6));
    return yearNow - yearEmployee;
  }
}

class Manager extends Employee {
  service;
  constructor(name, birthdate, salary, id, service) {
    super(name, birthdate, salary, id);
    this.service = service;
  }
}

class Developer extends Employee {
  language;
  constructor(name, birthdate, salary, id, language) {
    super(name, birthdate, salary, id);
    this.language = language;
  }
}

const maria = new Manager("Maria", "20-05-1997", 8000, "Vendas");
const joao = new Developer("João", "20-05-1995", 5000, "JavaScript");

// console.log(maria.name);
// console.log(maria.calcAge());
// console.log(joao.calcAge());

class ManagerRepository {
  managerRepository = [];

  create(data) {
    idCounter++;
    const { name, birthdate, salary, service } = data;
    const manager = new Manager(name, birthdate, salary, idCounter, service);
    this.managerRepository.push(manager);
    console.log(`The manager ${data.name} was successfully created!`);
    return manager;
  }

  search(id) {
    return this.managerRepository.findAll((item) => item.id === id);
  }

  findAll() {
    return this.managerRepository;
  }

  delete(id) {
    const index = this.managerRepository.findIndex(
      (manager) => manager.id === id
    );
    this.managerRepository.splice(index, 1);
    return console.log("The manager was successfully deleted!");
  }

  edit(id, name, birthdate, salary, service) {
    const manager = this.findAll(id);
    Object.assign(manager, {
      name,
      birthdate,
      salary,
      service,
      id,
      updateAt: new Date(),
    });
    return this.managerRepository;
  }
}

const manager1 = {
  name: "Yasmin",
  birthdate: "1999-03-15",
  salary: 4050,
  service: "Food Section",
};
const manager2 = {
  name: "Paulo",
  birthdate: "1999-03-15",
  salary: 4000,
  service: "Food Section",
};
const manager3 = {
  name: "Matheus",
  birthdate: "1999-03-15",
  salary: 4000,
  service: "Food Section",
};

const managerRepository = new ManagerRepository();
managerRepository.create(manager1);
managerRepository.create(manager2);
managerRepository.create(manager3);


console.log(managerRepository.delete(1))
console.log(managerRepository.edit(1, 'Jéssica',"1999-03-16", 8000, 'Alegory Section'));

console.log(managerRepository.findAll());
