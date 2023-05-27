import React from "react";
import styled from "styled-components";
import FinanceBanner from "./financeBanner";
import ContactBanner from "./contactBanner";
import Footer from "./footers/footer";
import GoogleBadge from "./googleBadge";
import HeaderBasic from "./headers/header";
import Header from "./Header/Header";

const Wrapper = styled.div`
  position: relative;
`;

export default function LayoutJs({ children }) {
  return (
    <Wrapper>
      <Header />
      {/* <HeaderBasic /> */}
      <main>{children}</main>
      <GoogleBadge />
      <FinanceBanner />
      <ContactBanner />
      <Footer />
    </Wrapper>
  );
}
