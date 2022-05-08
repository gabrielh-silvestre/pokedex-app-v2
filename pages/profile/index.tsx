import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useAuth } from '../../src/contexts/AuthContext';

const Profile: NextPage = () => {
  const { user, signOut } = useAuth();
  const { push } = useRouter();

  const handleSignOut = () => {
    signOut();
    push('/');
  }

  return (
    <>
      <main className="grow flex flex-col justify-center items-center">
        <div className="rounded-full overflow-hidden">
          {user && (
            <Image
              src={user.photoURL || ''}
              width={200}
              height={200}
              alt="Profile picture"
            />
          )}
        </div>

        <button
          onClick={handleSignOut}
          className="mt-8 py-1 px-3 font-bold text-lg text-gray-50 bg-red-700 rounded"
        >
          SignOut
        </button>
      </main>
    </>
  );
};

export default Profile;
