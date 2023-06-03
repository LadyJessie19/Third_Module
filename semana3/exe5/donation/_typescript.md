# Typescript 

## Começar o projeto node:
1 - npm init -y
_package.json_

## Instalar as libs:
2 - npm i mongodb express

## Instalar as tipagens:
3 - npm i typescript @types/express @types/node -D
_deprecated -> mongodb provides its own types. @types/mongodb is no longer needed._

## Instalar o compilador automático:
4 - npm i ts-node-dev

## Criar arq configuração do ts:
5 - npx tsc --init
_tsconfig.json_

## Add ao package.json:

6 - "start": "tsnd src/app.ts"
