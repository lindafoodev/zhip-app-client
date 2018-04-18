import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {Link} from 'react-router-dom';
import Input from './input';
import {required, notEmpty, matches, length, isTrimmed} from '../validators/submit-form-validator';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password} = values;
        const user = {username, password};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <section className='registration-form'>
                <div className='title'>Register</div>
                    <div id='registration-form'>
                    <form
                        autoComplete="off"
                        className="login-form"
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                        )}>
                        <label htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            element="input"
                            type="text"
                            name="username"
                            validate={[required, notEmpty, isTrimmed]}
                        />
                        <label htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            element="input"
                            type="password"
                            name="password"
                            validate={[required, passwordLength, isTrimmed]}
                        />
                        <label htmlFor="passwordConfirm">Confirm password</label>
                        <Field
                            component={Input}
                            element="input"
                            type="password"
                            name="passwordConfirm"
                            validate={[required, notEmpty, matchesPassword]}
                        />
                        <div className='button-holder'>
                            <button className="form-submit"
                                type="submit"
                                disabled={this.props.pristine || this.props.submitting}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className='redirect'>
                        Already Registerd? <Link to="/login">Login</Link>
                </div>
                <div className='direction'>
                        <p className='attention-stmt'>Join Zhip!</p>
                        <p>Register to start sending and receiving IOUs!</p>
                    </div>
            </section>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
