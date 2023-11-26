import React, { MouseEventHandler } from "react";
import {
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "./styled";
import { CloseButton as Close } from "../../assets";

interface Props {
  imagen: string,
  titulo: string,
  onclickModal: MouseEventHandler,
  descripcion?: string | undefined,
}

function NoticiasModalPremium({ imagen, titulo, descripcion, onclickModal }: Props) {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={onclickModal}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={imagen} alt="news-image" />
        <CotenedorTexto>
          <TituloModal>{titulo}</TituloModal>
          <DescripcionModal>{descripcion}</DescripcionModal>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
}

export default NoticiasModalPremium;
