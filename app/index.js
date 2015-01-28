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


var Modernizr = require('../bower_components/modernizr/modernizr.js');

//from: http://cuttleblog.tumblr.com/post/63669845272/webpack
if (Modernizr.touch) {
  console.log("Loading touch libraries");

  require.ensure([/* AMD-style dependencies */], function(require){
    // require.ensure creates a bundle split-point
    var Hammer = require('hammerjs');

    // Hammer loaded via XHR - ready to initialize
    // Hammer(/* ... */);
  });

} else {
    console.log("No touch features detected - skipping unneeded libraries");
}
