// import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {

    return (
      <Main
        meta={
          <Meta
            title="POC"
            description="Description"
          />
        }
      >
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        <h1>asdsadas</h1>

      </Main>
    );
  }

};

export default Index;
