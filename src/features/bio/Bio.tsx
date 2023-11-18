import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import styles from "./styles.module.css";
import { StyledBioContainer, StyledBioDescription, StyledBioImage, StyledBioName, StyledContainerButtons } from "./Bio.style";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <button
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        className={
          bioActiva.id === nombre
            ? styles.botonBioActivo
            : styles.botonBioInactivo
        }
      >
        {nombre}
      </button>
    ));
  };

  return (
    <StyledBioContainer>
      <StyledContainerButtons>{crearBotones()}</StyledContainerButtons>
      <div>
        <div>
          <StyledBioImage
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <StyledBioName>{bioActiva.nombre}</StyledBioName>
          <StyledBioDescription>{bioActiva.descripcion}</StyledBioDescription>
        </div>
      </div>
    </StyledBioContainer>
  );
};

export default Bio;
