import React from "react";
import DonationContainer from "../../containers/DonateContainer";
import { Container } from "../../styles/shared";
import Head from "next/head";

const DonatePage = () => {
  return (
    <>
      <Head>
        <title>Streamable | Donate</title>
        <meta name="description" content="Donate to Streamable" />
        <meta name="keywords" content="Donate, Streamable" />
      </Head>
      <Container>
        <DonationContainer />
      </Container>
    </>
  );
};

export default DonatePage;
