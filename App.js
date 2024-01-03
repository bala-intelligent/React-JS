const parent = React.createElement('div', { id: "parent" }, 
[React.createElement('div', { id: "child" }, 
[React.createElement("h1", { id: "heading-first" }, "I'am the First Heading"), 
React.createElement('h2', { id: "h2" }, "I'am the second Heading")]),

React.createElement('div', { id: "child2" }, 
[React.createElement("h1", { id: "heading-first2" }, "I'am the second child Heading"), 
React.createElement('h2', { id: "h2-2" }, "I'am the second child Heading")])
]);


//const heading = React.createElement('h1', { id: "heading" }, "Bala's ReactJS From Scratch");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);