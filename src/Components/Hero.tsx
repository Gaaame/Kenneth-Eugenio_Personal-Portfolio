import avatar from "../assets/Avatar.svg";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-50"
    >
      {/* Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Avatar Section */}
        <div className="relative mb-10 flex w-full justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 md:h-[360px] md:w-[360px]">
            {/* Outer Blob */}
            <div className="blob-border absolute inset-0 bg-blue-500 shadow-2xl shadow-blue-500/20" />

            {/* Rotating Decorative Ring */}
            <div className="absolute -inset-4 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-blue-300" />

            {/* Security Accent */}
            <div className="absolute -right-4 top-8 z-20 flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-orange-400/80 text-2xl shadow-lg">
              🔒
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-2 -left-4 h-12 w-12 rounded-full bg-blue-300" />

            {/* Avatar */}
            <img
              src={avatar}
              alt="Kenneth Eugenio"
              className="blob-image relative z-10 h-[85%] w-[85%] object-cover drop-shadow-xl"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Building digital
            <br />
            <span className="relative inline-block text-blue-600">
              experiences
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-orange-300/70" />
            </span>
            <br />
            and securing what's behind them.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            A frontend developer with experience creating modern digital
            experiences, currently expanding my skills and knowledge in
            cybersecurity and information security.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={resume}
              download="Kenneth-Eugenio-Resume-2026.pdf"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Resume
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#projects"
              className="rounded-full border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <span className="text-sm font-medium text-gray-500">
              Find me on
            </span>

            <div className="h-px w-8 bg-gray-300" />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kenneth-eugenio-7452403a0/"
              rel="noreferrer"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-md"
            >
              <span className="sr-only">LinkedIn</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V8.98h3.56v11.47Z" />
              </svg>
            </a>

            {/* Github */}
            <a
              href="https://github.com/Gaaame"
              rel="noreferrer"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-md"
            >
              <span className="sr-only">Github</span>

              <svg
                className="size-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:eugenio.kennethcleofas@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-md"
            >
              <span className="sr-only">Email</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
