import React from 'react';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
    return (
        <div className="App">
            <EventBind />
            {/*<FunctionClick />*/}
            {/*<ClassClick />*/}
            {/*<Counter />*/}
            {/*<Message />*/}
            {/*<Greet name={"Bruce"} heroName={"Batman"}>*/}
            {/*    <p>This is children props</p>*/}
            {/*</Greet>*/}
            {/*<Greet name={"Clark"} heroName={"SuperMan"}>*/}
            {/*    <button>Action</button>*/}
            {/*</Greet>*/}

            {/*<Greet name={"Diana"} heroName={"Wonder Woman"}/>*/}

            {/*<Welcome  name={"Bruce"} heroName={"Batman"} />*/}
            {/*<Welcome name={"Clark"} heroName={"SuperMan"}/>*/}
            {/*<Welcome name={"Diana"} heroName={"Wonder Woman"} />*/}
        </div>
    );
}

export default App;
