const repository:Array<IStudentCreated> = []
let counter:number;

type studentType = 'matriculado' | 'pendente'

interface IStudent {
    name:string;
    team:string;
    status: studentType;
    document:string;
}

interface IStudentCreated extends IStudent {
    code:number
    createdAt:Date
}

class Student{
    name:string
    team:string
    status:string
    document:string
    code:string
    createdAt:string
    constructor( name:string, team:string, status:string, document:string, code:string, createdAt:string){
        this.name = name
        this.team = team
        this.status = status
        this.document = document
        this.code = code
        this.createdAt = createdAt
    }
}
/* function makeStudent2(data:IStudent):IStudentCreated {
    counter++;
    const code = `student_${counter}`;
    const createdAt = new Date();
    const student = new Student(data, code, createdAt)
    return student
} */

function makeStudent(data:IStudent):IStudentCreated {
    counter++;
    const code = Number(counter);
    const createdAt = new Date();
    const student:IStudentCreated = {...data, code, createdAt}
    repository.push(student)
    console.log('The student was created successfully!')
    return student
}

const estudante:IStudent = {
    name: 'Jessica',
    team: 'LOTR121',
    status: 'pendente',
    document: '000.000.000-00'
}
const estudante2:IStudent = {
    name: 'Isabelle',
    team: 'GOT31',
    status: 'matriculado',
    document: '000.000.000-00'
}
const estudante3:IStudent = {
    name: 'Yllana',
    team: 'TWD44',
    status: 'pendente',
    document: '000.000.000-00'
}
const estudante4:IStudent = {
    name: 'Marcos',
    team: 'GOT31',
    status: 'matriculado',
    document: '000.000.000-00'
}

function createStudentRepository(data:IStudent):IStudentCreated {
    return makeStudent(data)
}

function findStudentByCodeRepository(code:number):IStudentCreated | undefined{
    const response = repository.find((item) => item.code === code)
    if(response) return response
    else return
}

function findStudentByClassRepository(team:string):IStudentCreated[] | undefined {
    const response = repository.filter((item) => item.team === team)
    if(response) return response
    else return
}

/* function updateStudentRepository(code:string, data:IStudentCreated){
} */

/* function deleteStudentByCode(code) {} */

createStudentRepository(estudante)
createStudentRepository(estudante2)
createStudentRepository(estudante3)
createStudentRepository(estudante4)
console.log(findStudentByClassRepository('GOT31'))
