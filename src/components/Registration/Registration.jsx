import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Registration.css';
import './Registration768.css';
import './Registration320.css';

// import { signInWithEmailAndPassword } from '../../server';
import Grid from '@material-ui/core/Grid';
import loginInputActions from '../../redux/actions/RegistrationInputActions';

const inputValidationRegEx = {
  email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
  password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
};

const isEmailValid = email => inputValidationRegEx.email.test(email);

const isPasswordValid = (password, confirmPassword) =>
  password.length !== 0 && password === confirmPassword;

const isNameValid = name => name.length !== 0;

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handlerOnSubmit = e => {
    e.preventDefault();
    const { logedIn } = this.props;
    const { name, email, password } = this.state;

    fetch('http://192.168.90.200:8000/api/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name,
      }),
      headers: { 'content-type': 'application/json' },
    })
      .then(response => {
        response.json().then(data => {
          console.log(data);
        });
      })
      .catch(err => {
        console.log(err);
      });
    logedIn();
    // console.log(logedIn);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { email, password, confirmPassword, name } = this.state;
    return (
      <div className="Registration">
        <Grid container>
          <Grid className="Registration-column" item lg={4} sm={4} xs={12}>
            <Grid container direction="column">
              <Grid item>
                <h1 className="h1 text-center">Sculptor</h1>
              </Grid>
              <Grid item>
                <form
                  onSubmit={e => this.handlerOnSubmit(e)}
                  className="form flex-column center-box shadow padding-all-25"
                  method="post"
                >
                  <input
                    onChange={this.handleChange('email')}
                    value={email}
                    className={
                      email.length > 0
                        ? `form-input ${
                            isEmailValid(email)
                              ? 'input__valid'
                              : 'input__invalid'
                          }`
                        : 'form-input'
                    }
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                  />

                  <input
                    onChange={this.handleChange('password')}
                    value={password}
                    className={
                      password.length > 0
                        ? `form-input ${
                            isPasswordValid(password, confirmPassword)
                              ? 'input__valid'
                              : 'input__invalid'
                          }`
                        : 'form-input'
                    }
                    type="password"
                    name="password"
                    placeholder="Password *"
                    required
                  />

                  <input
                    onChange={this.handleChange('confirmPassword')}
                    value={confirmPassword}
                    className={
                      confirmPassword.length > 0
                        ? `form-input ${
                            isPasswordValid(password, confirmPassword)
                              ? 'input__valid'
                              : 'input__invalid'
                          }`
                        : 'form-input'
                    }
                    type="password"
                    name="confirmPassword"
                    placeholder="Password Confirmation*"
                    required
                  />

                  <input
                    onChange={this.handleChange('name')}
                    value={name}
                    className={
                      name.length > 3
                        ? 'input__valid form-input'
                        : 'input__invalid form-input'
                    }
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                  />

                  <button
                    disabled={
                      !isEmailValid(email) &&
                      !isPasswordValid(password, confirmPassword) &&
                      !isNameValid(name)
                    }
                    className="btn"
                    type="submit"
                    label="Register"
                  >
                    Register
                  </button>
                  <p className="text-center">
                    <NavLink to="/login" className="link">
                      Login
                    </NavLink>
                  </p>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputs: state.inputs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logedIn: uid => dispatch(loginInputActions.logedIn(uid)),
  };
}

Registration.propTypes = {
  logedIn: PropTypes.func,
};

Registration.defaultProps = {
  logedIn: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
