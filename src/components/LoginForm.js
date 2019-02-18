
import React, { Component} from 'react';
import PropTypes from 'proptypes'

export default class LoginForm extends Component {
  
  static propTypes = {
      onFieldsChange: PropTypes.func,
      handleSubmit: PropTypes.func,
      buttonAction: PropTypes.func
  }

  render() {
    const { 
        onFieldsChange,
        handleSubmit, 
        buttonAction } = this.props

    return (
        <form onSubmit={handleSubmit}>
            <div className="loginForm">
                <div className="form-field">
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username"
                        min="0" 
                        onChange={onFieldsChange}
                        required />
                </div>
                <button type='submit'>{ buttonAction }</button>
            </div>
        </form>
    )
  }
}
