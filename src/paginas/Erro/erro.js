import React, { Component } from "react";

class Erro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    
    async voltar() {
        
        window.location.href = "./";
         
    }

    render() {
        return (
            <div className='erro'>
                <h1>Pagina de erro</h1>
                <p>
                    Dados de login Invalido!
                </p>
                <br/>
                <button onClick={this.voltar}>Voltar para login</button>
            </div>
        )
    }
}

export default Erro;