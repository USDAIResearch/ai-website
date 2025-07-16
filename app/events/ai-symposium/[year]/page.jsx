// cSpell: disable

"use client";
import Layout from "@/components/commons/Layout";
import Footer from "@/components/home/Footer";
import SymposiumNavbar from "@/components/home/SymposiumNavbar";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeftCircleIcon,
  ArrowUpCircleIcon,
  Award,
  Briefcase,
  CalendarIcon,
  CheckIcon,
  FileQuestion,
  GraduationCap,
  HandCoins,
  MapIcon,
  UsersIcon,
} from "lucide-react";
import ConferenceSchedule from "@/components/events/conference-schedule";
import StatsComponent from "@/components/events/stats-component";
import { Yanone_Kaffeesatz } from "next/font/google";
import CommitteeMembers from "@/components/events/CommitteeMembers";
import RegistrationInfo from "@/components/events/RegistrationInfo";
import Speakers from "@/components/events/Speakers";


const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const SpecificYearSymposium = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("current");

  // Control the visibility of the "Go to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sponsors = {
    platinum: [
      {
        id: 1,
        name: "Tech Innovations Inc.",
        logo: "/images/sponsors/sponsor1.jpg",
        website: "https://example.com",
      },
      {
        id: 2,
        name: "AI Solutions Global",
        logo: "/images/sponsors/sponsor2.jpg",
        website: "https://example.com",
      },
    ],
    gold: [
      {
        id: 3,
        name: "Future Computing Systems",
        logo: "/images/sponsors/sponsor3.jpg",
        website: "https://example.com",
      },
      {
        id: 4,
        name: "Data Analytics Partners",
        logo: "/images/sponsors/sponsor4.jpg",
        website: "https://example.com",
      },
    ],
    silver: [
      {
        id: 5,
        name: "Cloud Computing Alliance",
        logo: "/images/sponsors/sponsor5.jpg",
        website: "https://example.com",
      },
      {
        id: 6,
        name: "Smart AI Research",
        logo: "/images/sponsors/sponsor6.jpg",
        website: "https://example.com",
      },
    ],
    bronze: [
      {
        id: 7,
        name: "Neural Networks Lab",
        logo: "/images/sponsors/sponsor7.jpg",
        website: "https://example.com",
      },
      {
        id: 8,
        name: "Machine Learning Group",
        logo: "/images/sponsors/sponsor8.jpg",
        website: "https://example.com",
      },
    ],
  };

  // Sponsorship tier information
  const sponsorshipTiers = [
    {
      tier: "Platinum",
      cost: "$3,000",
    },
    {
      tier: "Gold",
      cost: "$2,000",
    },
    {
      tier: "Silver",
      cost: "$1,000",
    },
    {
      tier: "Bronze",
      cost: "$500",
    },
  ];

  return (
    <Layout>
       <SymposiumNavbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <Link
          href="/"
          className="text-underline text-red-500 flex gap-2 font-bold"
        >
          <ArrowLeftCircleIcon /> Back to Homepage
        </Link>

        <div className="relative rounded-lg shadow-md overflow-hidden mb-8 mt-2 h-96 bg-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              // backgroundImage: "url('/images/banner-2.avif')",
              backgroundPosition: "left 10%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              transform: "scaleX(-1)",
            }}
          ></div>

          <div className="relative z-10 p-8 h-full flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-justify mb-4">
              Thank you for participating in the event, To get your certificate of participation, 
              Please follow this link <a href="https://forms.office.com/r/deink2VGxh" className="font-bold underline">https://forms.office.com/r/deink2VGxh </a>.
               You will automatically recieved certificate via email.
            </p>
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h1
                className={`text-3xl md:text-4xl text-red-700 font-bold ${yanone.className}`}
              >
                Welcome to 7th Artificial Intelligence Symposium {new Date().getFullYear()}
              </h1>
            </div>

             <p className="text-lg leading-relaxed text-justify mb-4">
               Join us for the University of South Dakota’s 
               7th Annual <a href="https://www.ai-research-lab.org/events/ai-symposium/2025" className="font-bold underline">Artificial 
               Intelligence Symposium</a>—formerly known as the Data Harnessing Symposium (2018–2019)—sponsored by IEEE and held in conjunction with the inaugural <a href="https://sd-bcc.org/" 
                className="font-bold underline">South Dakota Biomedical Computation Consortium (SDBCC)</a>.
            </p>


            <p className="text-lg leading-relaxed text-justify">
             This premier event brings together thought leaders from academia, industry,
              and government to explore the forefront of artificial intelligence, data engineering,
               quantum computing, cyber threats, risk management, sustainable agriculture, healthcare,
                and biomedical computing.

            </p>

            {/* Register Now CTA button */}
          </div>
        </div>


        {/* Known for Excellence */}
        <StatsComponent />

        {/* Location Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Event Details
          </h2>
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <div className="flex items-start md:w-1/2">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <MapIcon className="h-6 w-6 mx-auto text-red-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Location</h3>
                <p className="text-gray-600">
                  {/* University of South Dakota Discovery District, Sioux Falls, S.D., 57069 */}
                   USD Sioux Falls <br /> Avera Hall <br /> 4801 N. Career Ave. <br /> Sioux Falls, SD 57107 
                </p>
                <p className="text-gray-600">
                  <strong>OR</strong> <br /> Zoom (link will be provided through
                  registration)
                </p>
              </div>
            </div>

            <div className="flex items-start md:w-1/2 mt-4 md:mt-0">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <CalendarIcon className="h-6 w-6 mx-auto text-red-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Date and time</h3>
                <p className="text-gray-600">
                  June 26 - 27, {new Date().getFullYear()}
                </p> 
{/*                 <p className="text-gray-600">
                   Start: 26 June 2025 – 08:30 AM CDT<br />
                    End: 27 June 2025 – 05:00 PM CDT
                </p> */}
              </div>
            </div>
          </div>
        </div>
        
        <RegistrationInfo />
       
            <Speakers /> 
      
{/* Sponsors Section */}
<div className="bg-white rounded-lg shadow-md p-6 mb-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    <Award className="inline-block mr-2 text-red-500" size={24} />
    Our Sponsors
  </h2>

  {/* Sponsors Tab Navigation */}
  <div className="flex border-b mb-6">
    <button
      className={`py-2 px-4 font-medium ${
        activeTab === "current"
          ? "border-b-2 border-red-500 text-red-600"
          : "text-gray-600"
      }`}
      onClick={() => setActiveTab("current")}
    >
      Current Sponsors
    </button>
    <button
      className={`py-2 px-4 font-medium ${
        activeTab === "become"
          ? "border-b-2 border-red-500 text-red-600"
          : "text-gray-600"
      }`}
      onClick={() => setActiveTab("become")}
    >
      Become a Sponsor
    </button>
  </div>

  {/* Current Sponsors Content */}
  {activeTab === "current" && (
    <div>
      <p className="text-gray-600 mb-6">
        We&apos;re grateful to the following organizations for their
        support of the AI Symposium {new Date().getFullYear()}. Their
        partnership enables us to provide world-class content and
        experiences for our attendees.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Bronze Sponsor */}
        <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[200px]">
          <div className="py-2 px-3 font-semibold text-white bg-yellow-700 text-center text-sm">
            Bronze Sponsors
          </div>
          <div className="bg-gray-50 p-2 flex items-center justify-center h-24">
            <img src="/images/sponsor/Area.png" alt="Direct Companies" className="max-h-12 object-contain" />
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[240px]">
          <div className="py-2 px-3 font-semibold text-white bg-gray-400 text-center text-sm">
            Silver Sponsors
          </div>
          <div className="bg-gray-50 p-2 flex justify-around items-center h-24">
            <img src="/images/sponsor/Sterling.png" alt="Sterling" className="max-h-12 object-contain" />
            <img src="/images/sponsor/ieee_usa.png" alt="IEEE USA" className="max-h-12 object-contain" />
          </div>
        </div>

        {/* Gold Sponsor */}
        <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[200px]">
          <div className="py-2 px-3 font-semibold text-white bg-yellow-500 text-center text-sm">
            Gold Sponsors
          </div>
          <div className="bg-gray-50 p-2 flex items-center justify-center h-24">
            <img src="/images/sponsor/dakota.png" alt="Dakota" className="max-h-12 object-contain" />
          </div>
        </div>

        {/* Partners */}
        <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[260px]">
          <div className="py-2 px-3 font-semibold text-white bg-gray-700 text-center text-sm">
            Partners
          </div>
          <div className="bg-gray-50 px-2 py-1 flex items-center justify-center gap-2 h-24">
            <img src="/images/sponsor/IEEE.png" alt="IEEE" className="h-10 object-contain" />
            <img src="/images/sponsor/logo.png" alt="Generic Partner" className="h-10 object-contain" />
            <img src="/images/sponsor/SD-BCC.png" alt="SD BCC" className="h-10 object-contain" />
          </div>
        </div>
      </div>
    </div>
  )}

  {/* Become a Sponsor Content */}
  {activeTab === "become" && (
    <div>
      <div className="bg-red-50 p-4 rounded-lg mb-6">
        <div className="flex items-start">
          <HandCoins className="text-red-500 h-6 w-6 mr-3 mt-1" />
          <div>
            <h3 className="font-medium text-gray-800">
              Why Sponsor the AI Symposium?
            </h3>
            <p className="text-gray-600">
              Join us as a sponsor and position your organization at the
              forefront of AI innovation. Gain visibility with academia,
              industry leaders, and government officials while
              demonstrating your commitment to advancing artificial
              intelligence research and applications.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Sponsorship Opportunities
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {sponsorshipTiers.map((tier, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden"
          >
            <div
              className={`
              p-4 font-semibold text-white
              ${
                tier.tier === "Platinum"
                  ? "bg-gray-700"
                  : tier.tier === "Gold"
                  ? "bg-yellow-500"
                  : tier.tier === "Silver"
                  ? "bg-gray-400"
                  : "bg-yellow-700"
              }
            `}
            >
              {tier.tier} Sponsorship - {tier.cost}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Briefcase className="mr-2 text-red-500" size={20} />
          Ready to Sponsor?
        </h3>
        <p className="text-gray-600 mb-4">
          For more information about sponsorship opportunities or to
          become a sponsor, please contact our sponsorship team:
        </p>
        <div className="space-y-2">
          <p className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>rodrigue.rizk@usd.edu and kc.santosh@usd.edu</span>
          </p>
          <p className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>(605) 658-6841</span>
          </p>
        </div>
      </div>
    </div>
  )}
</div>

        {/* Conference Schedule */}
        <ConferenceSchedule />
        <CommitteeMembers />

        {/* Past Events */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Past Events
          </h2>
          <p className="text-gray-700 mb-4">
            Learn more about our past Artificial Intelligence Symposiums.
          </p>

          <div className="space-y-2">
            <Link
              target="_blank"
              href="https://www.usd.edu/Academics/Colleges-and-Schools/college-of-arts-sciences/computer-science/Artificial-Intelligence-Symposium"
              className="block py-2 px-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center text-gray-800 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                AI Symposium 2024
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-third-annual-ai-symposium"
              className="block py-2 px-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center text-gray-800 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                AI Symposium 2023
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-artificial-intelligence-symposium-march-22"
              className="block py-2 px-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center text-gray-800 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                AI Symposium 2022
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://www.usd.edu/the-south-dakotan/usd-to-host-first-ai-symposium-march-16-18"
              className="block py-2 px-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center text-gray-800 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                AI Symposium 2021
              </div>
            </Link>
          </div>
        </div>
      </div>
                {/* Key Benefits */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Attend
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <CheckIcon className="text-red-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Collaborate</h3>
                <p className="text-gray-600">
                  Work with experts to brainstorm solutions in healthcare,
                  cybersecurity, quantum computing, agriculture and risk
                  management.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <GraduationCap className="text-red-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Learn</h3>
                <p className="text-gray-600">
                  Gain insights from established AI professionals through
                  engaging symposium sessions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <UsersIcon className="text-red-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Connect</h3>
                <p className="text-gray-600">
                  Build valuable connections with like-minded individuals both
                  in-person and virtually.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <FileQuestion className="text-red-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Discover</h3>
                <p className="text-gray-600">
                  Learn about the latest advancements in AI and how they can
                  impact your field.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* Go to Top Button */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Go to top"
        >
          <ArrowUpCircleIcon size={24} />
        </button>
      )}

      <Footer />
    </Layout>
  );
};

export default SpecificYearSymposium;
