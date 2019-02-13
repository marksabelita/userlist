import React from 'react';
import PropTypes from 'prop-types';


const UserForm = (props) => {
  const { onSubmit, onChangeTask, field, action } = props;
  return (
    <form className="form-inline new-task" onSubmit={ onSubmit }>
      <div className="col-sm-6">
        <div className="form-group col-sm-12">
          <h3> {action} user: </h3>
          <input onChange={() => onChangeTask(event.target.value, 'first_name')} value={field.first_name} type="text" className="form-control" id="inputPassword2" placeholder="Firstname" />
          <input onChange={() => onChangeTask(event.target.value, 'last_name')} value={field.last_name} type="text" className="form-control" id="inputPassword2" placeholder="Lastname" />
          <input onChange={() => onChangeTask(event.target.value, 'contact_number')} value={field.contact_number} type="text" className="form-control" id="inputPassword2" placeholder="Contact Number" />
        </div>
        <div className="col-sm-12">
          <button type="submit" className="btn btn-primary">{action}</button>
        </div>
      </div>
      <div className="col-sm-6">
      </div>
    </form>
  );
};


UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeTask: PropTypes.func.isRequired,
  field: PropTypes.object,
  action: PropTypes.string.isRequired
};

export default UserForm;