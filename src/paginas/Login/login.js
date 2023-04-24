
import './login.css';
import React, { Component } from "react";
import firebase from "../../firebase";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: ""
        }
        this.logar = this.logar.bind(this);
    }
    async logar() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then( () => {
            window.location.href = "./principal";
                
        })
        .catch((erro) => {
            window.location.href = "./erro";
            console.log(erro);
        });

        

    }

    render() {
        return (
            <div className='login flex-box-login container-box-login' >
                <div className='content-box-login'>
                    <h1>Pagina de Login</h1>
                    <table className='table-login'>
                        <tr>
                            <td><label>Email: </label></td>
                            <td><input type="email" name="email" placeholder="email@mail.com" onChange={(e)=> this.setState({email: e.target.value})} /></td>
                        </tr>
                        
                        <tr>
                            <td><label>Senha: </label></td>
                            <td><input type="password" name="senha" onChange={(e)=> this.setState({senha: e.target.value})} /></td>
                        </tr>
                    </table>
                    
                    <br/>
                    <button onClick={this.logar}>Logar</button>
                </div>
            </div>
        )
    }
}

export default Login;