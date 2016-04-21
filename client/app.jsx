import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link, routerShape } from 'react-router';
import AppRoot from './components/AppRoot';

render((<AppRoot />), document.getElementById('app'));