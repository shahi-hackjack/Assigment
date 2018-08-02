import React, { Component } from 'react';
import Header from './components/Header';
import ProfileContainer from './components/ProfileContainer';
import RepositoryContainer from './components/RepositoryContainer';

import './static/style/App.css';

class App extends Component {
  render() {
        return (   <div className ="App">
                            <Header/>
                            <ProfileContainer/>
                            <RepositoryContainer/>
                       </div>
                    );
                }
}

export default App;
