import React from "react";
import Banner from "../components/banners/banner";
import LayoutJs from "../components/layoutJs";
import { Section, Container } from "../components/layoutComponents";

export default function FreeResources() {
  return (
    <LayoutJs>
      <Banner
        img="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/banner-image-1.png"
        title="free landscaping and outdoor living resources"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      <Section>
        <Container>
          <center>free resources coming soon!</center>
        </Container>
      </Section>
    </LayoutJs>
  );
}
