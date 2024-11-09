import React from "react";

const WelcomeMessage = () => {
    //return (
      //  <div>
       //     <h1>“Hello everyone, I am learning React at ALX!”</h1>
       //     <p>"I am learning about JSX!"</p>
        //</div>
        
       
    //)
    return React.createElement('div', null, '<h1>“Hello everyone, I am learning React at ALX!”</h1>')
}

export default WelcomeMessage