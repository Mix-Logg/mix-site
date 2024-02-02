// app/not-found.tsx

import Link from 'next/link';
import RootLayout from './layout';

const NotFoundPage: React.FC = () => {
  return (
    <RootLayout>

    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-lg mb-8">A página que você está procurando não existe.</p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">Voltar para a página inicial</a>
      </Link>
    </div>
    </RootLayout>
  );
};

export default NotFoundPage;
