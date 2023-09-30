import React, { Component } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterProvider router={routes}/>
      </div>
    );
  }
}

export default App;
