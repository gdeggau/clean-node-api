// esse arquivo é igual ao jest.config, porém com a propriedade testMatch alterada
// nesse projeto, seguimos o conceito de os testes .spec serem teste unitários
// e os arquivos .test serem os testes de integração
// essa configuração é utilizada no package.json, no script test:unit
const config = require("./jest.config");
config.testMatch = ["**/*.spec.ts"];
module.exports = config;
