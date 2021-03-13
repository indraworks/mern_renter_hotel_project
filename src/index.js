import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'bootstrap/dist/js/bootstrap.min.js';
/* index css dibawah bootstrap supaya perubahan di css timpa default boottsarp style 
jadi ada efeknya jika mau di ubah
*/
import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

/*
jika boottrap bermasalah maka install :
jika baermsalah maka install npm install popper.js --save

*/
