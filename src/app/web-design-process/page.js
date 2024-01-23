"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/web-tasarım-süreçi-nasıl-işler.jpg";
import wireframing from "../../../public/wireframing-nedir.webp";
import review from "../../../public/review.jpg";
import launch from "../../../public/launch.jpg";
import content from "../../../public/content.jpg";
import web from "../../../public/web-development-digital-voyage.jpg";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ContactUs from "../components/ContactUs";

const page = () => {
  return (
    <div className="h-full flex flex-col pt-44 items-center text-dark bg-light">
      <h1 className="text-6xl text-gradient font-bold mb-5">
        Web Design Process
      </h1>
      <h3 className="text-xl opacity-55 mb-5">
        A basic outline of the web design process we would use on a mid sized
        web design project
      </h3>
      <div className="mx-10 md:mx-44">
        <Image src={img1} width={1024} height={500} />
      </div>
      <div id="paragraf" className="mx-10 md:mx-52 text-wrap my-12 ">
        <h3 className=" mb-4">An introduction to the web design process</h3>
        <div className="text-lg space-y-6 ">
          {" "}
          <p>
            On our quotes, we often include a brief outline of what will be
            involved in building a new website. This can help our clients
            understand what they need to prepare for as well as give them an
            idea of how much time is required for each phase.
          </p>
          <p>
            Below we have included an expanded version of this process, albeit,
            a lot more general and simplified.
          </p>
          <p>
            Whilst this example guide will help you better understand the web
            design process, it's worth expecting that the process for your
            project may differ in some ways given its unique nature.
          </p>
          <p>
            Give this, it is always worth asking your web designer how each
            phase of your specific web design project will work.
          </p>
        </div>
        <h4 className=" ">Web design phases</h4>
        <div className="text-lg space-y-3 ">
          <li>The web design brief</li>
          <li>Wireframing</li>
          <li>Design</li>
          <li> Server setup & configuration</li>
          <li> CMS setup & configuration</li>
          <li> Content handling</li>
          <li> Website development</li>
          <li> Content lock down and testing</li>
          <li> Launch</li>
          <li> Support, analysis & promotion</li>
        </div>
        <h4 className=" ">Web Design Brief</h4>
        <div className="text-lg space-y-6 ">
          {" "}
          <p>
            Commonly our clients will have a clear idea of what they require
            before they approach us to quote on building them a new website.
          </p>
          <p>
            To help us understand this, they give us a web design requirement
            specification.
          </p>
          <p>
            A web design requirement specification is simply a written document
            that outlines all the things you want our web designers to know you
            need in your website.
          </p>
          <p>
            Generally, a simple web design requirement specification will
            include:
          </p>
          <li>Time frame for each deliverable</li>
          <li>Budget</li>
          <li>Mission critical requirements</li>
          <li> Ideal inclusions</li>
          <li> Technical requirements</li>
          <li> Reference websites</li>
          <li> Primary points of contactt</li>
          <p>
            Preparing a document like this is a great way to help fast track
            these early stages of your web design project. It allows our web
            design team to quickly understand how long they have to deliver the
            website, what your website needs to do and how much your company can
            afford to invest into the new website.
          </p>
          <p>
            Once we're clear on these details, we'll be able to provide an
            indicative web design quote along with a range of implementation
            strategies, optional inclusion costs and a staged rollout plan.
          </p>
          <h3 className=" pt-12 text-3xl">Common questions</h3>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Do we need to a have a meeting prior to quoting on my website?">
              <div className="space-y-4">
                <p>
                  {" "}
                  Having a face to facing briefing about a new website can be
                  useful but it isn't always required.
                </p>
                <p>
                  {" "}
                  For small projects, if you've seen a few other sites which we
                  can reference that are similar to what you want to build, we
                  can use this to give you a ballpark cost and time frame.
                </p>{" "}
                <p>
                  {" "}
                  For complicated projects, we will insist on you meeting with
                  one of our web designers before we quote so that we can be
                  confident we truly understand all the technical requirements
                  that need to be included in your new website.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title=" How do I go about writing a web design specification?">
              <div className="space-y-2">
                {" "}
                <p>
                  If you're not sure where to start with writing your web design
                  specification, just copy our headings from above and write
                  whatever you can below each heading.
                </p>
                <p className="underline underline-offset-5">
                  Below is a brief example of a very basic web design
                  specification:
                </p>
                <p className="font-semibold pt-4">
                  Time frame for each deliverable
                </p>
                <p>Website much be launched by Christmas.</p>
                <p className="font-semibold pt-4">Budget</p>
                <p>
                  We're looking for quotes between 5k - 12k. A business case to
                  spend more on the website would be welcome.
                </p>
                <p className="font-semibold pt-4">
                  Mission critical requirements
                </p>
                <p>
                  The website will include 20 - 30 pages, needs to have a call
                  to action form on each page, an easy way for us to update it
                  ourselves and rank well in Google.
                </p>
                <p className="font-semibold pt-4">Ideal inclusions</p>
                <p>
                  If the contact form can integrate with our CRM software
                  (Salesforce), this would be great.
                </p>
                <p className="font-semibold pt-4">Technical requirements</p>
                <p>
                  Our company has a web portal which we'd like to link to from
                  the website. We're not sure what's involved in this but would
                  like to look at this as an option. Could be a stage 2 option
                  but an upfront price guide would be appreciated.
                </p>{" "}
                <p className="font-semibold pt-4">Reference websites</p>
                <p>Our competitor is: https://www.pwc.com.au/</p>
                <p>
                  We're ten times smaller than PWC but feel a web design that is
                  a little like this would do our job well: https://llh.com.au/
                </p>{" "}
                <p className="font-semibold pt-4">Primary points of contact</p>
                <p>Project lead: Joe Blogs - joe@blogs.com</p>
                <p>IT contact: Steve Blogs - steve@blogs.com</p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" mt-20 justify-center  flex">
          {" "}
          <Image src={wireframing} width={700} />
        </div>{" "}
        <div className="text-lg space-y-6 ">
          <h3 className="pt-20">Wireframing</h3>
          <p>
            Wireframing is a quick and easy way of working out how your website
            will work before we have a signed off web design concept or final
            content.
          </p>
          <p>
            You can find some{" "}
            <a href="https://looka.com/blog/wireframe-examples/">
              examples of web design wireframes here.
            </a>
          </p>
          <p>
            Wireframing tends to be reserved for bigger budget projects which
            allocate more time to planning, feedback cycles and UX innovations.
          </p>
          <p className="quote">
            This gives our web designers an opportunity to explore a few ideas
            with the client without the cost of mocking up each screen as a
            complete web design.
          </p>
          <p>
            Typically smaller budget web design jobs won't include a wireframing
            stage. Whilst there are some exceptions to this, most small budget
            projects will have a restricted design phase and can't afford the
            extra costs associated with UX innovations.
          </p>
          <h3 className="pt-20">Design</h3>
          <p>
            Most websites use one of two approaches when it comes to the design
            phase:
          </p>
          <li>An "off the shelf" template / theme</li>
          <li>A custom web design</li>
          <p>
            √Whilst our web designers will make a recommendation towards one of
            these two approaches based upon your web design requirement
            specification, it can be helpful to know the pros and cons of each
            approach before you proceed.
          </p>
          <h4>Using an "off the shelf" template / theme for your web design</h4>
          <p>
            An "off the shelf" template/theme is a pre-coded web design which
            can be applied to your website.
          </p>
          <p>
            The process of applying a theme to your website is very simple. We
            start by shortlisting a handful of themes from{" "}
            <a href="https://themeforest.net/"> an online theme library. </a> We
            then send these to our client and invite them to browse the theme
            library for any other web design templates they like the look of.
          </p>
          <p>
            Once we have a final list of options, we then work through each
            option with our client to help select the best web design template
            for their needs
          </p>
          <p>
            Once selected, our web designers will then do some basic
            customisations to the theme so that it fits with our client's
            branding and then load it to their CMS.
          </p>
          <h4>
            Advantages of using a template / theme for your website design
          </h4>
          <p>
            There are big cost and time savings associated with using a
            pre-coded theme. As you're working with a finite selection of design
            options, there are fewer decisions to be made and a reduced number
            of design refinement cycles. As a result, using a web design
            template for your new website can be a great way to get a website
            online faster and for less cost.
          </p>
          <h4>
            Disadvantages of using a template / theme for your website design
          </h4>
          <p>
            As the quality of themes can vary, it's easy to select a web design
            template which is a little buggy on older browsers or mobile
            devices. Often these issues can only be detected after installing
            the theme and may require special features like animations to be
            removed so that your website supports a broad cross-section of web
            browsers.
          </p>
          <p>
            As the quality of themes can vary, it's easy to select a web design
            template which is a little buggy on older browsers or mobile
            devices. Often these issues can only be detected after installing
            the theme and may require special features like animations to be
            removed so that your website supports a broad cross-section of web
            browsers.
          </p>
          <p className="quote">
            Another common problem we find is that a lot of themes don't use the
            best coding practices.
          </p>
          <p>
            This means websites which use themes can be slower to load, fail to
            achieve certain accessibility standards and perform poorly in
            Google.
          </p>
          <p>
            Finally, when selecting a theme, it's always worth remembering that
            the best themes can be pretty common. This means you may end up
            seeing other website's which look the same as yours given you've all
            decided to use the same web design.
          </p>
          <h4>Using a custom web design</h4>
          <p>
            If your business needs to compete effectively online, using a custom
            web design is always the best option.
          </p>
          <p>
            Websites which use a custom design can better balance the elements
            your web design requires. This means better Google rankings, faster
            page load speed, broader browser support, lower cost maintenance and
            greater design flexibility.
          </p>{" "}
          <p>
            This is because when our web designers are creating your website,
            they're thinking about critical issues such as:
          </p>
          <li>How to we ensure this key element looks great on mobile</li>
          <li>
            What can we do to make sure the pages load as fast as possible
          </li>
          <li>
            Does this layout provision for all the SEO requirements this website
            will need
          </li>
          <li>
            What else could be done to increase the visual appeal of this layout
          </li>
          <li>
            How do we make this web design as easy as possible for our client to
            manage using their CMS software
          </li>
          <p>
            None of these questions are asked when you implement a theme-based
            design. This is why companies who choose to use a theme-based web
            design are initially happy with the price and delivery time but can
            be later disappointed that they didn't get the results they were
            hoping for.
          </p>{" "}
          <h4>The custom web design process</h4> <p></p>
          <p>
            When we design a new website for a client, we like to start with a
            design briefing session in our studio. This allows us to better
            understand the client's business and the target markets they're
            trying to attract.
          </p>
          <p>
            Once we're clear on what our client needs, we'll then do a selection
            of web design layouts which will cover the critical sections of the
            website.
          </p>
          <p>
            For example, if it's an e-commerce website, we would potentially
            provide the following web design layouts:
          </p>
          <li>Homepage: mobile and desktop designs</li>
          <li>Product listing page: mobile and desktop designs</li>
          <li>Product detail page: mobile and desktop designs</li>
          <li>Kitchen sink layout: mobile and desktop design</li>
          <p>
            To avoid cost blowouts, we will rarely do a web design of every
            screen you come across as this can cost more than actually building
            the website.
          </p>{" "}
          <p>
            Instead, where possible, we'll use examples of other work we've done
            to help fill the gaps. For example, if there is a shopping cart
            process which we think will work fine for a particular site, we will
            identify this with our client and then use this as the basis for
            that section of the website.
          </p>{" "}
          <p>
            Likewise, if the client has a particular shopping cart process they
            want us to use which is nothing like anything we've built before,
            we'd likely wireframe this element instead of designing it in full.
            As our wireframes can be interactive, this will give our client a
            clear idea of how this section will work without requiring a full
            visual mockup before we build it.
          </p>{" "}
          <p>
            Naturally, if we have a client who is happy to spend the time and
            bear the costs of mocking up all the screens before we proceed with
            a web design build, we're happy to do this too but it will add
            considerable costs to things.
          </p>{" "}
          <h4>Advantages of using a custom web design</h4>{" "}
          <p>
            Custom web designs are tailor-made to your needs. This gives you a
            considerable advantage over your competition as your site will be
            able to load faster, including more elements which are optimised for
            search engines (SEO), be easier to manage and promote your message
            more clearly.
          </p>{" "}
          <h4>Disadvantages of using a custom web design</h4>{" "}
          <p>
            The custom web design phase can require anywhere from two weeks to
            three months to complete. It also costs more as our web designers
            will be working on your project for this length of time.
          </p>{" "}
          <p className="">
            This said, if you have a new web design project and you are a little
            cost-conscious but feel that the advantages of having a custom web
            design would be beneficial for you, please contact us. We can always
            send through a web design quote with costs for both options.
          </p>
          <h4>Questions about the design process</h4>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="What is a kitchen sink layout?">
              <div className="space-y-4">
                <p>
                  {" "}
                  Some of the better content management systems (CMS) will allow
                  you to create page layouts without adhering to a rigid design
                  structure.
                </p>
                <p>
                  {" "}
                  When we design for these systems, rather than mocking up each
                  page, what we'll do is create a single layout which includes
                  all the possible components you could add to a single content
                  page.
                </p>{" "}
                <p>
                  {" "}
                  This gives our client and our web developers a clear idea of
                  how these elements will look on the live website without
                  mocking up a range of different design layouts.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="                What if I'm unhappy with the web design concept?">
              <div className="space-y-2">
                {" "}
                <p>
                  Before we start creating your website design, we go to great
                  lengths to first understand your organisation and what it's
                  needs are.
                </p>
                <p className="">
                  As a result, most of our clients respond positively to our
                  initial design concepts, allowing us to expand upon these and
                  quickly move on to the next phase.
                </p>
                <p className="">
                  However, if we miss the mark, we'll just arrange another
                  design briefing meeting to help better clarify our
                  understanding and then revise your design concept accordingly.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="                  What resources do you need to start designing?">
              <div className="space-y-2">
                {" "}
                <p>
                  This can vary quite a bit depending upon the project. A
                  general rule is to try and share with us anything you think
                  might be useful.
                </p>
                <p className="">
                  Often we'll try and source a copy of our client's logo and
                  branding guidelines before we start doing a web design
                  concept.
                </p>
                <p className="">
                  Outside of this, elements like videos, photography, draft text
                  content, PDF brochures, printed flyers, etc can all assist our
                  web designers create your new web design layout.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" mt-20 justify-center  flex">
          {" "}
          <Image src={web} width={700} />
        </div>{" "}
        <div className="text-lg space-y-6 ">
          <h3 className="pt-20">Website Development</h3>
          <p>
            The website development phase can actually begin quite early in the
            web design process but the bulk of the work can’t proceed until your
            web design is fully signed off and your content is in a position
            where it can be loaded into the site.
          </p>
          <p>
            The web development phase normally focuses on just a few key areas:
          </p>
          <li>Design implementation</li>
          <li> Meeting functional requirements</li>
          <li> Implementing SEO best practices</li>
          <li> Promote your website effectively on social networks</li>
          <h4>Design Implementation</h4>
          <p>
            Once you have a signed off website design, our web developers will
            start the process of coding this design into your new website. This
            will involve making it work on a mobile responsive framework and
            testing it on a range of different devices and web browsers.
          </p>
          <p>
            A key element to the design implementation will be fleshing out the
            sections of the website which haven't had website mockups made for
            them.
          </p>
          <p>
            As we use Cascading Style Sheets on your website, a lot of the
            design we've done in these other areas of your website will
            naturally flow through to these sections which haven't had a formal
            layout designed for it.
          </p>
          <p>
            This said, you will have an opportunity during the full site review
            phase to provide feedback on these areas and discuss any sections
            you feel could be fine tuned.
          </p>
          <h4>Functional requirements</h4>{" "}
          <p>
            The functional requirements associated with your website covers
            everything from how your menus work through to the accuracy of the
            site wide search tool. Our web developers will work there way
            through every component in the web design scope with the goal of
            having these all ready for you to review in the full website review
            phase.
          </p>
          <h4>Implementing SEO best practices</h4>
          <p>
            When our website developers build your new website, it is critical
            for them to include a range of features which will help you
            naturally compete in Google's search results.
          </p>
          <p>This includes features such as:</p>
          <li>Auto-generated XML sitemaps</li>
          <li>Control over which pages can be indexed by Google</li>
          <li>
            Canonical meta data to protect against duplicate content issues
          </li>
          <li>
            Semantic markup to help Google better understand the hierarchy of
            your content
          </li>
          <li>
            Efficiently reducing the size of media assets so that your pages
            load faster
          </li>
          <li>
            Reducing the number of database queries so that your website loads
            faster
          </li>
          <li>Including asynchronous scripts to avoid render blocking</li>{" "}
          <li>
            Adding structured data blocks to your site to help Google understand
            how to use certain information you've included
          </li>
          <p>
            We also put in place all the tools you need to be able to control
            the page titles and descriptions used by Google for each page of
            your website. Some of our CMS tools also include previews of this
            data so you can see exactly how much text will fit in each of these
            areas.
          </p>
          <h4>Promoting your website on social networks</h4>
          <p>
            When someone on Facebook shares a page on your website, there are
            things your web developer can do to help make this link look more
            appealing.
          </p>
          <p>
            As social media traffic can be a significant source of traffic to a
            website, ensuring that the content being shared is looking it's best
            is a must.
          </p>
          <p>
            This why our website developers will include Open Graph and Twitter
            meta data tags on each of your pages. These tags will allow you to
            define how the content on your website looks on social media sites
            like Facebook including the image people see, the page title that is
            used and the description that appears.
          </p>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Do your website developers do projects outside of just web design?">
              <div className="space-y-4">
                <p>
                  Our website developers have considerable expertise in a range
                  of digital disciplines from server management to the
                  development of web applications.
                </p>
                <p>
                  {" "}
                  To learn more about our website development services and how
                  they might be able to help your company, please contact with
                  us.
                </p>{" "}
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Do I really need a web developer?">
              <div className="space-y-2">
                {" "}
                <p>
                  We appreciate that tools like Wix and Weebly have allowed a
                  lot of businesses to build their own websites without
                  involving a website developer.
                </p>
                <p className="">
                  The key difference between what our web developers can do for
                  you and what these tools provide comes down to results.
                </p>
                <p className="">
                  At the end of the day, people have generally found it
                  difficult to get the results they are after without
                  professional assistance
                </p>
                <p className="">
                  If you're stuck looking for a way to improve how well your
                  website is performing, getting in touch with one of our
                  website developers is a great place to start.{" "}
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" mt-20 justify-center  flex">
          {" "}
          <Image src={content} width={700} />
        </div>{" "}
        <div className="text-lg space-y-6 ">
          <h3 className="pt-20">Content Handling</h3>
          <p>
            The content which goes into your new website will come in three
            different forms:
          </p>
          <h4>New Content</h4>
          <p>
            A new website will often require new content to be written, new
            photos to be sourced and new reference material to be obtained.
          </p>
          <h4>Existing Content</h4>
          <p>
            This is content that might already exist in some form. For example,
            maybe you already have some professionally written copy from a
            previous brochure or annual report. Likewise, it could be there is
            some great content on your old website that can be reused.
          </p>
          <h4>External Data Sources</h4>
          <p>
            This is content which originates from a source outside of your
            company. For example, it might be your website pulls in events from
            a third party system. This is considered an external data source.
          </p>
          <p>
            When our web design team sets up your CMS software, they will create
            a place holder for every page on your website. The content which
            goes into each of these pages needs to be handled by someone in some
            way. This is Content Handling.
          </p>
          <h4>Who does what?</h4>
          <p>
            In the previous stages, the emphasis has been on our web designers
            doing some work and then our client reviewing this.
          </p>
          <p>
            The content handling stage is distinctly different as it's more of a
            collaborative effort.
          </p>{" "}
          <p className="quote">
            For most of our client's, the content handling phase is when they
            will first start using their new CMS software in full effect.
          </p>
          <p>
            This is because, whilst our team will help load in certain blocks of
            content to get things started, it's a foregone certainty that our
            clients will want to make changes to this content and the CMS
            provides the easiest and fastest way to do this.
          </p>
          <p>
            Also, when our client's load in content themselves, this reduces our
            content handing costs and thus can help reduce your overall web
            design fee.
          </p>
          <p>
            By this measure, our primary role during this phase will be to
            provide the support you need to get all the content into your
            website. This means helping you make the most of your CMS tools and
            solving any issues that you may encounter along the way.
          </p>
          <p>
            The exceptions to this will be importing data from external data
            sources.
          </p>
          <p>
            This aspect will be handled by our web developers who will set up an
            import system within your CMS software to automatically pull in this
            external data.
          </p>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="                  What if I don't want to use a Content Management System (CMS)?">
              <div className="space-y-4">
                <p>
                  Whilst it's rare that we'll ever build a website without some
                  sort of CMS associated with it, some of our clients don't want
                  to manage their own site and would rather we do everything for
                  them.
                </p>
                <p>
                  In these situations, we will do all of your content entry into
                  the website. It may be however that when it comes time for
                  someone to proof the site, any content changes your team
                  requires are still made by your team using the CMS software.
                  This is because it is far more efficient to work like this
                  than writing up each edit in an email and sending them through
                  for one of our web designers to update.
                </p>{" "}
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Do you provide copy writing services?">
              <div className="space-y-2">
                {" "}
                <p>
                  Writing high quality content is becoming a critical
                  requirement for new websites. Google's tools now go beyond
                  just scanning for keywords and instead are considered to
                  critique the engagement and interest levels of a piece of
                  content.
                </p>
                <p className="">
                  As writing engaging content isn't something that comes
                  naturally to everyone, we can help arrange a professional copy
                  writer to assist you with creating all the new content you
                  require for your website.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 2"
              title="If you don't write my content, how will it be search engine optimised?">
              <div className="space-y-2">
                {" "}
                <p>
                  Given the way our web designers build our websites, any text
                  you enter into your CMS software will be indexable by Google.
                </p>
                <p className="">
                  This said, people are naturally inclined write in ways which
                  omit opportunities to increase their Google rankings.
                </p>
                <p>
                  This is why when you work with our web design team, we will
                  help you understand how to avoid doing this and some of the
                  "tricks" you need to know about to assist with creating
                  content which will give you that SEO boost you're after.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" mt-20 justify-center  flex">
          {" "}
          <Image src={review} width={700} />
        </div>{" "}
        <div className="text-lg space-y-6 ">
          <h3 className="pt-20">Full Website Review</h3>
          <p>
            Once your website is around 90% complete, we ask our clients to
            start the review process whilst our web designers finish building
            your website.
          </p>
          <p>
            This will involve reviewing the website on as many devices as you
            can lay your hands on. This means tablets, phones, desktop
            computers, etc.
          </p>
          <p>
            This is critical, as the websites our web designers build are all
            responsive web designs, which means it's important for our clients
            to get a feel for how their website will look under a range of
            different conditions.
          </p>
          <p>
            When it comes to providing feedback, we use a tool called Bugherd to
            help with this.
          </p>
          <p>
            Bugherd is great because allows our clients to click on any part of
            their website and give us specific feedback relating to this
            individual element.
          </p>
          <p>
            This then goes straight into a ticket system which our web designers
            can delegate to the correct person and then make the changes to the
            website.
          </p>
          <p>
            This process is far easier for our clients and results in us being
            able to address more changes faster.
          </p>
          <h3 className="pt-10">Content Lock Down & Testing</h3>
          <p>
            Throughout the web design process, a lot of changes get made. Due to
            the nature of how a website works, each time something changes
            somewhere, it can sometimes also effect other parts of your website
            which may not have been considered at that time.
          </p>
          <p>
            The Content Lock Down phase allows us to reduce the level and
            frequency of changes on your website so that we can find any
            sections that have been overlooked and correct any issues that may
            have popped up.
          </p>
          <p>
            Once everything is looking ready for launch, we then start our
            pre-launch testing process.
          </p>
          <p>
            Whilst we have a great suite of testing devices in our Adelaide web
            design studio, we also use a specialised website testing tool called
            Browserstack which allows us to check your website on almost every
            popular mobile, tablet and desktop web browser.
          </p>{" "}
          <p>
            Only once we've got everything compliant with a minimum browser
            support specification can we then be confident your new website will
            work reliably on all the different platforms and devices which will
            visit your website.
          </p>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="What happens if I find an issue during the lock down period?">
              <div className="space-y-4">
                <p>If it's small, we can fix it.</p>
                <p>
                  If it's big, we'll fix it but we may need to restart the lock
                  down period again.
                </p>{" "}
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Will all this testing mean my website will launch without any issues?">
              <div className="space-y-2">
                {" "}
                <p>
                  Your website will consist of thousands of lines of code and
                  will have undergone countless variations during the time our
                  web designers have been building it. However, all of our hard
                  work and testing is to help avoid any big issues from arising.
                  Any little things that do slip under everyone's radar will no
                  doubt get picked up shortly after launch and can be addressed
                  at that time.
                </p>
                <p className=""></p>
                <p>
                  {" "}
                  Given this, it's always likely that little things will get
                  overlooked.
                </p>
                <p>
                  {" "}
                  When it launches, it will need to work on a range of different
                  screen configurations, operating systems, web browsers and
                  internet connections.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" mt-20 justify-center  flex">
          {" "}
          <Image src={launch} width={700} />
        </div>
        <div className="text-lg space-y-4">
          <h3 className="mt-20">Launch</h3>
          <p>
            When we chat to our clients about launching their website, we often
            refer to it as “flicking the switch” but there’s actually a little
            more to this process.
          </p>
          <p>
            When a website goes live, it is the first time we will see all of
            your new web design code running on your live production domain.
          </p>
          <p>
            As elements like web fonts and maps having licensing associated with
            the website’s domain, launch day can be the first chance we get to
            review these licenses are setup correctly.
          </p>
          <p>
            Likewise, reporting tools like Google Analytics and conversion
            tracking codes for SEM (Search Engine Marketing) tools like Google
            Adwords can’t be tested until we launch.
          </p>
          <h4>Website Speed</h4>
          <p>
            Another change you’ll see will be to the performance of your new
            website.
          </p>
          <p className="quote">
            Depending upon your server configuration, your live website should
            be faster than the development version you’ve been reviewing.
          </p>
          <p>
            This increase in website speed is due to a number of reasons but two
            key ones are:
          </p>
          <li>Caching</li>
          <li>Code compression</li>
          <p>
            Caching is a feature which allows your website to load faster. It
            does this by saving your website in a format which makes it faster
            for the server to display.
          </p>
          <p>
            We don’t use caching on your development server as it can prevent
            you from seeing the changes you’ve made right after you’ve made
            them.
          </p>{" "}
          <p>
            However, on your live website, this isn’t an issue, so we can cache
            your website heavily to help it load as fast as possible.
          </p>{" "}
          <p>
            Code compression is a process of shrinking down the code your
            website uses so that it can download more efficiently for your
            websites visitors.
          </p>{" "}
          <p>
            We don’t use code compression on your development server as it can
            make it harder to debug issues.
          </p>{" "}
          <p>
            However, on your production website, it makes sense to shrink the
            code down as small as possible so that your new website loads
            quickly and provides your visitors with the best online experience
            possible.
          </p>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="What server configuration can make my website slower?">
              <div className="space-y-4">
                <p>
                  In some cases, our client's will insist on independently
                  managing their own hosting."
                </p>
                <p>
                  As the website hosting configuration can greatly affect how
                  well your website works, it will be up to your server admin to
                  ensure your new website is at least as fast, if not faster,
                  than the version of the website we have running on our
                  development server.
                </p>{" "}
                <p>
                  If website performance is important to you, it's always best
                  to involve your web designer in the hosting selection process.
                  This will allow us to help put in a place a hosting strategy
                  which will allow your website to run at an optimum speed.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="What is a “live production domain”?">
              <div className="space-y-2">
                {" "}
                <p>This is the web address people use to view your website.</p>
                <p>
                  When we are developing your website, it will have a different
                  “development” (dev) domain. This will allow your old website
                  to remain live whilst your new website is being designed.
                </p>
                <p>
                  {" "}
                  Your production domain will only be used once we have launched
                  your website. Until this time, you'll be able to have this
                  pointing at your old website or website holding page.
                </p>
                <p>
                  {" "}
                  When it launches, it will need to work on a range of different
                  screen configurations, operating systems, web browsers and
                  internet connections.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 2"
              title="Can I launch my website on a Friday?">
              <div className="space-y-2">
                {" "}
                <p>
                  Whilst the end of the work week feels like a natural deadline
                  to put on the launch of your website, it's generally regarded
                  as the worst day of the week to launch something
                </p>
                <p>The reasoning behind this comes down to support.</p>
                <p>
                  During the working week, we have easy access to everyone who
                  helped build your website. On weekend however, we have limited
                  support options.
                </p>
                <p>
                  Planning to launch your website right before we lose the
                  majority of your support options doesn't make a lot of sense.
                  For this reason, we encourage companies to consider launching
                  on Mondays. No better way to start the week than with a big
                  website launch.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 2"
              title="          Will I have to pay a support fee if i find a bug after launch?">
              <div className="space-y-2">
                {" "}
                <p>
                  After we launch a website, we generally provide a twelve week
                  warranty window whereby, any issues which arise will be
                  considered part of the website design project scope.
                </p>
                <p>Exceptions to this are:</p>
                <li>
                  New work which was commissioned after the primary project was
                  launched; this will have it's own warranty window
                </li>
                <li>Any work (or system changes) performed by someone else</li>
                <p>
                  Please note that this is an indicative guide only. Small
                  projects often have a smaller warranty (4 weeks) window and
                  very large projects can have greater warranty / support
                  periods.
                </p>
                <p>
                  Please feel free to clarify what the warranty window will be
                  for your web design project with your website designer. You
                  may also like to review our standard terms and conditions for
                  additional information.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="text-light pt-32">
        {" "}
        <ContactUs />
      </div>
    </div>
  );
};

export default page;
