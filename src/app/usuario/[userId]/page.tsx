import { GetStaticPaths, GetStaticProps } from 'next';

interface UsuarioProps {
  userId: string;
}

// Corrigindo `getStaticPaths` com TypeScript
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { userId: '1' } }, { params: { userId: '2' } }];
  return { paths, fallback: false };
};

// Corrigindo `getStaticProps` com TypeScript
export const getStaticProps: GetStaticProps<UsuarioProps> = async ({ params }) => {
  const userId = params?.userId as string;
  return { props: { userId } };
};

const Usuario: React.FC<UsuarioProps> = ({ userId }) => {
  return (
    <main>
      <h1>Usuário {userId}</h1>
    </main>
  );
};

export default Usuario;
