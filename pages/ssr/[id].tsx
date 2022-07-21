import { GetServerSideProps, NextPage } from "next";
import { Fragment } from "react";

const SSR: NextPage<{ id: any }> = ({ id }) => {
  return <Fragment>SSR: {id}</Fragment>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  return { props: { id } };
};

export default SSR;
