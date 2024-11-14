console.log("hello");
const parent = document.getElementById("root");
    const root = ReactDOM.createRoot(parent);
    // const h2 = React.createElement("h2",{style:{color:'red'}},"welcome to react js");
    // root.render(h2);
    // const li1 =React.createElement("li",{},"orange");
    // const li2 =React.createElement("li",{style:{color:'red'}},"apple");
    // const li3 =React.createElement("li",{},"banana");
    // const li4 =React.createElement("li",{},"guava");
    // const ul = React.createElement("ul",{style:{backgroundColor:'cyan'}},[li1,li2,li3,li4]);

    //JSX
    const h1 = React.createElement("h1",{},"By React Create Element");
    const h11 = <h1>Creating h1 using JSX</h1>;  //JSX code
    const li1 = <li>Orange</li>;
    const li2 = <li>Apple</li>;
    const li3 = <li>Banana</li>;
    const li4 = <li>Guava</li>;
    const ul = <ul>{li1}{li2}{li3}{li4}</ul>;
    const mystyle = {
        backgroundColor : 'aqua',
        color : 'red',
        border : '3px dotted black',
        borderRadius : '20%',
        padding : '35px',
        margin: '20px',
        fontSize: '30px'
    };
    const container=(
        <div style={mystyle}>
            <div>Welcome to Application development</div>
            <div>{ul}</div>
            <div>{h11}</div>
        </div>

    );
    root.render(container);