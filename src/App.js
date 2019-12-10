import React, { Component } from 'react';
import './App.css';

import Form from './componentes/Form';
import Table from './componentes/Table';


class App extends Component {

  constructor(props){
    
    super(props)

    this.state={
      formState: {
         id: '',
         firstName: "",
         lastName: "",
         email: "",
         mode: "submit"
      },
      users: [
         {
            id: 0,
            firstName: "moises",
            lastName: "ledesma",
            email: "moises@hotmail.com",
            updating: false
         }
      ]
    }
  }

  resetFormState = () => {
    this.setState({
       formState: {
          firstName: "",
          lastName: "",
          email: "",
          mode: "submit",
          id: ""
       }
    });
  };

  onChange = event => {
    this.setState({
       formState: {
          ...this.state.formState,
          [event.target.name]: event.target.value
       }
    });
  }

  onSubmit = event => {
    const { users, formState } = this.state;
    event.preventDefault();
    const firstName = event.target.querySelector("input[name='firstName']")
       .value;
    const lastName = event.target.querySelector("input[name='lastName']")
       .value;
    const email = event.target.querySelector("input[name='email']").value;
    if (formState.mode === "submit") {
       this.setState({
          users: [
             ...this.state.users,
             {
                firstName,
                lastName,
                email,
                updating: false,
                id: this.state.users[this.state.users.length - 1].id + 1
             }
          ]
       });
    } else if (formState.mode === "edit") {
       const index = users.find((user)=> user.id === formState.id).id;
       users[index] = {
                firstName,
                lastName,
                email,
                updating: false,
                id: users[index].id
             }
       this.setState({
          users: [...users]
       });
    }

    this.resetFormState();
  }

  updateUser = key => {
    let { users } = this.state;
    users[key].updating = true;

    this.setState({
       formState: { ...this.state.users[key], mode: "edit" },
       users
    });
  }

  deleteUser = key => {
    let { users } = this.state;
    users.splice(key, 1);
    this.setState({
       users: [...users]
    });
  }


  render() {
    return (
      <div>
        <Form
          formState={this.state.formState}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />


        <Table
          users={this.state.users}
          updateUser={this.updateUser}
          deleteUser={this.deleteUser}
        />

      </div>
    );
  }

}

export default App;