import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticia, TituloTarjetaNoticia } from './styled';
import { INoticiasNormalizadas } from './Noticias';

function NoticiaCard ({titulo, fecha, imagen, descripcionCorta, onclick}:INoticiasNormalizadas) {

  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={imagen} />
      <TituloTarjetaNoticia>{titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>{descripcionCorta}</DescripcionTarjetaNoticia>
      {/* <BotonLectura onClick={() => setModal(noticia)}>Ver más</BotonLectura> */}
      <BotonLectura onClick={onclick}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
}

export default NoticiaCard;