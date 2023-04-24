import React, { Component } from "react";
import './cadastro.css';
import firebase from "../../firebase";

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            nascimento: "",
            email: "",
            senha: ""
        }
        this.gravar = this.gravar.bind(this);
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(async (usuario)=> {
            if (usuario) {
                var uid = usuario.uid;
                await firebase.firestore().collection("usuarios").doc(uid).get()
                .then((ret) => {
                    var name = ret.data().nome;
                    console.log(name + "acessou cadastro")
                }).catch((erro)=> {
                    console.log(erro);
                });
            } else {
                window.location.href = "./";

            }
        })

    }

    async gravar() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(async (ret) => {
            await firebase.firestore().collection("usuarios").doc(ret.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                nascimento: this.state.nascimento,
                
        });
        window.location.href = "./principal"
        })

    }
    
    render() {
        return (
            <div className="cadastro flex-box container-box">
                <div className="content-box">
                    <h1>Pagina de Cadastro</h1>
                    <table className="table">
                        <tr>
                            <td><label>Nome: </label></td>
                            <td><input type="text" name="nome" placeholder="Fulano" onChange={(e)=> this.setState({nome: e.target.value})} /></td>
                        </tr>
                        <tr>
                            <td><label>Sobrenome: </label></td>
                            <td><input type="text" name="sobrenome" placeholder="de Tal" onChange={(e)=> this.setState({sobrenome: e.target.value})} /></td>
                        </tr>
                        <tr>
                            <td><label>Email: </label></td>
                            <td><input type="email" name="email" placeholder="email@mail.com" onChange={(e)=> this.setState({email: e.target.value})} /></td>
                        </tr>
                        <tr>
                            <td><label>Senha: </label></td>
                            <td><input type="password" name="senha" onChange={(e)=> this.setState({senha: e.target.value})} /></td>
                        </tr>
                        <tr>
                            <td><label>Data Nasc: </label></td>
                            <td><input type="date" name="nascimento" onChange={(e)=> this.setState({nascimento: e.target.value})} /></td>
                        </tr>
                    </table>
                    <br/>
                    <button onClick={this.gravar}>Gravar</button>
                </div>
            </div>
        )
    }
}

export default Cadastro;