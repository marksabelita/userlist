import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUsers, deleteUser, updateUser, createUser } from '../actions/users';
import UserList from './container/user-list';
import UserForm from './forms/user-form';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = { first_name: "", last_name: "", contact_number: "" };
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickupdateUser = this.onClickupdateUser.bind(this);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickRedirect = this.onClickRedirect.bind(this);
  }
  
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  onClickRedirect(params){
    this.props.history.push(`/user/${params}`);
  }

  onSubmit(e){
    e.preventDefault();
    const { createUser } = this.props;

    if (this.state.first_name != ""){
      createUser({ 
        "first_name": this.state.first_name, 
        "last_name" : this.state.last_name, 
        "contact_number": this.state.contact_number
      });

      this.setState({
        first_name: '',
        last_name: '',
        contact_number: ''
      });
    }
  }

  onChangeTask(value, field){
    this.setState({ [field] : value });
  }

  onClickupdateUser(data){
    const { updateUser } = this.props;
    updateUser(data);
  }

  onClickDelete(id){
    const { deleteUser } = this.props;
    deleteUser(id);
  }
  
  render() {
    const { users } = this.props;

    return (
      <div className="">
        <div className="col-sm-12">
          
        </div>
        <UserForm onChangeTask={this.onChangeTask} onSubmit ={this.onSubmit} field={ this.state } action="Create" />

        <div className="col-sm-12">
          <div className="col-sm-12">
          <h3> User list: </h3>
            <ul className="list-group">
              <UserList users={users} onClickDelete={this.onClickDelete} onClickRedirect={this.onClickRedirect} onClickupdateUser={this.onClickupdateUser} />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    users: state.users
  }
};

Users.propTypes = {
  users: PropTypes.object,
  getUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  onClickRedirect: PropTypes.func.isRequired
};

export default connect(mapStateToProp, { getUsers, deleteUser, updateUser, createUser })(Users);