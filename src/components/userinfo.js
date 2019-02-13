import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUser, updateUser } from '../actions/users';
import UserForm from './forms/user-form';

class UsersInfo extends Component {

  constructor(props) {
    super(props);
    this.state = { first_name: "", last_name: "", contact_number: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTask = this.onChangeTask.bind(this);
  }

  render() {
    return (
      <div > 
        <UserForm onChangeTask={this.onChangeTask} onSubmit ={this.onSubmit} field={ this.state } action="Update" />
      </div>
    )
  }

  onChangeTask(value, field){
    this.setState({ [field] : value });
  }

  componentWillReceiveProps(nextPropsFromRedux) {
    const { user } = nextPropsFromRedux.users;
    this.setState({ 
      "first_name": user.first_name, 
      "last_name" : user.last_name, 
      "contact_number": user.contact_number,
      "_id": user._id
    });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const { getUser } = this.props;

    getUser(id);
  }

  onSubmit(e) {
    e.preventDefault();
    const { updateUser } = this.props;

    updateUser({ 
      "first_name": this.state.first_name, 
      "last_name" : this.state.last_name, 
      "contact_number": this.state.contact_number,
      "_id": this.state._id
    });
  }

}

const mapStateToProp = (state) => {
  return {
    users: state.users
  }
};


UsersInfo.propTypes = {
  user: PropTypes.object,
  getUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired
};

export default connect(mapStateToProp, { getUser, updateUser })(UsersInfo);