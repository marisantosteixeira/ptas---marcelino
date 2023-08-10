const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( "postgres://ynfcjzwg:2TRvJKFJzbiBTXsamKp2_Eo8Tl0Gkdr2@silly.db.elephantsql.com/ynfcjzwg", {
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Anteção, a conexão falhou!:', error);
}




module.exports = { Sequelize, sequelize };