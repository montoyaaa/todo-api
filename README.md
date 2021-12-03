**Comandos para inicializar um novo projeto**:

YARN:

- [x] yarn init -y
- [x] yarn add express
- [x] yarn add -D typescript ts-node-dev @types/express @types/node
- [x] yarn tsc --init

NPM:

- [x] npm init -y
- [x] npm install express
- [x] npm install -D typescript ts-node-dev @types/express @types/node
- [x] npx tsc --init

**Após isso adicionar script no package.json**:

"scripts": {
"dev": "ts-node-dev --respawn --transpile-only src/index.ts"
}

**rodar: yarn dev || npm run dev**

# O que é

**express.json** → É um método que atua como um middleware responsável por fazer o Express reconhecer as requisições que chegam em formato objeto como um JSON.

**urlencoded** → É um método que atua como um middleware responsável por fazer o Express reconhecer as requisições strings ou arrays como tal
