import Image from 'next/image';
import Link from 'next/link';
import { HiUserCircle } from 'react-icons/hi';

import { useAuth } from '../../../src/contexts/AuthContext';

function ProfileLink() {
  const { user } = useAuth();

  return user ? (
    <Link passHref href="/profile">
      <Image
        src={user.photoURL || ''}
        alt="Profile picture"
        width={40}
        height={40}
        className="rounded-full cursor-pointer"
      />
    </Link>
  ) : (
    <Link passHref href="/login">
      <HiUserCircle className="w-10 h-10 cursor-pointer" />
    </Link>
  );
}

export { ProfileLink };
