import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  return { props: { id: params.id } };
};

const Post = ({ id }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <h1>{`Page's ID is ${id}`}</h1>;
};

export default Post;
