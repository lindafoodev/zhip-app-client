import React from 'react';
// import {reduxForm, Field} from 'redux-form';
// import {required, notEmpty, correctCharLength} from '../validators/submit-form-validator';
// import Input from './input';
import {connect} from 'react-redux';
import {fetchBalance} from '../actions/actions';
// import {withRouter} from 'react-router-dom';

export class BalanceForm extends React.Component {
   componentWillMount(){
      this.props.dispatch(fetchBalance());
    }
  
  render() {
    return (
      <section className='balance-form'>
        <div className='balance-details'>
          <p className='attention-stmt'>Current Balance</p>
          <div className='info-container'>
          <p>{this.props.accountBalance}</p>
          </div>
        </div>
      </section>
    );
  }
}  

const mapStateToProps = state => ({
  accountBalance: state.appReducer.accountBalance,
});

export default connect(mapStateToProps)(BalanceForm);



// import React from 'react';
// import {reduxForm, Field} from 'redux-form';
// import {required, notEmpty, correctCharLength} from '../validators/submit-form-validator';
// import Input from './input';
// import {fetchBalance} from '../actions/actions';
// import {withRouter} from 'react-router-dom';

// export class BalanceForm extends React.Component {
//    onSubmit(values) {
//     console.log('onsubmit working');
//     this.props.dispatch(fetchBalance(values));
//     this.props.history.push('/ab');
//     }
  
//   render() {
//     return (
//       <section className='balance-form'>
//       <div className='title'>Balance</div>
//       <div id='balance-form'>
//       <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
//           <Field component={Input} type="text" element="input" name="userId" value="" id="userId" validate={[required, notEmpty,correctCharLength]} label="Zhip ID"/>
//         <div className='button-holder'>
//         <button className="form-submit" type="submit">Submit</button>
//         </div> 
//       </form>
//       </div>
//       <div className='direction'>
//         <p className='attention-stmt'>Input your Zhip ID to obtain Account Balance.</p>
//       </div>
//       </section>
//     );
//   }
// }  

// const SmartRouter = withRouter(reduxForm({form: 'balance'})(BalanceForm));

// export default SmartRouter