const React = require('react');
const ReactDom = require('react-dom');
const App = requrire('./App');

module.export = ReactDom.createPortal(document.getElementById('aplikasiku')).children(() => {
  return <App />;
});
