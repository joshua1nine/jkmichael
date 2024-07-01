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
          Firelake Golf
        </h1>
        <Image
          src="/firelake_golf_case_hero.png"
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
              <p>Web Design</p>
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
              <p>Golf</p>
            </div>
            <div>
              <h6 className="text-sm font-bold uppercase text-[#D1D5DB]">
                Tools
              </h6>
              <p>Figma, React, Next.js, Vercel</p>
            </div>
            <div>
              <Link
                href="https://firelakegolf.com/"
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
                Firelake Golf is an established Oklahoma golf course and event
                venue. However they did not have a dedicated website. There main
                goal was to improve visibility, increase course plays and
                streamline event signups.
              </p>
            </article>
            <article className="space-y-2">
              <h2 className="text-[#D1D5DB] text-xl uppercase font-semibold">
                Solution
              </h2>
              <p>
                After meeting with the owners of the course and doing research
                of potential users interviews with fellow golfers I began work
                on designing and developing a website that would improved course
                plays with a more direct call to action. A conditional event
                signup form was created to reduce the amount of time the owner
                spent on the phone to asking customers basic pre-booking
                information. Reducing the owners workload.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-3xl md:text-4xl mb-6">Key Features</h2>
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            Clear Call to Action
          </h3>
          <p className="mb-8">
            The main goal of the website’s landing page was to increase tee
            times. This was achieved by making the hero call to action center
            around booking a tee time. Further more directions and the current
            weather aimed to encourage players get out and play!
          </p>
          <Image
            src="/firelake_golf_cta_screenshot.png"
            width={1024}
            height={438}
            alt="Firelake golf landing page screenshot."
            className="rounded w-full object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl text-orange mb-4">
            Conditional Event Booking Form
          </h3>
          <p className="mb-8">
            Before the website the owner answered all question via phone or
            generic email. I designed developed a contact form that categorized
            the email sent from the website into General Question, Book A Venue,
            and Book a Tournament. The form would update to include relevant
            questions based on the users inquiry. To improve the user experience
            the book and event page included links to book a venue that would
            automatically direct them to the contact page with th appropriate
            form preselected.
          </p>
          <Image
            src="/firelake_golf_event_booking_screenshot.png"
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
            image="/cpnhouseofhope_prod-card.jpg"
            title="House of Hope"
            description="A warm and inviting website helping women of domestic abuse."
            link="/case/house-of-hope"
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
