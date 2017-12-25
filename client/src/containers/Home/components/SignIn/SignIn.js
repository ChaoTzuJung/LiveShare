
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

class SignIn extends Component {

  render() {
    const styles = {
      marginTop: "100px"
    };
    return (
      <div className="row" style={styles}>
        <div className="row">
          Login with <a href="/auth/google">Google</a> or{' '}
          <a href="/auth/facebook">Facebook</a>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);