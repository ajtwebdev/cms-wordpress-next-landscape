import React from "react";
import styled from "styled-components";
import LayoutJs from "../components/layoutJs";
import { Container, GridThree, Section } from "../components/layoutComponents";
import { FaStar, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Banner from "../components/banners/banner";
import Seo from "../components/seo";

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
  color: var(--txt-dark);
  padding: 2em;
  border-radius: var(--br);
  box-shdaow: var(--shadow-bottom-light);
  height: 100%;
  a {
    text-decoration: underline;
    font-size: var(--fs-sm);
  }
`;

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  & * + * {
    margin-left: 2px;
  }
`;

const fontStyle = {
  color: "var(--clr-accent)",
};

const Review = (props) => {
  return (
    <Wrapper className="spacing">
      <FlexStars>
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
      </FlexStars>
      <p className="italics">"{props.review}"</p>

      <Flex>
        <FcGoogle size={35} />
        <div>
          <p className="subheader bold">{props.title}</p>
          <p className="caps bold">{props.name}</p>
          <a
            href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
            target="_blank"
            className="accent"
          >
            Read more Google reviews &#8594;
          </a>
        </div>
      </Flex>
    </Wrapper>
  );
};

export default function Reviews() {
  return (
    <LayoutJs>
      <Seo
        title="Landscape Testimonials | Project Landscape"
        description="Project Landscape was a wonderful choice of our landscaping project. It’s a new build and we love the result of from nothing to a beautiful front and back yard."
      />
      <Banner
        img="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-3.webp"
        title="customer testimonials"
        subheader="proven success"
        description="Discover why Project Landscape is Calgary's top outdoor living company by reading our customer reviews. Our satisfied clients have shared their experiences and insights, providing firsthand accounts of our exceptional service, quality workmanship, and attention to detail. We take pride in delivering stunning outdoor spaces that exceed our clients' expectations. With our team of experts and commitment to customer satisfaction, you can trust Project Landscape to bring your outdoor vision to life. Don't just take our word for it – read our reviews and see why we're the trusted choice for outdoor living in Calgary."
      />
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title center">5-star reviews</h2>
          </Text>
          <GridThree className="spacing-md">
            <Review
              title="fence & gate"
              name="Shawn"
              review="Project Landscape was a wonderful choice of our landscaping project. It’s a new build and we love the result of from nothing to a beautiful front and back yard. The transformation was very impressive. It was done quickly and correctly. High level of customer service and smooth communications. We’ve got few quotes before giving the job to Project landscape, they are not the cheapest amount all, but truly the highest value. We are very happy with the entire process and results.

              "
            />
            <Review
              title="backyard landscaping"
              name="larry"
              review="Project Landscape replaced all the surface boards on our 2-level deck and stairs with pressure treated boards. They also created some additional “walk ways” in our back yard by replacing grass with pea-gravel filled paths. Their workmanship and attention to detail was excellent, and they ensured that everything was “right”. Also appreciated their detailed quotation — really helped us to fine-tune the work we wanted done — and happily answered all our questions. Highly recommend these folks for deck design and installation.

              "
            />
            <Review
              title="fence installation"
              name="jerry"
              review="Great experience overall. The work scope was executed to perfection and the team(s) were very efficient without jeopardizing quality. The work ethic and professionalism was top notch, very friendly, accommodating, and team’s workmanship and pride in their deliverable s was one of the best. Special thanks to Scott and Ryan from Operations and Alison at the office! We are already lining up our next project for the spring and would recommend Project Landscape for anyone looking for their services.

              "
            />
            <Review
              title="backyard patio"
              name="kurt"
              review="Allison and Scott were a pleasure to work with. There were some delays and mix-ups during the process. I assume it was because they’re handling a lot of different customers. The patio looks great! I was happy with how well they fit the blocks around the window well. I had to pick a bunch of rocks out of the lawn before I mowed, unfortunately, and there were skid marks left on the driveway from the bobcat.

              "
            />
            <Review
              title="patio and backyard landscaping"
              name="steve"
              review="Everyone at Project Landscape was professional and responsive to queries and clarifications. And their pricing was very reasonable. There appeared to be some moments of miscommunication between some people at the company during the rush to get my project underway during a short window of good weather in the middle of many consecutive days of rain, but in the end, everyone at Project Landscape came through and did a fantastic job on my project. All the work was done in one day with a large team to take advantage of the good weather. Franz did a great job with his crew, and I am very happy with the results. Everything was built exactly as I wanted it, and there were zero deficiencies. I would gladly call them up again for my next project.

              "
            />
            <Review
              title="backyard and frontyard landscaping"
              name="monica"
              review="Excellent and speedy work. Weather was a huge factor in our project and never seemed to work in our favor. However once the weather broke a full crew came to tackle our renovation. From removal of over grown weeds, patio installation, new sod, garden bed installation, trees being planted and walkway from side of house this work was done in 2 days. I was amazed at how quickly this was done maintaining the standard of work from the very beginning. Communication was a big plus for me as well as Alison in the office was always quick to reply and was very professional and a delight to talk to. We even had a change in design concept from our original plan after the work was done. The crew was able to come back out and fix this for us. Again very professional and quick. Scott and the team are amazing at what they do even advising on the best options for our space. I would not hesitate to hire them again for our next project.

              "
            />
            <Review
              title="gardening and landscape"
              name="maureen"
              review="Scott’s crew worked on my yard when I moved into my house in 2017. They dug flower beds, planted shrubs and trees, installed a fire pit and supplied topsoil. In 2018 his carpenters designed and constructed a privacy screen/flower wall on one side of my deck. It holds 60 pots of fragrant blooms and looks fantastic. When one of my trees was bending dangerously Scott sent his men to stake it up at no charge. His company does quality work and the costs are reasonable. If I need any more landscaping done, I will call Project Landscape Ltd.

              "
            />
            <Review
              title="fire pit patio"
              name="Carlos from Calgary"
              review="Project landscaping did a great patio project for us.
They were very professional, paid special attention to detail, they finished the job in a timely manner. I recommend them to anyone who is looking for a professional and responsible company."
            />
            <Review
              title="quality work"
              name="Melanie
"
              review="After reaching out to several landscaping companies, we opted to go with Project Landscape. We were in a new home and looking to have a complete side and backyard landscape. The price quoted was reasonable and Scott had great ideas and suggestions on how to make our yard most functional.
We were working against the weather (this project was done in late October/November) but everything was completed as promised. They were patient and professional with us while we made several changes an inquiries along the way.
Overall, we couldn’t be happier with the finished result. Excellent quality work! Done on time and on budget. We are more than satisfied!"
            />
            <Review
              title="great communication"
              name="Richard C"
              review="
Scott and his crew were a pleasure to work with. Great communication and professionalism from start to finish. Their advice and expertise were invaluable in creating the beautiful front yard we hoped for. We would definitely recommend Project Landscape!"
            />
            <Review
              title="excellent backyard landscaping"
              name="Sean S."
              review="Project Landscape Ltd. did an excellent job of landscaping my yard. Many things stood out that prompted me to take the time and write up a sincere and genuine 5-star review. I feel strongly that homeowners should consider Project Landscape for their landscaping needs, as this is the kind of business that I want to thrive and succeed in my hometown of Calgary. I am incredibly pleased with the way the conducted business and executed the work. I will definitely be ringing them up for any of my landscaping needs in the future. Project Landscape is in it to build relationships and gain return customers, which I appreciated. They demonstrated this by cleaning up, putting things back where they were supposed to go; these little things mattered. Ultimately I felt as though the end result was thorough and as if they were working on their own properties. As a first time house-owner (with a yard) I was pleased with Project Landscape!"
            />
            <Review
              title="very satisfied"
              name="Valarie B"
              review="We recently had work done in our backyard, and are very satisfied with the results! Their recommendations helped us achieve the yard we were looking for. Everyone we dealt with in the company was friendly and all displayed an excellent work ethic resulting in a high standard in the finished project. We’re so happy with how things turned out that we already have them booked for another project!"
            />
            <Review
              title="great work"
              name="Patricio C"
              review="Great work, all aligned to the original plan. The deck was done right away and on time. The rocks took a little longer. It was great to have a central person in an office (Allison) to talk to, opposed to calling a contractor that is working somewhere else and may or may not pick up the phone. That open line was key to us."
            />
            <Review
              title="scott and team were amazing"
              name="Bryn
"
              review="Scott and Team did an amazing job with landscaping our new home. His crew were professional, friendly and did great work. I would highly recommend this company.

"
            />
            <Review
              title="highly recommend"
              name="J.W."
              review="Highly recommend! Found Project Landscape online and based on the reviews sent them an email. Alison called right away and advised me they could fit in a small privacy wall we needed constructed. Scott came out and gave a very reasonable quote. A couple weeks later the job was completed and looks great. Professional, responsive and a seamless process. Thanks Project Landscape!!"
            />
            <Review
              title="excellent communication and timeline"
              name="D.Mariash
"
              review="We’ve used Project Landscape on several projects now. Communication, timelines and quality of work has been top notch. We highly recommend Scott and his crew!

"
            />
            <Review
              title="great communication & professionalism"
              name="Z.Espinoza
"
              review="Great communication and professionalism throughout. When we had any questions or concerns they were addressed accordingly. We found it really helpful to have one central individual we could address these with, Alison, thank you so much for making this process very easy. We had several quotes done and by far Project Landscaping truly was the only company that worked with us and our budget.
We were incredibly impressed with the quality of work, our fence turned out amazing! We now have several of our neighbors looking to complete their fences with Project Landscaping. We will continue to recommend your company again and again."
            />
            <Review
              title="we highly recommend"
              name="B.Kerr"
              review="We had several quotes for our new home landscaping project, however Project Landscape was one of the very few companies to provide a detailed written quote. This transparency allowed us to make thoughtful adjustments based on our budget while maximizing our landscaping ideas. Scott was also very helpful, providing insight into design alternatives we hadn’t thought of, which turned out amazing. We managed to stay on budget and our completed project turned out better than we had imagined it could have. We enjoyed working with Scott and his team, they were personable and friendly, and easily made this project exciting and fun. We have since had many neighbours positively comment on our landscaping, which is satisfying for sure. We would definitely recommend Project landscape.

"
            />
            <Review
              title="lawn maintenance"
              name="Jo"
              review="Project Landscape has been a most reliable company looking after my lawn needs. They are very professional. When they leave after the mowing the area is completely cleaned up. I do appreciate being able to communicate with them and they have been very agreeable to my needs."
            />
            <Review
              title="Pavers & Pergola"
              name="Mike"
              review="Project Landscape was a very professional company to work with. Accurate and competitive quotes, friendly staff and end result we were very happy with. Scott and Alison made sure we were satisfied with their work and completed it all to our 100% satisfaction. We have used Project Landscape for consecutive summers and jobs as a testament to their excellent work. We would not hesitate to use Project Landscape for any future work we may do."
            />
            <Review
              title="Top notch bunch!"
              name="T. Christen"
              review="Scott and his crew at Project Landscape are a top notch bunch. Not only is the quality of their landscape work on point, so is their customer service. Every interaction I’ve had with them has been wonderful. I strongly recommend Project Landscape for all of your landscaping needs home AND business!
"
            />
            <Review
              title="Excellent Service & Quality"
              name="Julia A"
              review="Project Landscape is a great company that provides excellent service and quality of work. Very satisfied with the entire experience. From the initial meeting with Scott to provide an estimate to the end of the project, Scott, Alison and the rest of the staff were courteous, professional, accommodating, and very efficient. All calls, emails and requests were addressed and handled promptly. When they set up the schedule for the work to be done, they were there on time, every time. As a matter of fact, turned out they were able to start before the original start date and were on site before I even read the email that they were able to start a few days earlier than anticipated (we had asked to have job done asap). When the debris was being removed, the people picking it all up actually took the time to ring the doorbell and suggest closing all the windows as it was going to create lots of dust. I thought that was quite considerate and a good example of going a step above."
            />
            <Review
              title="Amazing service start to finish!"
              name="B. Richards"
              review="I hired Project Landscape to redesign my backyard. From start to finish their service was extraordinary. Scott came back to my house several times to go over design options and suggestions. During the process I added and changed the job …MoreI hired Project Landscape to redesign my backyard. From start to finish their service was extraordinary. Scott came back to my house several times to go over design options and suggestions. During the process I added and changed the job scope and Scott and his team were more than cooperative and patient with my new ideas. I was very happy with the workmanship and end result. I received a follow up call upon completion to make sure I was 100% satisfied, this kind of customer service is rare. I would highly recommend using this company!!

"
            />
            <Review
              title="Great work, all aligned with original plan"
              name="P. Caia"
              review="Great work, all aligned to the original plan. The deck was done right away and on time. The rocks took a little longer. It was great to have a central person in an office (Allison) to talk to, opposed to calling a contractor that is working somewhere else and may or may not pick up the phone. That open line was key to us.

"
            />
            <Review
              title="Very satisfied with the results!"
              name="V. Blimkie"
              review="We recently had work done in our backyard, and are very satisfied with the results! Their recommendations helped us achieve the yard we were looking for. Everyone we dealt with in the company was friendly and all displayed an excellent work …MoreWe recently had work done in our backyard, and are very satisfied with the results! Their recommendations helped us achieve the yard we were looking for. Everyone we dealt with in the company was friendly and all displayed an excellent work ethic resulting in a high standard in the finished project. We’re so happy with how things turned out that we already have them booked for another project!

"
            />
            <Review
              title="Full yard landscaping completed"
              name="S. Sebry"
              review="Project Landscape Ltd. did an excellent job of landscaping my yard. Many things stood out that prompted me to take the time and write up a sincere and genuine 5-star review. I feel strongly that homeowners should consider Project Landscape …MoreProject Landscape Ltd. did an excellent job of landscaping my yard. Many things stood out that prompted me to take the time and write up a sincere and genuine 5-star review. I feel strongly that homeowners should consider Project Landscape for their landscaping needs, as this is the kind of business that I want to thrive and succeed in my hometown of Calgary. I am incredibly pleased with the way they conducted business and executed the work. I will definitely be ringing them up for any of my landscaping needs in the future. Project Landscape is in it to build relationships and gain return customers, which I appreciated. They demonstrated this by cleaning up, putting things back where they were supposed to go; these little things mattered. Ultimately I felt as though the end result was thorough and as if they were working on their own properties. As a first time house-owner (with a yard) I was pleased with Project Landscape!

"
            />
            <Review
              title="A pleasure working with Scott and his team"
              name="S. Howell"
              review="
 I first encountered Project landscape while they were completing our neighbors yard. As we were sitting on our deck people would literally stop and stare at their back yard, commenting on how beautiful it was. We asked Scott for a quote and from the beginning to the end they were extremely professional. They did great work in a timely manner- always making sure we were happy at every step. As our budget was not huge we did some work ourselves- Scott made sure we had all the material and knowledge we needed. It was a pleasure working with Scott and his team. I definitely recommend this company."
            />
            <Review
              title="Exterior landscaping on retaining wall"
              name="Pervez"
              review="Right from the get go I was under impression Project Landscape would do an amazing job on our backyard. We were surprised at how quickly and professionally the work was done. They were organized, efficient, and professional.  Alison was very professional and very easy to work with. She responded to my inquiry the very day I sent her an email and has been very good at keeping us updated on the next steps with our job.  Project Landscape may not be the least expensive landscape company on the market, but as with most things in life, you usually get what you pay for. Well done Scott.  Thank you !!

"
            />
            <Review
              title="I'm in love with my front and backyard!"
              name="Meaghan"
              review="I looked into this company after receiving their very nice brochure in my door and I am so glad that I decided to call them!! They were able to fit me into their schedule right away for a free consultation and then work us into their busy schedule the very next week! They arrived first thing in the morning and got to work asap. They were all very fast and efficient and so polite. I had ordered rock from a separate source and it turned out to not be enough and Scott was so accommodating with being able to order more and get it to my house within a few hours! I absolutely love my front and backyard.
Thank you so much Project Landscape!"
            />
            <Review
              title="we highly recommend them for landscaping"
              name="Vic"
              review="We hired Project landscape for our backyard landscaping. They installed a composite deck, paver patio, irrigation and garden bed throughout our property. We highly recommend them for all aspects of landscaping and will use them on any future projects in the years to come.

"
            />
            <Review
              title="never requested payment until we were 100% satisfied"
              name="Brad H."
              review="Great service, constant communication. Showed up when he said he would or called when was going to be late. Never requested payment until 100% satisfied. Fantastic job site cleanup. Have had 3 compliments on the work by neighbors passing by. Strongly recommend.

"
            />
            <Review
              title="excellent value and workmanship"
              name="Dana G."
              review="Project landscapes crew arrived on time and quickly and efficiently installed the paving stone patio in our backyard. The work is first class and confirmed that Project landscape has long experience in this type of work. We will be bringing them back next year to install a sprinkler system in our yard. Excellent value and workmanship.

"
            />
          </GridThree>
        </Container>
      </Section>
    </LayoutJs>
  );
}
