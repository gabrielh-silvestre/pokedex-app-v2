import Link from 'next/link';
import { SlimCardData } from '../../../src/@types/types';

import { capitalize } from '../../../src/utils';

import { Container, ContainerTitle } from './style';

interface ISlimCardProps extends SlimCardData {
  link?: {
    href: string;
  };
}

function SlimCard({ title, description, link }: ISlimCardProps) {
  return link ? (
    <Link passHref href={link.href}>
      <Container className={title}>
        <ContainerTitle>{capitalize(title)}</ContainerTitle>
        {description && <p>{description}</p>}
      </Container>
    </Link>
  ) : (
    <Container className={title}>
      <ContainerTitle>{capitalize(title)}</ContainerTitle>
      {description && <p>{description}</p>}
    </Container>
  );
}

export { SlimCard };
