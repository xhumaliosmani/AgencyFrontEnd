import React from "react";
import Feature1 from '../../public/images/Features/f1.png'
import Feature2 from "../../public/images/Features/f2.png";
import Feature3 from "../../public/images/Features/f3.png";
import Feature4 from "../../public/images/Features/f4.png";
import Feature5 from "../../public/images/Features/f5.png";
import Feature6 from "../../public/images/Features/f6.png";
import FeatureB1 from "../../public/images/Features/fb11.png";
import FeatureB2 from "../../public/images/Features/fb22.png";
import Image from "next/image";

const Features = () => {
  return (
    <div>
      <section class="">
        <div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-center sm:text-5xl text-black">
              Empowering Business
            </h2>
            <p class="max-w-3xl mx-auto mt-4 text-xl text-center text-black">
              Growth Through Advanced Technology Solutions, Analytics and
              Professionaly Trained Personnel
            </p>
          </div>
          <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 class="text-2xl font-bold tracking-tight sm:text-3xl text-black">
                Inovation Begins Here
              </h3>
              <p class="mt-3 text-lg text-black">
                Unleash business growth with advanced technology solutions,
                optimizing operations, integrating innovative technologies, and
                receiving personalized support.
              </p>
              <div class="mt-12 space-y-12">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:dark:text-gray-900">
                      <Image src={Feature1} />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leading-6 text-black">
                      Advanced Algorithmic Solutions
                    </h4>
                    <p class="mt-2 text-black">
                      Our advanced algorithms optimize your operations, boosting
                      efficiency and profitability. Make data-driven decisions
                      with actionable insights.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:dark:text-gray-900">
                      <Image src={Feature2} />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leading-6 text-black">
                      Innovative Technology Integration
                    </h4>
                    <p class="mt-2 text-black">
                      Seamlessly integrate cutting-edge technologies like AI,
                      IoT, and cloud computing. Automate tasks, improve
                      communication, and unlock growth potential.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:dark:text-gray-900">
                      <Image src={Feature3} />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leading-6 text-black">
                      Trained Personnel Support
                    </h4>
                    <p class="mt-2 text-black">
                      Our trained experts ensure smooth implementation and
                      ongoing guidance. Leverage our software effectively with
                      personalized assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" class="mt-10 lg:mt-0">
              <Image
                src={FeatureB1}
                alt="featureimage1"
                class="hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto z-20 rounded-lg shadow-lg dark:dark:bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div class="lg:col-start-2">
                <h3 class="text-2xl font-bold tracking-tight sm:text-3xl text-black">
                  Data-Driven Decisions, Personalized Solutions
                </h3>
                <p class="mt-3 text-lg text-black">
                  Data-driven decisions. Personalized solutions. Continuous
                  innovation. Propel your business forward with our powerful
                  analytics, tailored to your needs, and future-proofed by our
                  commitment to innovation.
                </p>
                <div class="mt-12 space-y-12">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:dark:text-gray-900">
                        <Image src={Feature4} />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium leading-6 text-black">
                        Powerful Analytics Capabilities
                      </h4>
                      <p class="mt-2 text-black">
                        Extract valuable insights from your data with
                        comprehensive visualizations. Monitor KPIs, track
                        trends, and identify areas for improvement.
                      </p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:dark:text-gray-900">
                        <Image src={Feature5} />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium leading-6 text-black">
                        Personalized Solutions
                      </h4>
                      <p class="mt-2 text-black">
                        Tailored software solutions to address your unique
                        needs. Achieve sustainable growth by aligning with your
                        business objectives.
                      </p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:dark:text-gray-900">
                        <Image src={Feature6} />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium leading-6 text-black">
                        Continuous Innovation and Upgrades
                      </h4>
                      <p class="mt-2 text-black">
                        Stay ahead with the latest features and functionalities.
                        Adapt to market dynamics and gain a competitive edge
                        through continuous innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Image
                  src={FeatureB2}
                  alt="featureimage2"
                  class="hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
