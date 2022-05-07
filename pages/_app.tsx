import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextProgressBar from 'nextjs-progressbar';

import { AuthProvider } from '../src/contexts/AuthContext';

import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AuthProvider>
        <NextProgressBar />
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}

export default MyApp;
