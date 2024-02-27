import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="mb-36 md:mb-44 lg:64">
      <div>
        <h2 className="mb-8 lg:hidden">Who am I?</h2>
        <div className="lg:flex lg:flex-row-reverse">
          <div className="flex justify-center mb-4 lg:block lg:ml-2">
            <Image
              className="rounded-lg"
              width={400}
              height={400}
              src="/portrait.jpg"
            />
          </div>
          <article className="lg:flex-1">
            <h2 className="mb-8 hidden lg:block">Who am I?</h2>
            <div className="flex justify-center lg:justify-start">
              <p className="mb-12 leading-7 text-lg max-w-2xl">
                Welcome to Michael Web Solutions! I'm Joshua, your go-to
                full-stack freelance web developer, dedicated to crafting
                seamless user experiences for the digital world. Let's transform
                your business ideas into stunning, bespoke websites tailored to
                your unique needs. From concept to launch, I'm here to elevate
                your online presence and solve your software challenges. Let's
                collaborate and bring your vision to life!
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start">
              <img
                src="/icons/html_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="html"
              />
              <img
                src="/icons/css_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="css"
              />
              <img
                src="/icons/javascript-logo-svgrepo-com.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="css"
              />
              <img
                src="/icons/react_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="react"
              />
              <img
                src="/icons/figma_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="figma"
              />
              <img
                src="/icons/next_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="next.js"
              />
              <img
                src="/icons/node-svgrepo-com.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="node.js"
              />
              <img
                src="/icons/sanity_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="sanity"
              />
              <img
                src="/icons/vercel_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="vercel"
              />
              <img
                src="/icons/wordpress-svgrepo-com.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="vercel"
              />
              <img
                src="/icons/php-logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="vercel"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
