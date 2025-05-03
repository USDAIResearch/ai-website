import { TEAM_LIST, PHD_STUDENTS, MASTERS_STUDENTS } from "@/utils/constants";
import { Globe, Linkedin } from "lucide-react";
import { Yanone_Kaffeesatz } from "next/font/google";
import Image from "next/image";
import React from "react";

const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ["600"] });

const SocialButton = ({ href, icon: Icon, label, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center pr-4 py-2 text-sm font-medium text-center rounded-lg hover:bg-opacity-90 focus:ring-4 focus:outline-none ${className}`}
  >
    <Icon className="w-4 h-4 mr-2" />
    {label}
  </a>
);

const TeamMember = ({ name, role, description, avatarSrc, research, website, linkedin }) => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      key={name}
    >
      <div className="w-full sm:w-1/3 h-48 sm:h-full relative">
        <Image
          className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none object-cover"
          src={avatarSrc}
          alt={`${name} Avatar`}
          layout="fill"
          objectFit="cover"
          style={{ transform: name =="KC Santosh, PhD" ? "scaleX(-1)" : "" }}
        />
      </div>
      <div className="p-5 w-full sm:w-2/3">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {name}
        </h3>
        <span className="text-gray-500">{role}</span>
        <p className="mt-3 mb-4 font-light text-gray-500">{description}</p>
        <p className="mt-3 mb-4 font-light text-gray-500">Research: {research}</p>
        <div className="flex flex-wrap gap-3">
          {website && (
            <SocialButton
              href={website}
              icon={Globe}
              label="Website"
              className="text-gray-500 hover:text-blue-500"
            />
          )}
          {linkedin && (
            <SocialButton
              href={linkedin}
              icon={Linkedin}
              label="LinkedIn"
              className="text-gray-500 hover:text-blue-500"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const StudentCard = ({ name, program, research, position, linkedin }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-4 hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="inline-block px-2.5 py-0.5 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {program}
          </span>
          {position && (
            <span className="inline-block px-2.5 py-0.5 text-sm bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300">
              {position}
            </span>
          )}
        </div>

        <p className="mt-3 font-light text-gray-500 dark:text-gray-400">Research: {research}</p>
      </div>
    </div>
  );
};

const StudentsSection = ({ title, students }) => {
  return (
    <div className="mb-8 lg:mb-16">
      <h2 className={`text-3xl py-4 font-semibold ${yanone.className}`}>{title}</h2>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            program={student.program}
            research={student.research}
            position={student.position}
            linkedin={student.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <section className="mx-5 sm:mx-0">
      <div className="py-4">
        <div className="mb-8 lg:mb-16">
          <h1 className={`text-4xl py-4 font-semibold ${yanone.className}`}>Team Members</h1>
          <p className="text-gray-500 lg:mb-16 sm:text-xl">
            Driving AI innovation with creativity, collaboration, and continuous progress.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {TEAM_LIST.map((item, index) => (
            <TeamMember
              key={index}
              name={item.name}
              role={item.role}
              description={item.description}
              avatarSrc={item.avatarSrc}
              research={item.research}
              website={item.website}
              linkedin={item.linkedin}
            />
          ))}
        </div>
        
        <StudentsSection title="PhD Students" students={PHD_STUDENTS} />
        <StudentsSection title="Masters Students" students={MASTERS_STUDENTS} />
      </div>
    </section>
  );
};

export default Body;