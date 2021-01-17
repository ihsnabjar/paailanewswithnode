import React, { Component } from 'react'

export class login2 extends Component {
    
    constructor () {
        super();
        this.state={
            email:null,
            password:null,
            login:false,
            store:null
        }
    }

    login() {
        fetch('https://paailanews.herokuapp.com/api/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(this.state)
        }).then( (response) => {
            response.json().then((result) => {
                console.log('result',result);
                localStorage.setItem('login',JSON.stringify({
                    login:true,
                    token: result.token
                }))

            })
        } )
    }
    render() {
        return (
            <div>
                <h1>jwt token demo</h1>
                <div>
                <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}} /> <br/>
                <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} /> <br/>
                <button onClick={() => {this.login()} } >login</button>
                </div>
            </div>
        )
    }
}

export default login2
