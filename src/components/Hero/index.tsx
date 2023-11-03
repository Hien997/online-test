import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: "url(/images/hero/hero.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[100px] dark:bg-gray-dark md:pb-[300px] md:pt-[160px] xl:pb-[400px] xl:pt-[200px] 2xl:pb-[500px] 2xl:pt-[240px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-8xl font-normal uppercase leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                We are a leading
              </h1>
              <h1 className="mb-5 text-8xl font-bold uppercase leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                real estate <span className="text-primary"> agency</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
