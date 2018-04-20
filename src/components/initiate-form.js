import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, characterType} from '../validators/submit-form-validator';
import Input from './input';
import {initiateTransaction} from '../actions/actions';
import requiresLogin from './requires-login';
import {withRouter} from 'react-router-dom';

export class InitiateForm extends React.Component {
  onSubmit(value) {
    this.props.dispatch(initiateTransaction(value)).then(results => {
      if(results === '2'){
        this.props.history.push('/it')
      }
      return results
    })
  }
  render() {
    
    return (
      <section className='initiate-form'>
      <div className='title'>Create IOU</div>
      <div id='initiate-form'>
      <form autoComplete="off" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
          <Field component={Input} type="text" element="input" name="transactionAmount" value="" id="transactionAmount" label="IOU Amount" validate={[required, notEmpty, characterType]}></Field>
        <div className='button-holder'>
        <button className="form-submit" type="submit">Submit</button>
        </div> 
      </form>
      </div>
      <div className='direction'>
        <p className='attention-stmt'>Input your IOU amount.</p>
        <p>Once you submit, you'll be provided with a unique url that you can provide to any recipient!</p>
      </div>
      </section>
    );
  }
}  

const SmartRouter = requiresLogin()(withRouter(reduxForm({form: 'submit'})(InitiateForm)));

export default SmartRouter