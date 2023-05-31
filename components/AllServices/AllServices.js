import Image from "../Image/Image";
import React from "react";
import styled from "styled-components";
import { Container, Section } from "../layoutComponents";
import Link from "next/link";
import { ButtonPrimary } from "../buttons";
import styles from "./AllServices.module.scss";

import paversImg from "../../public/calgary-pavers.jpg";
import retainingImg from "../../public/retaining-walls-landscaper-calgary.png";
import gardenwallImg from "../../public/garden-walls-calgary-landscaping.png";
import edgingImg from "../../public/garden-walls-calgary-landscaper.png";
import curbingImg from "../../public/calgary-curbing.webp";
import stairsImg from "../../public/calgary-stairs.webp";
import seatsImg from "../../public/seat-walls-landscaper-calgary.webp";
import concreteImg from "../../public/calgary-concrete.webp";
import waterImg from "../../public/water-mgmt-calgary-landscaping.webp";

const ServiceBox = (props) => {
  return (
    <div className={styles.item}>
      <Image
        className={styles.serviceImg}
        height={100}
        width={600}
        // src={props.src}
        src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516113/cld-sample-2.jpg"
        alt={props.alt}
      />
      <Link className={styles.styledLink} href={props.href}>
        {props.text}
      </Link>
      <div className="overlay"></div>
    </div>
  );
};

export default function AllServices() {
  return (
    <section className="spacing-lg">
      <div className="container">
        <div className={styles.text}>
          {/* <p className="subheader accent">find the service you need</p> */}
          <h2 className="title">
            take a closer look at our calgary landscaping services
          </h2>
        </div>
      </div>
      <div className="container spacing">
        <h3 className="subheader accent center">
          popular hardscaping services
        </h3>
        <div className={styles.gridAuto}>
          <ServiceBox
            src={paversImg}
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/patio-surfaces"
            text="pavers"
          />
          <ServiceBox
            src={retainingImg}
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/retaining-walls"
            text="retaining walls"
          />
          <ServiceBox
            src={gardenwallImg}
            alt="calgary landscaping services"
            href="/residential-services/outdoor-living/garden-walls"
            text="garden walls"
          />
          <ServiceBox
            src={edgingImg}
            alt="calgary landscaping services"
            href="/residential-services/hardscaping/garden-bed-edging"
            text="edging"
          />
          <ServiceBox
            src={curbingImg}
            alt="calgary landscaping services"
            href="/concrete-curbing"
            text="curbing"
          />
          <ServiceBox
            src={stairsImg}
            alt="calgary landscaping services"
            href="/staircases-stepping-stones"
            text="stairs & stepping stones"
          />
          <ServiceBox
            src={seatsImg}
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/seating"
            text="seat walls"
          />
          <ServiceBox
            src={concreteImg}
            alt="calgary landscaping services"
            href="/residential-services/concrete-installations"
            text="concrete"
          />
          <ServiceBox
            src={waterImg}
            alt="calgary landscaping services"
            href="/residential-services/hardscaping/water-management"
            text="water mgmt"
          />
        </div>
      </div>
      <div className={styles.wrapperDark}>
        <div className="container">
          <h3 className="subheader light center">
            popular softscaping services
          </h3>
          <div className={styles.gridAuto}>
            <ServiceBox
              href="/residential-services/landscape-construction/artificial-turf"
              alt="calgary landscaping services"
              src="/turf-calgary-landscaping.webp"
              text="artificial turf"
            />
            <ServiceBox
              href="/residential-services/irrigation-landscape-lighting"
              alt="calgary landscaping services"
              src="/calgary-landscaping-irrigation.webp"
              text="irrigation"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/sod-installation"
              alt="calgary landscaping services"
              src="/sod-landscaper.jpg"
              text="sod"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/tree-shrub-planting"
              alt="calgary landscaping services"
              src="/tree-landscaping-calgary.jpg"
              text="shrubs & trees"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/mulches-decorative-rock"
              alt="calgary landscaping services"
              src="/mulch-landscaper-calgary.jpg"
              text="mulch & rock"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="subheader center accent">
          popular outdoor living services
        </h3>
        <div className={styles.gridAuto}>
          <ServiceBox
            src="/calgary-decks.jpg"
            alt="calgary landscaping services"
            href="/decks-calgary"
            text="decks"
          />
          <ServiceBox
            src="/pergola-2.jpg"
            alt="calgary landscaping services"
            href="/gazebos-pergolas"
            text="pergolas"
          />
          <ServiceBox
            src="/lighting-calgary-landscaper.jpg"
            alt="calgary landscaping services"
            href="/landscape-lighting-services-calgary"
            text="lighting"
          />
          <ServiceBox
            src="/calgary-lighting.jpg"
            alt="calgary landscaping services"
            href="/landscape-design"
            text="design"
          />
          <ServiceBox
            src="/water-features-2.jpg"
            alt="calgary landscaping services"
            href="/residential-services/water-features"
            text="water features"
          />
          <ServiceBox
            src="/fire-pits-2.jpg"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/fire-pits-fire-places"
            text="fire pits"
          />
          <ServiceBox
            src="/fence-landscaping-calgary.jpg"
            alt="calgary landscaping services"
            href="/fence-contractor-in-calgary"
            text="fences"
          />
          <ServiceBox
            src="/screens-landscaper.png"
            alt="calgary landscaping services"
            href="/privacy-screens"
            text="privacy screens"
          />
          <ServiceBox
            src="/calgary-landscaping-railings.jpg"
            alt="calgary landscaping services"
            href="/railings"
            text="deck railings"
          />
          <ServiceBox
            src="/calgary-outdoor-kitchens.jpg"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/outdoor-kitchens"
            text="outdoor kitchens"
          />
          <ServiceBox
            src="/outdoor-furniture-landscaping-calgary.jpg"
            alt="calgary landscaping services"
            href="/residential-services/outdoor-living/outdoor-furniture"
            text="outdoor furniture"
          />
        </div>
      </div>
    </section>
  );
}
