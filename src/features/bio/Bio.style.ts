import styled from "styled-components";

export const StyledBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const StyledContainerButtons = styled(StyledBioContainer)`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const StyledBioImage = styled.img`
  max-width: 200px;
  max-height: 300px;
  margin-bottom: 1rem;
`;

export const StyledBioName = styled.h3`
  font-size: 2em;
  margin-bottom: 1rem;
`;

export const StyledBioDescription = styled.p`
  font-size: 1.3em;
  width: 70%;
  margin: 1rem auto;
`;