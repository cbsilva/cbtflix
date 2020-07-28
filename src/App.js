import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain/index';
import Carrocel from './components/Carousel/index'; 
import Footer from './components/Footer';



function App() {
  return (
    <div style={{background: '#141414'}}>      
      <Menu />
      
      <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript parte da rotina das desenvolvedoras e desnvovlvedores. Mas o que els fazem afinal? Descubra com a Vanessa!"}>
      </BannerMain>

      <Carrocel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}>
      </Carrocel>

      <Carrocel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}>
      </Carrocel>

      <Carrocel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}>
      </Carrocel>

      <Carrocel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}>
      </Carrocel>

      <Carrocel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}>
      </Carrocel>

      <Carrocel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}>
      </Carrocel>
      
      <Footer />
    </div>
  );
}

export default App;
