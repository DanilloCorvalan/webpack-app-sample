module.exports = exports = {
  render: function () {
    var el = document.createElement('h1');
    var newContent = document.createTextNode("Hi there and greetings!");

    el.appendChild(newContent);
    return el;
  }
};
