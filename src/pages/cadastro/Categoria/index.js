import React, { useState, useEffect } from 'react';
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
    color: '',
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

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://cbtflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        console.log('resposta', resposta);
        setCategorias([
          ...resposta,
        ]);
      });
  }, [
    values.name,
  ]);

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
        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}
      </div>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
