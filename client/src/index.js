import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './store/utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import Hue from '@material-ui/core/colors/HUE'
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';

const primaryGrey = blueGrey[500];
const secondaryCyan = cyan[400]

const theme = createMuiTheme ({
  palette: {
      primary: 
        {main: blueGrey[500]},
      secondary: 
        {main: cyan[400]}
  }
})

// check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  // decode the token and get user info
  const decoded = jwtDecode(localStorage.jwtToken);

  // set current user w/ decoded token and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for an expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // force the user log out
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}


ReactDOM.render(

  <Provider store={store}>

    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>

  </Provider>, document.getElementById("root"));

registerServiceWorker();
