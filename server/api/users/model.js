const UserSchema = require('./schema');

class UserModel {
  getUsers() {
    return new Promise((resolve, reject) => {
      UserSchema.find({}, {}, { sort: { 'created_at': -1 } }, function (err, users) {
        (err) ? reject(err) : resolve(users);
      })
    })
  }

  getUserById(id) {
    return new Promise((resolve, reject) => {
      UserSchema.findById(id,  function (err, user) {
        (err) ? reject(err) : resolve(user);
      })
    });
  }

  updateUser(id, data) {
    return new Promise((resolve, reject) => {
      UserSchema.findByIdAndUpdate(id,  { $set: { first_name: data.first_name, last_name: data.last_name, contact_number: data.contact_number } }, function(err, result) {
        (err) ? reject(err) : resolve(result);
      });
    })
  }

  createNewUser(userData) {
    return new Promise((resolve, reject) => {
      const user = new UserSchema(
        userData
      );

      user.save(function (err, result) {
        (err) ? reject(err) : resolve(result);
      })
    })
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      UserSchema.findByIdAndRemove(id, function (err, result) {
        (err) ? reject(err) : resolve(result);
      })
    })
  }
}

module.exports = new UserModel();