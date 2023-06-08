const CRUD = require("../src/CRUD/crud");

test("CRUD.create method should add a new item in the mock repository", () => {
  //preparando
  const repository = [];
  const mock = new CRUD(repository);
  const item = "[new_item]";
  mock.create(item);
  
  //execução
  const test = mock.read()
  const result = ["[new_item]"]

  //esperado
  expect(test).toStrictEqual(result);
});

test("CRUD.delete method should remove the selected item from the mock repository", () => {
  //preparando
  const repository = ['12','34','56','78','910']
  const mock = new CRUD(repository)
  mock.delete(0)

  //execução
  const test = mock.read()
  const result = ['[deleted]','34','56','78','910']

  //esperado
  expect(test).toStrictEqual(result)
});

test("CRUD.update method should update the value from the selected item from the mock repository", () => {
  //preparando
  const repository = ['12','34','56','78','910']
  const mock = new CRUD(repository)
  mock.update(2, '565656')

  //execução
  const test = mock.read()
  const result = ['12','34','565656','78','910']

  //esperado
  expect(test).toStrictEqual(result)
});

test("CRUD.read method should return the mock repository", () => {
  //preparando
  const repository = ['12','34','56','78','910']
  const mock = new CRUD(repository)

  //execução
  const test = mock.read()

  //esperado
  expect(test).toStrictEqual(repository)
});