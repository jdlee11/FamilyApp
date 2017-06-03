import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import session from './models/session';
import settings from './settings';
import { HashRouter, Route, IndexRedirect } from 'react-router-dom';
import MainBody from './components/mainBody';
import Signup from './components/signup';

// $(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
//   if (jqueryAjax.url === `https://baas.kinvey.com/user/${settings.appId}/`){
//     xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
//   } else if (localStorage.getItem('authtoken')) {
//     xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
//   } else if (session.get('authtoken')) {
//     xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + session.get('authtoken'));
//   } else {
//     xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
//   }
// });




let router = (
  <HashRouter>
    <div>
      <Route path="/" component={MainBody} />
      <Route path="/signup" component={Signup} />
    </div>
  </HashRouter>
);

ReactDOM.render(router,
  document.getElementById('container'));
