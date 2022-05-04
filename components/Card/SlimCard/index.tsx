import Link from 'next/link';
import { SlimCardData } from '../../../src/@types/types';

import { capitalize } from '../../../src/utils';

import { ContainerTitle } from './style';

interface ISlimCardProps extends SlimCardData {
  link?: {
    href: string;
  };
}

function SlimCard({ title, link }: ISlimCardProps) {
  return link ? (
    <Link passHref href={link.href}>
      <ContainerTitle className={title}>{capitalize(title)}</ContainerTitle>
    </Link>
  ) : (
    <ContainerTitle className={title}>{capitalize(title)}</ContainerTitle>
  );
}

export { SlimCard };
