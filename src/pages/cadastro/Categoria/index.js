/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';


function CadastroCategoria() {
  /**
    * criando uma lista de categorias
    */
  const [categorias, setCategorias] = useState([]);

  /**
    * como temos mais de um objeto no formulario vamos criar um objeto
    * para seta-los todos ao mesmo mesmo
    */

  const initialValue = {
    name: '',
    description: '',
    color: '#000000',
  };

  /**
    * [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes')
    * nomeDaCategoria = nome da variavel
    * setNomeDaCategoria = sera utilizado para setar o valor da variavel
    * Filmes = Valor inicial passado para o states
    */
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValue(
      name,
      value,
    );
  }

  return (
    <PageDefault>
      <div className="box">
        <h1>
          Cadastro Categoria:
          { values.name }
        </h1>
        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          setValues(initialValue);
        }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <FormField
            as="textarea"
            label="Descrição"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />

          <Button>
            Cadatrar
          </Button>
        </form>

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.nome}`}>
              {categoria.name}
              {' '}
              -
              {categoria.description}
            </li>

          ))}
        </ul>

        <Link to="/">
          Ir para a home
        </Link>
      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;
