import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticia, TituloTarjetaNoticia } from './styled';
import { INoticiasNormalizadas } from './Noticias';

/**
 * @author Luis Miguel Molina
 * @description función que recibe parametros para mapear a los diferentes hijos
 * @returns devuelve el componente Card siguiendo el patrón Composed Components
 */

function NoticiaCard ({titulo, fecha, imagen, descripcionCorta, onclick}:INoticiasNormalizadas) {

  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={imagen} />
      <TituloTarjetaNoticia>{titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>{descripcionCorta}</DescripcionTarjetaNoticia>
      <BotonLectura onClick={onclick}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
}

export default NoticiaCard;