import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, notEmpty} from '../validators/submit-form-validator';
import {Link} from 'react-router-dom';

import '../css/login-form.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <section className='login-form'>
                <div className='title'>Log in</div>
                    <div id='login-form'>
                        <form
                            autoComplete="off"
                            className="login-form"
                            onSubmit={this.props.handleSubmit(values =>
                                this.onSubmit(values)
                            )}>
                            {error}
                            <label htmlFor="username">Username</label>
                            <Field
                                component={Input}
                                element="input"
                                type="text"
                                name="username"
                                id="username"
                                validate={[required, notEmpty]}
                            />
                            <label htmlFor="password">Password</label>
                            <Field
                                component={Input}
                                element="input"
                                type="password"
                                name="password"
                                id="password"
                                validate={[required, notEmpty]}
                            />
                            <div className='button-holder'>
                                <button className="form-submit" type="submit" disabled={this.props.pristine || this.props.submitting}>
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='redirect'>
                        New User? <Link to="/register">Register</Link>
                    </div>
                    <div className='direction'>
                        <p className='attention-stmt'>Welcome Back to Zhip!</p>
                        <p>Log in to view your IOU Balance and Activity!</p>
                    </div>
            </section>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
