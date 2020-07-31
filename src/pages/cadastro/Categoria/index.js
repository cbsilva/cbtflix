import React, {Component} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

function CadastroCategoria() {
    
    return (
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <div>
          <form> 
            <div>
              <label>
                Nome da Categoria
                <input type="text" name="nome" className="" />
              </label>
            </div>
            <div>
              <label>
                Descrição
                <input type="text" name="descricao" className="" />
              </label> 
            </div>
            <div>
              <label>
                <label>
                  Cor
                  <input type="text" name="cor" className="" />
                </label>
              </label> 
            </div> 
            <div>
              <label>
                <label>
                  Código de Segurança
                  <input type="text" name="codigo_seguranca" className="" />
                </label>
              </label> 
            </div>            

            <Button variant="contained" color="primary">
              Cadastrar
            </Button>

            <Button variant="contained" color="info">
              Limpar
            </Button>
          </form>
        </div>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;