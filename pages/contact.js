import React from "react";
import ContactBanner from "../components/banners/contactBanner";
import FormContact from "../components/Forms/FormContact";
import LayoutJs from "../components/layoutJs";
import PortfolioBanner from "../components/portfolioBanner";

export default function Contact() {
  return (
    <LayoutJs>
      <ContactBanner
        img="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/banner-image-1.png"
        title="you've made contact!"
        subheader="what's your project? We are Currently booking for the 2023 Season. We can’t wait to hear your ideas and share some of ours!"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      <FormContact title="complete your outdoor wish list" />
      <PortfolioBanner />
    </LayoutJs>
  );
}
