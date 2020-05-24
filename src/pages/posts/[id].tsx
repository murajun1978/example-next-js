import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true,
  };
};

export const getStaticProps = async ({ params, preview }) => {
  const isPreview = preview || false;
  return { props: { id: params.id, previewMode: isPreview } };
};

const Post = ({ id, previewMode }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {previewMode ? 'Preview mode' : ''}
      <h1>{`Page's ID is ${id}`}</h1>
    </>
  );
};

export default Post;
