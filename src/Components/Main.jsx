import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Profile from "./Profile";
import Messageboard from './Messageboard'
import {
  login,
  like,
  newPost,

  getMessages,
  getMessageID,
  getUser
} from "../Redux/Actions";
import NavBar from "./NavBar";
import {
  Container,
  Sticky,
  Grid,
  Card
} from "semantic-ui-react";

export class Main extends Component {

  render() {
    return (

      <Container fluid>
        <div className="App">

          <CustomHeader />

          <Sticky>
            <NavBar postMessage={this.props.newPost} token={this.props.profile.token} reloadMessages={this.props.getMessages} location={this.props.location} />
          </Sticky>
          <Container>
            <Grid centered>
              <Grid.Row columns={3}>
                <Grid.Column width={4}>
                  <Sticky offset={75}>
                    <Card centered>
                      <Profile name={this.props.profile.username} about={this.props.profile.about} />
                    </Card>
                  </Sticky>
                </Grid.Column>

                <Grid.Column width={8}>
                  <Container className="register">


                    <Messageboard></Messageboard>



                  </Container>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Sticky offset={75}>
                    <CustomFooter />
                  </Sticky>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </Container >
    );
  }
}

const mapStateToProps = state => {

  return { messages: state.messages, profile: state.profile };
};

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    },
    newPost: (text, token) => {
      dispatch(newPost(text, token));
    },
    like: () => {
      dispatch(like());
    },

    getMessages: () => {
      dispatch(getMessages());
    },
    getMessageID: () => {
      dispatch(getMessageID());
    },
    getUser: () => {
      dispatch(getUser());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
export default Connect;
