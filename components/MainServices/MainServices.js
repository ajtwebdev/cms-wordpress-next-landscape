import Image from "components/Image/Image";
import React from "react";
import styled from "styled-components";
import { ButtonUnderline, ButtonInline } from "../buttons";
import { Container, Section } from "../layoutComponents";
import Link from "next/link";
import styles from "./MainServices.module.scss";

export default function MainServices() {
  let width = "100%";
  let height = "400px";

  return (
    <section>
      <div className="spacing">
        <div className="container">
          <div className={styles.text}>
            <div>
              {/* <p className="subheader accent">find the services you need</p> */}
              <h2 className="title">
                bring your landscaping calgary project to life
              </h2>
            </div>
            <p>
              Your home is your pride and joy, and we are the{" "}
              <ButtonInline href="/">landscape professionals</ButtonInline> who
              can help you maintain its outdoor beauty. Increasing your
              property's value and making your yard the envy of the block,
              <ButtonInline href="/about">Project Landscape</ButtonInline>{" "}
              ensures that your landscaping needs are met. From{" "}
              <ButtonInline href="/residential-services/irrigation-landscape-lighting">
                irrigation
              </ButtonInline>
              , seasonal clean-up,{" "}
              <ButtonInline href=".residential-services/hardscaping/">
                construction
              </ButtonInline>{" "}
              and{" "}
              <ButtonInline href="/residential-services">
                more services
              </ButtonInline>
              , we are the Calgary Landscaping experts you can trust for all
              your residential landscaping needs.
            </p>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.list}>
            <div className={styles.item}>
              <Image
                height={height}
                width={width}
                src="/hardscaping-calgary.jpg"
                alt="calgary hardscaping services"
              />
              <div>
                <h3 className="subheader">hardscaping</h3>
                <ButtonUnderline
                  className="service-button"
                  href="/residential-services/hardscaping"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </div>
            <div className={styles.item}>
              <Image
                height={height}
                width={width}
                src="/softscaping-calgary.jpg"
                alt="calgary softscaping services"
              />
              <div>
                <h3 className="subheader">softscaping</h3>
                <ButtonUnderline
                  className="service-button"
                  href="/residential-services/softscaping"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </div>
            <div className={styles.item}>
              <Image
                height={height}
                width={width}
                src="/outdoor-living-calgary.jpg"
                alt="outdoor landscaping services calgary"
              />
              <div>
                <h3 className="subheader">outdoor living</h3>
                <ButtonUnderline
                  className="service-button"
                  href="/residential-services/outdoor-living"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </div>
          </div>
          <div className={styles.bg} />
        </div>
      </div>
    </section>
  );
}
