import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const AboutSectionOne = () => {
  return (
    <section id="about" className="bg-slate-100 pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="flex w-full justify-center">
              <SectionTitle
                title="If you're in need of rental services"
                highlight="rental"
                paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                mb="44px"
                center
                width="408px"
              />
            </div>
          </div>
          <div className="relative flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-14">
            <div className="flex max-w-[320px] shrink-0 snap-start scroll-mx-6 flex-col gap-[30px]">
              <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              <div className="flex flex-col gap-3">
                <div className="text-4xl font-medium">Forest Retreat</div>
                <div className="text-lg">
                  Are you looking to find your dream home or invest in a
                  lucrative property.
                </div>
              </div>
              <Link href="/" className="flex gap-2">
                <span className="">BOOK NOW</span>
                <Image
                  src="/images/icons/arrow-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex max-w-[320px] shrink-0 snap-start scroll-mx-6 flex-col gap-[30px]">
              <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              <div className="flex flex-col gap-3">
                <div className="text-4xl font-medium">Forest Retreat</div>
                <div className="text-lg">
                  Are you looking to find your dream home or invest in a
                  lucrative property.
                </div>
              </div>
              <Link href="/" className="flex gap-2">
                <span className="">BOOK NOW</span>
                <Image
                  src="/images/icons/arrow-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex max-w-[320px] shrink-0 snap-start scroll-mx-6 flex-col gap-[30px]">
              <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              <div className="flex flex-col gap-3">
                <div className="text-4xl font-medium">Forest Retreat</div>
                <div className="text-lg">
                  Are you looking to find your dream home or invest in a
                  lucrative property.
                </div>
              </div>
              <Link href="/" className="flex gap-2">
                <span className="">BOOK NOW</span>
                <Image
                  src="/images/icons/arrow-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex max-w-[320px] shrink-0 snap-start scroll-mx-6 flex-col gap-[30px]">
              <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              <div className="flex flex-col gap-3">
                <div className="text-4xl font-medium">Forest Retreat</div>
                <div className="text-lg">
                  Are you looking to find your dream home or invest in a
                  lucrative property.
                </div>
              </div>
              <Link href="/" className="flex gap-2">
                <span className="">BOOK NOW</span>
                <Image
                  src="/images/icons/arrow-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex max-w-[320px] shrink-0 snap-start scroll-mx-6 flex-col gap-[30px]">
              <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              <div className="flex flex-col gap-3">
                <div className="text-4xl font-medium">Forest Retreat</div>
                <div className="text-lg">
                  Are you looking to find your dream home or invest in a
                  lucrative property.
                </div>
              </div>
              <Link href="/" className="flex gap-2">
                <span className="">BOOK NOW</span>
                <Image
                  src="/images/icons/arrow-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex max-w-[320px] shrink-0 snap-start scroll-mx-6 flex-col gap-[30px]">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
              <div className="flex flex-col gap-3">
                <div className="text-4xl font-medium">Forest Retreat</div>
                <div className="text-lg">
                  Are you looking to find your dream home or invest in a
                  lucrative property.
                </div>
              </div>
              <Link href="/" className="flex gap-2">
                <span className="">BOOK NOW</span>
                <Image
                  src="/images/icons/arrow-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
