import { useAuth } from '../../../src/contexts/AuthContext';
import { FavoriteProvider } from '../../../src/contexts/FavoriteContext';

import { Container } from './styles';
import { SlimCard } from '../../Card/SlimCard';

interface IOptionsListProps {
  list: string[];
}

function OptionsList({ list }: IOptionsListProps) {
  const { user } = useAuth();

  return (
    <Container>
      <FavoriteProvider user={user}>
        {list.map((item) => (
          <SlimCard key={item} title={item} link={{ href: `/type/${item}` }} />
        ))}
      </FavoriteProvider>
    </Container>
  );
}

export { OptionsList };
