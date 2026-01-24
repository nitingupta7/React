//react is also a single threaded language

//reactroot ke pass itna power hai ki kisi rendering process ko beech mai rok sakti hai

const element1 = React.createElement("h1", {id:"first" ,className:"Rahul",style:{backgroundColor:"blue",fontsize:"30px",color:"Red"}}, "Hello Coder Army");
const element2 = React.createElement("h1", {id:"first" ,className:"Rahul",style:{backgroundColor:"blue",fontsize:"30px",color:"Red"}}, "Ram Ram");


const div1=React.createElement('div',{},[element1,element2]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// reactRoot.render(element1);
// reactRoot.render(element2);
reactRoot.render(div1);
