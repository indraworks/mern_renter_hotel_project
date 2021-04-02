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
Though Popper. js is stated as required for Bootstrap 4, and Bootstrap 4 JS logs an error if it can't find Popper, you can still use Bootstrap 4 JS without Popper, 
if you don't need tooltips, popovers, dropdowns, nor modals.
*/

/*
utk css 
smua dibikin scss root ada di index.scss <--anak2/child import disni
child ada  directory styles/*.scss
smua underscore  _namafile.scss
smua file utma ada di styles/index.scss <-- child dimport disini
    namanya tertulis tetap sbgai filename.scss tidak perlu garis 
    bawah,garisbawah itu kasih tahu compiler agar di compile 
    jadi css saat diimport di file index.js


*/