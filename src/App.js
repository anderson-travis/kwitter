import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login, register, like, newPost, deleteMessage, getMessages, getMessageID, getLogout, getUser } from './Redux/Actions'
import Message from './Components/Message'
import { Register, Auth, Login } from './Components/Login.jsx'
import NavBar from "./Components/NavBar";


import { Container, Header } from "semantic-ui-react";

// make skeleton leave header here, add footer, sections for each component
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>This is from APP</div>
        <Container>
          <Header></Header>
          <NavBar></NavBar>
          <Message getMessages={this.props.getMessages} getMessageID={this.props.getMessageID} user={this.props.getUser}></Message>
          <Register></Register>
          <Auth></Auth>
          <Login></Login>
        </Container>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

function mapDispatchToProps(dispatch) {
  return {
    login: () => {
      dispatch(login());
    },
    register: () => {
      dispatch(register());
    },
    newPost: () => {
      dispatch(newPost());
    },
    like: () => {
      dispatch(like());
    },
    deleteMessage: () => {
      dispatch(deleteMessage());
    },
    getMessages: () => {
      dispatch(getMessages());
    },
    getMessageID: () => {
      dispatch(getMessageID());
    },
    getLogout: () => {
      dispatch(getLogout());
    },
    getUser: () => {
      dispatch(getUser());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default Connect;
