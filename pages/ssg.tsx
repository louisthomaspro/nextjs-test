import { GetStaticProps, NextPage } from "next";
import { Fragment } from "react";

const SSG: NextPage<{ id: any }> = ({ id }) => {
  return <Fragment>SSG: {id}</Fragment>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = 'id genéré';
  return { props: { id } };
};

export default SSG;
