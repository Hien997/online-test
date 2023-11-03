import Link from "next/link";
import Image from "next/image";
import React from "react";

const SectionTitle = ({
  title,
  paragraph,
  highlight = "",
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  highlight?: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  const renderWithHighlight = (title: string, highlight: string) => {
    return title.replace(
      highlight,
      `<span class="text-primary">${highlight}</span>`,
    );
  };

  return (
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <div className={`flex gap-3 ${center ? "justify-center" : ""} mb-6`}>
          <Image src="/images/icons/arrow.svg" width={20} height={20} alt="" />
          <span className="text-xl font-bold">
            {center ? "Dreamer Home" : "Solutions"}
          </span>
        </div>

        <h2
          className="mb-4 text-[70px] font-normal capitalize !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
          dangerouslySetInnerHTML={{
            __html: renderWithHighlight(title, highlight),
          }}
        />
        {!center && (
          <div className="flex gap-[22px]">
            <Link
              href="/signup"
              className="h-fit  w-fit flex-none rounded-[160px] bg-black px-[30px] py-[11px] text-base font-medium capitalize text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover"
            >
              get started free
            </Link>
            <div className="text-lg !leading-relaxed text-body-color md:text-lg">
              {paragraph}
            </div>
          </div>
        )}
      </div>
  );
};

export default SectionTitle;
