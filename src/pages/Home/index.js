import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carrocel from '../../components/Carousel'; 
import Footer from '../../components/Footer';

import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{background: '#141414'}}>      
      <Menu />
      
      <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O leal comandante veterano da marinha A.K. Waters (Bruce Willis) é enviado para uma região da África completamente devastada pela guerra em uma missão super arriscada para resgatar a Dra. Lena Hendricks (Monica Belucci), uma cidadã americana que administra uma Missão"}>
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

export default Home;
