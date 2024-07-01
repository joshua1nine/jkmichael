import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LetsTalk } from "../../../components/LetsTalk";
import { ProjectCard } from "../../../components/ui/ProjectCard";

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl space-y-16 md:space-y-24">
      <section>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">
          Potawatomi
        </h1>
        <Image
          src="/cpn_case_hero.png"
          width={1024}
          height={438}
          alt="Firelake golf landing page screenshot."
          className="rounded-md mb-4 md:mb-8 object-cover"
        />
        <div className="flex flex-col gap-6 md:flex-row">
          <article className="bg-gray-400 p-6 space-y-6 rounded-md md:w-72">
            <div>
              <h6 className="text-sm font-bold uppercase text-[#D1D5DB]">
                Project Type
              </h6>
              <p>Finish Existing Design</p>
            </div>
            <div>
              <h6 className="text-sm font-bold uppercase text-[#D1D5DB]">
                Roles
              </h6>
              <p>UI/UX Designer, Developer</p>
            </div>
            <div>
              <h6 className="text-sm font-bold uppercase text-[#D1D5DB]">
                Industry
              </h6>
              <p>Government</p>
            </div>
            <div>
              <h6 className="text-sm font-bold uppercase text-[#D1D5DB]">
                Tools
              </h6>
              <p>Figma, WordPress, PHP</p>
            </div>
            <div>
              <Link
                href="https://cpnhouseofhope.com/"
                target="_blank"
                className="text-center text-white bg-[linear-gradient(to_right,#ec6b2d,#f08c5b)] text-sm w-52 font-bold px-4 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95"
              >
                View Website
              </Link>
            </div>
          </article>
          <div className="flex-1 space-y-6">
            <article className="space-y-2">
              <h2 className="text-[#D1D5DB] text-xl uppercase font-semibold">
                Problem
              </h2>
              <p>
                Citizen Potawatomi Nation was in the middle of a full redesign
                of there main government website. After hiring a design agency
                to redesign the site they only received half of the deliverables
                as well as missing mocks for key features. The design needed to
                finished based on the incomplete design
              </p>
            </article>
            <article className="space-y-2">
              <h2 className="text-[#D1D5DB] text-xl uppercase font-semibold">
                Solution
              </h2>
              <p>
                As the UX designer and developer on staff I was task with
                completing the design. This included adding information rich
                pages, a search centric call to action, and the folding of a
                stand alone job board website into the main website.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-3xl md:text-4xl mb-6">Key Features</h2>
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            Search Centric CTA
          </h3>
          <p className="mb-8">
            A main pain point of the old website was how difficult if was to
            find information. So I after doing some user research I found the
            the majority of users preferred search in plain text for what they
            needed. Given the main goal of the site was to find information it
            was decided to put the search front and center in the hero section
            of the home page as well as in the header of the every page. In
            addition when space provided it curated quick links were added to
            further help user serach in demand topics.
          </p>
          <Image
            src="/cpn_cta_screenshot.png"
            width={1024}
            height={438}
            alt="Firelake golf landing page screenshot."
            className="rounded w-full object-cover object-top"
          />
        </div>
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            Navigating Information Dense Pages
          </h3>
          <p className="mb-8">
            Being a government website information about local enterprises and
            services was abundant. I ensured that all information was
            categorized and easily accessible to all users.
          </p>
          <Image
            src="/cpn_info_screenshot.png"
            width={1024}
            height={438}
            alt="Firelake golf landing page screenshot."
            className="rounded w-full object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            New Home for Jobs
          </h3>
          <p className="mb-8">
            I successfully integrated a standalone job board website into an
            existing government site, meticulously ensuring that no information
            was lost in the transition. This integration seamlessly adopted the
            design language and user experience standards of the government
            site, maintaining consistency and usability.
          </p>
          <Image
            src="/cpn_jobs_screenshot.png"
            width={1024}
            height={438}
            alt="Firelake golf landing page screenshot."
            className="rounded w-full object-cover object-top"
          />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-5xl mb-8 text-center">More Projects</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <ProjectCard
            id={1}
            image="/laborsync_prod-card.png"
            title="Labor Sync"
            description="Clean, intuitive, and feature rich SAAS web app."
            link="/case/labor-sync"
          />
          <ProjectCard
            id={1}
            image="/firelakegolf_prod-card.jpg"
            title="Firelake Golf"
            description="A stunning Golf course marketing website."
            link="/case/firelake-golf"
          />
          <ProjectCard
            id={1}
            image="/cpnhouseofhope_prod-card.jpg"
            title="House of Hope"
            description="A warm and inviting website helping women of domestic abuse."
            link="/case/house-of-hope"
          />
        </div>
      </section>
      <LetsTalk />
    </div>
  );
}
