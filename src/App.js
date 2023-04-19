import React from "react";
import 'App.css'
import img from '../public/img.png'
const App = () => {
    return (
        <div>
            <h1 className="heading">Hello React</h1>
            <img src={img} alt="" />
        </div>
    );
}
export default App;