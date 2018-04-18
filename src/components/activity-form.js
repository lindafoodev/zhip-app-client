import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, correctCharLength} from '../validators/submit-form-validator';
import Input from './input';
import {fetchTransactions} from '../actions/actions';
import {withRouter} from 'react-router-dom';

export class ActivityForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(fetchTransactions(values));
    this.props.history.push('/aa');
    }
  
  render() {
    return (
      <section className='activity-form'>
      <div className='title'>Activity</div>
      <div id='activity-form'>
      <form autoComplete="off" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field component={Input} type="text" element="input" name="userId" value="" id="userId" validate={[required, notEmpty,correctCharLength]} label="Zhip ID"/>
        <div className='button-holder'>
        <button className="form-submit" type="submit">Submit</button>
        </div> 
      </form>
      </div>
      <div className='direction'>
        <p className='attention-stmt'>Input your Zhip ID to obtain Account History.</p>
      </div>
      </section>
    );
  }
}  

const SmartRouter = withRouter(reduxForm({form: 'balance'})(ActivityForm));

export default SmartRouter