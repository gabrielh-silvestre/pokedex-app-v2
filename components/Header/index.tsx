import Link from 'next/link';
import Image from 'next/image';

import { GiBugNet } from 'react-icons/gi';

import { ProfileLink } from '../Links/ProfileLink';

import {
  Container,
  ContentContainer,
  MainContainer,
  SiteLinks,
  SubContainer,
  UserOptionsContainer,
} from './styles';

import PokeBallLogo from '../../public/pokeball.png';
import { FavoriteLink } from '../Links/FavoriteLink';

function Header() {
  return (
    <Container>
      <ContentContainer>
        <MainContainer>
          <div className="w-10 lg:w-14 cursor-pointer">
            <Link passHref href="/">
              <Image
                src={PokeBallLogo}
                alt="Pokeball"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </Link>
          </div>

          <input
            type="text"
            name="searchBar"
            className="rounded-md h-min w-full col-span-2 mt-2 py-1 pl-2 lg:col-start-2 lg:col-auto"
            // TODO: split into a new component
          />

          <UserOptionsContainer>
            <FavoriteLink />
            <GiBugNet className="w-10 h-10 cursor-not-allowed" />
            <ProfileLink />
          </UserOptionsContainer>
        </MainContainer>

        <SubContainer>
          <Link passHref href="/generation/1">
            <SiteLinks>Generations</SiteLinks>
          </Link>
          <Link passHref href="/type">
            <SiteLinks>Types</SiteLinks>
          </Link>
          <Link passHref href="/">
            <SiteLinks>Explore</SiteLinks>
          </Link>
        </SubContainer>
      </ContentContainer>
    </Container>
  );
}

export { Header };
