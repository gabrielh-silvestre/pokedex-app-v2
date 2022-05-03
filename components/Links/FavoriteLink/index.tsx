import Link from 'next/link';
import { HiHeart } from 'react-icons/hi';

import { useAuth } from '../../../src/contexts/AuthContext';

function FavoriteLink() {
  const { user } = useAuth();

  return user ? (
    <Link passHref href="/favorites">
      <HiHeart className="w-10 h-10 opacity-100 cursor-pointer" />
    </Link>
  ) : (
    <HiHeart className="w-10 h-10 opacity-70 cursor-not-allowed" />
  );
}

export { FavoriteLink };
