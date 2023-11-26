import React, { MouseEventHandler } from 'react'
import { BotonSuscribir, CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal } from './styled';
import { SuscribeImage, CloseButton as Close } from "../../assets";

interface Props {
  onclickClose: MouseEventHandler;
  onclickSubscribe: MouseEventHandler;
}

function NoticiasModalPremium({ onclickSubscribe, onclickClose }: Props) {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={onclickClose}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
        <CotenedorTexto>
          <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
          <DescripcionModal>
            Suscríbete a nuestro newsletter y recibe noticias de nuestros
            personajes favoritos.
          </DescripcionModal>
          <BotonSuscribir onClick={onclickSubscribe}>Suscríbete</BotonSuscribir>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
}

export default NoticiasModalPremium