import dotenv from 'dotenv'
dotenv.config()
/* To use the dotenv ---> create a .env file(in the root folder) and add your variables */
/* Example: TEST=It works, darling! */

console.log('=====')
console.log('Viu?!')
console.log(process.env.TEST)
console.log('=====')
