import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";

const Dynamic: NextPage<{ id: any }> = ({ id }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <Fragment>Dynamic: {id}</Fragment>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  return { props: { id } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Dynamic;
