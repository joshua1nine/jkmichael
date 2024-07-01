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
          Labor Sync Dashboard
        </h1>
        <Image
          src="/ls_case_hero.png"
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
              <p>Dashboard Redesign</p>
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
              <p>SAAS, Time Management</p>
            </div>
            <div>
              <h6 className="text-sm font-bold uppercase text-[#D1D5DB]">
                Tools
              </h6>
              <p>Figma, FigJam, React, Astro, Sqlite, Turso</p>
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
                The company faced a significant challenge with an outdated web
                app that hindered its competitiveness in the modern app
                ecosystem. The app required a complete redesign to integrate new
                features, enhance user experience, and attract a broader user
                base. This transformation was crucial to meet contemporary
                standards and user expectations, ensuring the company's
                relevance and growth in a dynamic market.
              </p>
            </article>
            <article className="space-y-2">
              <h2 className="text-[#D1D5DB] text-xl uppercase font-semibold">
                Solution
              </h2>
              <p>
                Working closely with major stakeholders I defined their ideal
                version of the product into a full redesign. Taking into account
                there branding and desired features. I delivered user flow
                diagrams, wire framing, and hi-fidelity prototypes. Elevating
                the legacy app into modern polished user centric experience.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-3xl md:text-4xl mb-6">Ideation</h2>
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            User & Task Flows
          </h3>
          <p className="mb-8">
            Beginning with user and task flows was key given the breath of
            feature the app provided. I made sure to keep in mind that a user
            should be able to complete a task intuitively from any screen.
            Reducing frustrations and improving overall user satisfaction.
          </p>
          <Image
            src="/ls_task_flow_screenshot.png"
            width={1024}
            height={438}
            alt="Firelake golf landing page screenshot."
            className="rounded w-full object-cover object-top"
          />
        </div>
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            Lo-Fi Wire-frames
          </h3>
          <p className="mb-8">
            After all the user flows were considered and approved I moved on to
            wire framing. This was vital to insuring all old and new features
            and key data point were represented and easily accessible.
          </p>
          <Image
            src="/ls_wire_screenshot.png"
            width={1024}
            height={438}
            alt="Firelake golf landing page screenshot."
            className="rounded w-full object-cover object-top"
          />
        </div>
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            Design Library
          </h3>
          <p className="mb-8">
            As the design began to take shape a natural design library was
            develop. A comprehensive design library insured that as the feature
            set grew the design would continue to stay consistent.
          </p>
          <Image
            src="/ls_library_screenshot.png"
            width={1024}
            height={438}
            alt="Firelake golf landing page screenshot."
            className="rounded w-full object-cover object-top"
          />
        </div>
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            Hi-Fidelity Prototype
          </h3>
          <p className="mb-8">
            Based on stakeholder feedback, I created hi-fidelity prototype.
          </p>
          <Image
            src="/ls_prototype_screenshot.png"
            width={1024}
            height={438}
            alt="Firelake golf landing page screenshot."
            className="rounded w-full object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl text-orange mb-4">Comparison</h3>
          <Image
            src="/ls_comparison_screenshot.png"
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
            image="/potawatomi_prod-card.png"
            title="Potawatomi"
            description="Information dense government website designed to inform"
            link="/case/potawatomi"
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
