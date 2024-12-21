{/* <div id="parnt">
  <div id="child1">
    <h1> heading1</h1>
    <h1>heading2</h1>
  </div>
  <div id="child2">
    <h1> heading1</h1>
    <h1>heading2</h1>
  </div>
</div>; */}

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "cdud" },
  [React.createElement("div", { id: "child1" }, [
    React.createElement("h1","", "I am h1 tag"),
    React.createElement("h2","", "I am h2 tag"),
  ]),React.createElement("div", { id: "child1" }, [
    React.createElement("h1","", "I am h1 tag"),
    React.createElement("h2","", "I am h2 tag"),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
