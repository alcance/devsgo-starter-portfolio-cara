import React from "react";
import { navigate } from "gatsby";
import Form from "./Form";
import { handleAuthentication, isAuthenticated } from "../utils/auth";

class Login extends React.Component {
  state = {
    username: ``,
    password: ``
  };

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    handleAuthentication(this.state);
  }

  render() {
    if (isAuthenticated()) {
      navigate(`/app/profile`);
    }

    return (
      <main>
        <h1>test</h1>
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
      </main>
    );
  }
}

export default Login;
