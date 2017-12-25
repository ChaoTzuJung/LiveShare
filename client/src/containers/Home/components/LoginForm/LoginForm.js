import React, { Component } from 'react';
import { graphql } from 'react-apollo';
// import { hashHistory } from 'react-router-dom';

import AuthForm from '../AuthForm';
import LoginMutation from '../../../../mutations/Login'
import query from '../../../../queries/CurrentUser'

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps){
    if(!this.props.data.current_user && nextProps.data.current_user) {
      this.props.history.push('/')
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => { 
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
     });
  }
  
  render() {
    return (
      <div>
        <h3 className="mt-64">Login</h3>
        <AuthForm 
          errors={ this.state.errors }
          onSubmit={ this.onSubmit.bind(this)} />
        <div className="row">
          Login with <a href="/auth/google">Google</a> or{' '}
          <a href="/auth/facebook">Facebook</a>
        </div>
      </div>
    );
  }
}

export default graphql(query)(
  graphql(LoginMutation)(LoginForm)
)