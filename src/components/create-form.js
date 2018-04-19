import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, correctCharLength, characterType} from '../validators/submit-form-validator';
import Input from './input';
import {Link} from 'react-router-dom';
import {createTransaction} from '../actions/actions';
import {withRouter} from 'react-router-dom';

export class CreateForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(createTransaction(values)).then(results => {
      if(results === '2'){
        this.props.history.push('/ct')
      }
      return results
    })
  }
  render() {
    
    return (
      <section className='create-form'>
      <div className='title'>Create IOU</div>
      <div id='create-form'>
      <form autoComplete="off" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field component={Input} type="text" element="input" name="userIdInitiator" value="" id="userIdInitiator" validate={[required, notEmpty,correctCharLength]} label="Zhip ID"/>
          <Field component={Input} type="text" element="input" name="transactionAmount" value="" id="transactionAmount" label="IOU Amount" validate={[required, notEmpty, characterType]}></Field>
        <div className='button-holder'>
        <button className="form-submit" type="submit">Submit</button>
        </div> 
      </form>
      </div>
      <div className='redirect'>
            Need a Zhip ID? <Link to="/register">Register</Link>
        </div>
      <div className='direction'>
        <p className='attention-stmt'>Input your Zhip ID and IOU amount.</p>
        <p>Once you submit, you'll be provided with a unique url that you can provide to any recipient!</p>
      </div>
      </section>
    );
  }
}  

const SmartRouter = withRouter(reduxForm({form: 'submit'})(CreateForm));

export default SmartRouter