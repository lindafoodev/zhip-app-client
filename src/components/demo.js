import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/auth';

export class Demo extends React.Component {
    onSubmit(obj){
      console.log('what happend', obj);
      return this.props.dispatch(login(obj.username, obj.password));
    }

    render(){
        return (
              <button type="submit" className='link logout-button' onClick={() => this.onSubmit({username:'hello', password:'world12345'})}>Demo</button>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Demo);
