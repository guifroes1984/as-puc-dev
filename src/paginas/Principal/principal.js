import './principal.css'
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import firebase from "../../firebase";

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome:"",
            sobrenome:"",
            nascimento:""
        }
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(async (usuario)=> {
            if (usuario) {
                var uid = usuario.uid;
                await firebase.firestore().collection("usuarios").doc(uid).get()
                .then((ret) => {
                    this.setState({
                        nome: ret.data().nome,
                        sobrenome: ret.data().sobrenome,
                        nascimento: ret.data().nascimento
                        
                    })
                }).catch((erro)=> {
                    console.log(erro);
                });
            } else {
                window.location.href = "./";

            }
        })

    }
    async logout() {
        firebase.auth().signOut().then(function() {
            window.location.href = "./";
          }).catch(function(error) {
            console.log(error);
          });
    }

    cadastrar () {
        window.location.href = "./cadastro";
    }

    render() {
        
        return (
            <div className='principal'>
                <h1>Pagina Principal</h1>
                <h5>Dados do Usuário:</h5>
                <p>
                    Nome: { this.state.nome } <br/>
                    Sobrenome: { this.state.sobrenome } <br/>
                    Data de Nascimento: { this.state.nascimento }
                </p>
                <br/>
                <button onClick={this.cadastrar}>Cadastrar Usuário</button>
                <br/>
                <button onClick={this.logout}>Sair</button>
            </div>
        )
    }
}

export default Principal;