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
          House of Hope
        </h1>
        <Image
          src="/hoh_case_hero.png"
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
              <p>Website Redesign</p>
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
              <p>Non-Profit</p>
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
                CPN House of Hope is a non-profit department that seeks to
                eliminate domestic violence by providing victims and the
                community with appropriate, effective services and programs.
                There website was old causing it to run slowly not allowing its
                users to quickly and effectively find vital information in
                crisis situation.
              </p>
            </article>
            <article className="space-y-2">
              <h2 className="text-[#D1D5DB] text-xl uppercase font-semibold">
                Solution
              </h2>
              <p>
                The main goal was to improve the sites performance and user
                experience. As well as make sure there user of the website could
                safety and quickly find the information they need. Unlike other
                websites where the more time spent on the site the better the
                desire here was to get women in trouble the information they
                need as fast a possible.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-3xl md:text-4xl mb-6">Key Features</h2>
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl text-orange mb-4">Safety First</h3>
          <p className="mb-8">
            Getting women in danger the information they need to get and stay
            safe is the paramount. The first decision we made was make sure
            emergency contact information if front and center. Also and exit but
            appears on every page to insure that if there abuser show up they
            can quickly replace the the page with another.
          </p>
          <Image
            src="/hoh_safety_screenshot.png"
            width={1024}
            height={438}
            alt="Firelake golf landing page screenshot."
            className="rounded w-full object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            Searchable Information
          </h3>
          <p className="mb-8">
            A key goal of the website identified early on was making the all the
            information quick and easy to find. On information rich pages I
            added a client side fuzzy search. This made finding the contact
            information fast since it did not require a full page for each
            search.
          </p>
          <Image
            src="/hoh_search_screenshot.png"
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
            image="/potawatomi_prod-card.png"
            title="Potawatomi"
            description="Information dense government website designed to inform"
            link="/case/potawatomi"
          />
        </div>
      </section>
      <LetsTalk />
    </div>
  );
}
