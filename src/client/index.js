import React from 'react';
import { render } from 'react-dom';
import Roasters from './views/Roasters';
import { fetchRoasters } from './views/RoastersApi';

render(<Roasters fetchRoasters={fetchRoasters} />, document.getElementById('container'));
