import React from 'react';
import { render } from 'react-dom';
import Roasters from './react-testing-lib/views/Roasters';
import { fetchRoasters } from './react-testing-lib/views/RoastersApi';

render(<Roasters fetchRoasters={fetchRoasters} />, document.getElementById('container'));
