var $ = require('jQuery');

require('../styles/index.less');

$('body').append('<h1>Hey There</h1>');

//react image
var img = document.createElement('img');
img.src = require('../images/react.png');

document.body.appendChild(img);


//webpack image
var img2 = document.createElement('img');
img2.src = require('../images/webpack.png');

document.body.appendChild(img2);

//requiring entry points
var page1 = require('./page1.js');
document.body.appendChild(page1.render());
