var React = require("react");
var ReactDom = require("react-dom");
//Create a react app from scratch.
ReactDom.render(
  //ItReactDom.render(
  <div>
    <div>
      <h1>My Favourite Foods</h1>
    </div>
    <ul>
      <li>Rotti</li>
      <li>Idli Sambar</li>
      <li>Samosa</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
