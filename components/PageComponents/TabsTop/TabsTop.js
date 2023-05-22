import React from "react";
import { Section, Container, Flex } from "../../layoutComponents";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import styled from "styled-components";
import Image from "../../Image";

const Wrapper = styled.div`
  .css-1xhq01z {
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  }

  .css-52dxnr {
    font-family: var(--ff-alfa);
    font-size: var(--fs-sm);
    font-weight: var(--fw-button);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .css-52dxnr[aria-selected="true"],
  .css-52dxnr[data-selected] {
    --tabs-color: var(--clr-tan);
    border-color: currentcolor;
  }

  css-13o7eu2 {
    padding: 2em;
    border: 1px solid var(--clr-tan);
    border-radius: var(--br);
  }
`;

const Text = styled.div`
  text-align: center;
`;

const ListBox = styled.div``;

const TabWrapper = styled.div`
  padding: 2em;
  border: 3px solid var(--clr-tan);
  border-radius: var(--br);
`;

export default function TabsTop({ title, tabsContent }) {
  let width = "100%";
  let height = "400px";

  return (
    <Wrapper>
      <Section>
        <Container>
          <Text>
            <h2 className="title">{title}</h2>
          </Text>
          <TabWrapper>
            <Tabs>
              <TabList>
                {tabsContent.map((tab) => {
                  return <Tab>{tab.tabLabel}</Tab>;
                })}
              </TabList>

              <TabPanels>
                {tabsContent.map((tab) => {
                  return (
                    <TabPanel>
                      <Flex>
                        <div className="spacing">
                          <h3 className="subheader accent">{tab.tabTitle}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${tab.tabBody}`,
                            }}
                          />
                          <ListBox>
                            {tab.tabList ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `${tab.tabList}`,
                                }}
                              />
                            ) : null}
                          </ListBox>
                        </div>
                        <Image
                          alt={tab.tabImage.altText || ""}
                          srcSet={tab.tabImage.srcSet}
                          src={tab.tabImage.src}
                          width={width}
                          height={height}
                        />
                      </Flex>
                    </TabPanel>
                  );
                })}
              </TabPanels>
            </Tabs>
          </TabWrapper>
        </Container>
      </Section>
    </Wrapper>
  );
}
