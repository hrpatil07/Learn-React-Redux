import React from 'react';
import ReactDOM from 'react-dom/client'


function Greeting(){
    return <h2>my first component</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
export default Greeting;