import React from 'react';
import PropTypes from 'prop-types';

const UserList = (props) => {
  const { users, onClickDelete, onClickRedirect } = props;

  if (users) {
    return users.list.map(user => {
      return (
        <li className="list-group-item" key={user._id} >
          <span className="float-left" onClick={ () => onClickRedirect(user._id) }> {user.first_name} {user.last_name} </span>
          <span onClick={() => onClickDelete(user._id)} className="float-right"> <i className="far fa-trash-alt"></i> </span>
        </li>
      )
    })
  }
};


UserList.propTypes = {
  users: PropTypes.object,
  onClickDelete: PropTypes.func.isRequired,
  onClickRedirect: PropTypes.func.isRequired
};

export default UserList;