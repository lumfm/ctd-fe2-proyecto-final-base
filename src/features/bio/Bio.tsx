import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { StyledBioButton, StyledBioContainer, StyledBioDescription, StyledBioImage, StyledBioName, StyledContainerButtons } from "./Bio.style";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <StyledBioButton
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={
          bioActiva.id === nombre
            ? true
            : false
        }
      >
        {nombre}
      </StyledBioButton>
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
