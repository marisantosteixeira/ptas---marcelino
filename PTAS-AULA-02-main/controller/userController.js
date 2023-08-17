const User = require('../model/user');
const secret = require('../config/auth.json');
const jwt = require('jsonwebtoken');
const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    await User.create({
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
}

const selectUsers = async (req,res) => {
    try{
        const users = await User.findAll();
        return res.json(users);

    } catch (error) {
        console.log(`Erro ao buscar usuarios: $(error)`);
        return null;
    }
}

const deleteUser = async (req, res) => {
  const id = req.params;
  await User.destroy({
      where:{
          id:id
      }
  })
}

const findUsers = async (req,res) => {
    const users = await User.findAll();
    try{
        res.json(users);
    } catch (error) {
    res.status(404).json("ocorreu um erro");
    };
}

const authenticateUser = async (req,res) => {
    const {email, password} = req.body;
    try{
      const isUserAthenticated = await User.findOne({
        where: {
          email: email,
          password: password
        }
      })
      return res.json(isUserAthenticated);
    } catch(error){
        return res.json("usuario nao encontrado");
      }
    }
    
      const token = jwt.sign({id: email}, secret.secret,{
        expressIn: 86400,
      })
      return res.json({
    name: isUserAthenticated.name,
    email: isUserAthenticated.email,
    token: token
      });
    
    

module.exports = { createUser, findUsers, authenticateUser };