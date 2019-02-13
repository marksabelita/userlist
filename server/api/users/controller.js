const autoBind = require('auto-bind');
const UserModel = require('./model');

class User{
  constructor(){
    autoBind(this);
  }

  async get(req, res){
    try {
      const result = await UserModel.getUsers({});
      res.send({ success: true, result });      
    } catch (error) {
      res.status(500);
      res.send({ message : error.message })  ;    
    }
  }
  async getById(req, res){
    try {
      const result = await UserModel.getUserById(req.params.id);
      res.send({ success: true, result });
    } catch (error) {
      res.status(500);
      res.send({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const result = await UserModel.updateUser(req.params.id, req.body);
      res.send({ success: true, result });
    } catch (error) {
      res.status(500);
      res.send({ message: error.message })
    }
  }

  async create(req, res) {
    try {
      const result = await UserModel.createNewUser(req.body);
      res.send({ success: true, result });
    } catch (error) {
      res.status(500);
      res.send({ message: error.message });
    }
  }
  
  async delete(req, res) {
    try {
      const result = await UserModel.deleteUser(req.params.id);
      res.send({ success: true, result });
    } catch (error) {
      res.status(500);
      res.send({ message: error.message }); 
    }
  }
}

module.exports = new User();