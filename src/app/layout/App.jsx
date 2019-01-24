import React, { Component } from 'react';
import { Button, Container, Divider } from 'semantic-ui-react';
import EventDashboard from '../../feature/event/Eventdashboard/EventDashboard';
import NavBar from '../../feature/nav/NavBar/NavBar';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className="main">
          <EventDashboard/>
        </Container>
      </div>
    );
  }
}

export default App;
