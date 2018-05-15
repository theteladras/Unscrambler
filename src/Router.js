import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Unscrumbler from './Screens/Unscrumbler';
import Start from './Screens/Start';


class RouterComponent extends Component {
  render() {
    return (
      <Router sceneStyle={{  backgroundColor: 'rgba(180,40,180,0.8)' }}>
        <Scene>
          <Scene key="landpage">
            <Scene key="star" component={Start} hideNavBar={true} />
          </Scene>
          <Scene key="game">
            <Scene key="unscr" component={Unscrumbler} hideNavBar={true} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
