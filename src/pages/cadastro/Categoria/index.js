import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

function useFormik({
  initialValues

}) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;

    setValues({
      ...values,
      [fieldName]: value,
    });
  }  
  console.log(values);
  return {
    values,
    handleChange
  }

}


function CadastroCategoria() {

    const formik = useFormik({
      initialValues: {
        categoryName: '',
        categoryColor: '',
        categoryDescription: '',
        categoryUser: '',
      },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
      },
    });
    
    return (
      <PageDefault>
        <form onSubmit={(event) => {
          event.preventDefault();
          console.log(formik.values);
          alert('Olha o console');
        }}>
        <h1>Nova Categoria</h1>
          <div className="formField">
            <label htmlFor="categoryForm">
              Nome da Categoria:
            </label>
            <input
              type="text"
              placeholder="Nome da Categoria"
              name="categoryName"
              id="categoryName"
              onChange={formik.handleChange}
              value={formik.values.categoryName}
            />   
          </div>  

          <div className="formField">
            <label htmlFor="categoryForm">
              Cor:
            </label>
            <input
              type="text"
              placeholder="Cor da Categoria"
              name="categoryColor"
              id="categoryColor"
              onChange={formik.handleChange}
              value={formik.values.categoryColor}
            />   
          </div>  

          <div className="formField">
            <label htmlFor="categoryForm">
              Cor:
            </label>
            <input
              type="text"
              placeholder="Descrição"
              name="categoryDescription"
              id="categoryDescription"
              onChange={formik.handleChange}
              value={formik.values.categoryDescription}
            />   
          </div>  

          <div className="formField">
            <label htmlFor="categoryForm">
              Cor:
            </label>
            <input
              type="text"
              placeholder="Usuário"
              name="categoryUser"
              id="categoryUser"
              onChange={formik.handleChange}
              value={formik.values.categoryUser}
            />   
          </div>  
          


          <button type="submit">
            Cadastrar
          </button>  

                     

          
          
        </form>
        

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;


/**
 * <Button variant="contained" color="primary" type="submit">
            Cadastrar
          </Button>

          <Button variant="contained" color="info">
            Limpar
          </Button>
 * 
 * 
 * 
 * 
 * 
 * 
 */