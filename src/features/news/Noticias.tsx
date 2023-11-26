import { MouseEventHandler, useState } from "react";
import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "./styled";
import useGetInformation from "./useGetInformation";
import NoticiaCard from "./NoticiaCard"
import NoticiasModalPremium from "./NoticiasModalPremium";
import NoticiasModal from "./NoticiasModal";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
  onclick?: MouseEventHandler;
}

const Noticias = () => {
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
  const noticias = useGetInformation();

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <NoticiaCard
            key={n.id}
            id={n.id}
            titulo={n.titulo}
            descripcion={n.descripcion}
            fecha={n.fecha}
            esPremium={n.esPremium}
            imagen={n.imagen}
            descripcionCorta={n.descripcionCorta}
            onclick={() => setModal(n)}
          />
        ))}
        {modal ? (
          modal.esPremium ? (
            
            <NoticiasModalPremium
              onclickClose= {() => setModal(null)}
              onclickSubscribe={() =>
                setTimeout(() => {
                  alert("Suscripto!");
                  setModal(null);
                }, 1000)
              }
            />

          ) : (
            <NoticiasModal 
              onclickModal={() => setModal(null)}
              imagen = {modal.imagen}
              titulo ={modal.titulo}
              descripcion={modal.descripcion}
            />
          )
        ) : null}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
