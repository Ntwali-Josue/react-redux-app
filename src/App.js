import React, { Component } from 'react'

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    };
    render() {
        return (
            <div>
                <form action="" id= "login">
                    <h1>Sign in</h1>
                    <label htmlFor="">Email</label><br/>
                    <input type="email" placeholder="email"/><br/><br/>
                    <label htmlFor="">Password</label><br/>
                    <input type="password" placeholder="password"/>
                    <br/><br/>
                    <input type="button" value="LOGIN"/>
                </form>
            </div>
        )
    }
}

export default App;
