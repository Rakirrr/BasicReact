
const parent = React.createElement("div",{id:"parent"}, React.createElement("div", {id:"child"},[React.createElement("h1",
    {},"This is h1 Tag"
), React.createElement("p",{},"Im learning React")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);