import Link from 'next/link';
import Image from 'next/image';

import { HiHeart, HiUserCircle } from 'react-icons/hi';
import { GiBugNet } from 'react-icons/gi';

import {
  Container,
  ContentContainer,
  MainContainer,
  SiteLinks,
  SubContainer,
  UserOptionsContainer,
} from './styles';

import PokeBallLogo from '../../public/pokeball.png';

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
            name="searchbar"
            className="rounded-md h-min w-full col-span-2 mt-2 py-1 pl-2 lg:col-start-2 lg:col-auto"
            // TODO: split into a new component
          />

          <UserOptionsContainer>
            {' '}
            {/* TODO: add functinality */}
            <Link passHref href="/favorites">
              <HiHeart className="w-10 h-10 cursor-pointer" />
            </Link>
            <GiBugNet className="w-10 h-10 cursor-not-allowed" />
            <Link passHref href="/login">
              <HiUserCircle className="w-10 h-10 cursor-pointer" />
            </Link>
          </UserOptionsContainer>
        </MainContainer>

        <SubContainer>
          <Link passHref href="/generation/1">
            <SiteLinks>Generations</SiteLinks>
          </Link>
          <Link passHref href="/type/1">
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
