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
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658807/calgary-pavers_gqmy3b.jpg"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/patio-surfaces"
            text="pavers"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658852/retaining-walls-landscaper-calgary_jpevsl.png"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/retaining-walls"
            text="retaining walls"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658873/garden-walls-calgary-landscaping_igs3yi.png"
            alt="calgary landscaping services"
            href="/residential-services/outdoor-living/garden-walls"
            text="garden walls"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658882/garden-walls-calgary-landscaper_vxqb90.png"
            alt="calgary landscaping services"
            href="/residential-services/hardscaping/garden-bed-edging"
            text="edging"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659019/calgary-curbing_mwcoq2.webp"
            alt="calgary landscaping services"
            href="/concrete-curbing"
            text="curbing"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658903/stairs-calgary-landscaper_kvbbto.png"
            alt="calgary landscaping services"
            href="/staircases-stepping-stones"
            text="stairs & stepping stones"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659082/seat-walls-landscaper-calgary_bfisyy.webp"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/seating"
            text="seat walls"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659116/calgary-concrete_n8gqyg.webp"
            alt="calgary landscaping services"
            href="/residential-services/concrete-installations"
            text="concrete"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658904/water-mgmt-calgary-landscaping_mssc5e.webp"
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
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658903/turf-calgary-landscaping_csenrh.webp"
              text="artificial turf"
            />
            <ServiceBox
              href="/residential-services/irrigation-landscape-lighting"
              alt="calgary landscaping services"
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659204/calgary-landscaping-irrigation_cu2cen.webp"
              text="irrigation"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/sod-installation"
              alt="calgary landscaping services"
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658902/sod-landscaper_tkkfiy.jpg"
              text="sod"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/tree-shrub-planting"
              alt="calgary landscaping services"
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658903/tree-landscaping-calgary_rpzdfe.jpg"
              text="shrubs & trees"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/mulches-decorative-rock"
              alt="calgary landscaping services"
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659344/calgary-decorative-rock-and-mulch_k3pdtq.webp"
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
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659379/calgary-decks_kmnx7a.jpg"
            alt="calgary landscaping services"
            href="/decks-calgary"
            text="decks"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659420/pergola-2_kij2uh.jpg"
            alt="calgary landscaping services"
            href="/gazebos-pergolas"
            text="pergolas"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659456/lighting-calgary-landscaper_ouuakb.jpg"
            alt="calgary landscaping services"
            href="/landscape-lighting-services-calgary"
            text="lighting"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659493/calgary-lighting_zeebwi.jpg"
            alt="calgary landscaping services"
            href="/landscape-design"
            text="design"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658904/water-feature-landscaper_yre5na.png"
            alt="calgary landscaping services"
            href="/residential-services/water-features"
            text="water features"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659551/fire-pits-2_ahchcb.jpg"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/fire-pits-fire-places"
            text="fire pits"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659587/fence-landscaping-calgary_aqrb6e.jpg"
            alt="calgary landscaping services"
            href="/fence-contractor-in-calgary"
            text="fences"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659622/screens-landscaper_tkz2he.png"
            alt="calgary landscaping services"
            href="/privacy-screens"
            text="privacy screens"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659649/calgary-landscaping-railings_n62syr.jpg"
            alt="calgary landscaping services"
            href="/railings"
            text="deck railings"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659686/calgary-outdoor-kitchens_nugvoh.jpg"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/outdoor-kitchens"
            text="outdoor kitchens"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659717/outdoor-furniture-landscaping-calgary_aijkyt.jpg"
            alt="calgary landscaping services"
            href="/residential-services/outdoor-living/outdoor-furniture"
            text="outdoor furniture"
          />
        </div>
      </div>
    </section>
  );
}
