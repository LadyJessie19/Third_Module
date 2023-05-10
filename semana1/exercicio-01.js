const repository = [];

// Crie uma funçao que adiciona um carro(Object) ao repository e retorna o objeto salvado
// Parametros: modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)

class Car {
  constructor(id, model, color, year, createdAt) {
    this.id = id;
    this.model = model;
    this.color = color;
    this.year = year;
    this.createdAt = createdAt;
  }
}
function createCar(model, color, year) {
    const now = new Date();
    const id = repository.length + 1;
    const car = new Car(id, model, color, year, now);
    repository.push(car);
    return car;
  }

createCar("Toyota Corolla", "Prata", 2020);
createCar("Honda Civic", "Preto", 2018);
createCar("Ford Mustang", "Vermelho", 2021);
createCar("Volkswagen Gol", "Branco", 2019);

// Crie uma funçao que recebe um id por parametro e retorna o objeto referente
// Parametros: id(string)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function findCarById(id) {
    return repository.find(car => car.id === id);
}

// Crie uma funçao que retorna todos os carros
// Parametros: id(string)
// Returno(Array): (id(string), modelo(string), cor(string), ano(number), createdAt(Date))[]
function findAllCars() {
  return repository;
}

// Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// Parametros: id(string), modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)

function updateCarById(id, model, color, year) {
    const car = findCarById(id);
    //Object.assign(car, { modelo, color, year, updateAt: new Date() })
    if (car) {
      car.model = model;
      car.color = color;
      car.year = year;
      car.createdAt = new Date();
      return car;
    } else {
      return null;
    }
  }

// Crie uma funçao que remove um carro do repositorio
// Parametros: id(string)

function deleteCarById(id) {
    const index = repository.findIndex(car => car.id === id);
    if (index !== -1) {
      const deletedCar = repository.splice(index, 1)[0];
      return deletedCar;
    } else {
      return null;
    }
  }

console.log(repository)