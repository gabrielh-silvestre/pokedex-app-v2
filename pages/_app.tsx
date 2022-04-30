import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';

import { AuthProvider } from '../src/contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}

export default MyApp;
