import { SlimCardData } from "../../../src/@types/types";

import { capitalize } from "../../../src/utils";

import { Container, ContainerTitle } from "./style";

function SlimCard({ title, description }: SlimCardData) {
  return (
    <Container className={title}>
      <ContainerTitle>{capitalize(title)}</ContainerTitle>
      {description && <p>{description}</p>}
    </Container>
  );
}

export { SlimCard };
