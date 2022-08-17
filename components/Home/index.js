import Image from "next/image";
import { Detail } from "../Detail";
import { HomeData } from "../../data/HomeData";

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 text-lg font-semibold text-primary md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  );
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />;
}

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex items-center space-x-4 group"
    >
      <strong className="flex-none font-medium text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-500">
        {title}
      </strong>
      <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      {subtitle && (
        <span className="flex-none text-tertiary text-sm md:text-base">
          {subtitle}
        </span>
      )}
      {date && (
        <span className="flex-none font-mono text-quaternary hidden md:flex">
          {date}
        </span>
      )}
    </a>
  );
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
      {...props}
    />
  );
}

export function Home() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>
        <div className="pb-24 md:pb-4 space-y-12 md:space-y-16">
          {/* Bio */}
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              {/* Center align an image */}
              <div className="flex justify-center">
                <Image
                  src="/static/images/myphoto.jpeg"
                  alt="Rahul Vaidun"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <br />
              <div className="prose">
                <p>
                  Hey, I&apos;m Rahul. I&apos;m a student at University of
                  California at Santa Cruz and I&apos;m studying Computer
                  science. I am currently interning as a Solution Engineer at
                  Salesforce. I&apos;m also looking for a Software Engineering
                  Internship/New Grad role for Summer 2022.I mainly code in
                  Python, C, Javascript, and Java. I&apos;m interested in web
                  development and am proficient in React.js and am currently
                  learning other javascript frameworks such as Vue and Svelte.
                </p>
                <br />
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Socials */}
          <SectionContainer>
            <SectionTitle>Online</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={"mailto:rahul.vaidun@gmail.com"}
                  title={"Email"}
                  subtitle={"Send"}
                  date={""}
                />
                <TableRow
                  href={"https://github.com/rvaidun"}
                  title={"GitHub"}
                  subtitle={"Follow"}
                  date={""}
                />
                <TableRow
                  href={"https://www.linkedin.com/in/rahulvaidun/"}
                  title={"LinkedIn"}
                  subtitle={"Connect"}
                  date={""}
                />
                <TableRow
                  href={"https://twitter.com/rahulvaidun"}
                  title={"Twitter"}
                  subtitle={"Follow"}
                  date={""}
                />
                <TableRow
                  href={
                    "https://open.spotify.com/user/ishan0102?si=510c088c653249d2"
                  }
                  title={"Spotify"}
                  subtitle={"Follow"}
                  date={""}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Where */}
          {/* <SectionContainer>
            <SectionTitle>Where</SectionTitle>
            <SectionContent>
              <Image
                priority
                src="/static/img/sf.png"
                width={600}
                height={300}
                layout="responsive"
                className="rounded-xl"
                quality={100}
                alt="Map of San Bruno with blue location dot in the middle"
              />
              <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                <MapPin size={12} />
                <span>San Bruno, CA</span>
              </p>
            </SectionContent>
          </SectionContainer> */}

          {/* Work */}
          <SectionContainer>
            <SectionTitle>Work</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {HomeData.workHistory.map((job) => (
                  <TableRow
                    href={job.href}
                    title={job.title}
                    subtitle={job.subtitle}
                    date={job.date}
                    key={job.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Organizations */}
          <SectionContainer>
            <SectionTitle>Organizations</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {HomeData.organizations.map((org) => (
                  <TableRow
                    href={org.href}
                    title={org.title}
                    subtitle={org.subtitle}
                    date={org.date}
                    key={org.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Spotify Widget */}
          <SectionContainer>
            <SectionTitle>Music</SectionTitle>
            <SectionContent>
              <iframe
                className="rounded-xl"
                src="https://open.spotify.com/embed/playlist/6oPDB8SRP5McQrkgXnIkNG?utm_source=generator"
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </SectionContent>
          </SectionContainer>

          {/* Footer */}
          <SectionContainer>
            <SectionTitle></SectionTitle>
            <SectionContent>
              <div className="flex justify-center">
                <div className="prose">
                  Design inspired by{" "}
                  <a
                    href="https://www.ishanshah.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ishan Shah
                  </a>
                </div>
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  );
}
