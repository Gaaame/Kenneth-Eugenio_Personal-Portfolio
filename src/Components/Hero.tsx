import avatar from "../assets/Avatar.svg";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-50"
    >
      {/* Decorative Background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

      {/* Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        {/* Hero Content */}
        <div className="max-w-2xl">
          {/* Available Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Available for opportunities
          </div>

          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500 sm:text-base">
            Web Developer • Aspiring Cybersecurity Professional
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl">
            Building digital
            <br />
            <span className="relative inline-block text-blue-600">
              experiences
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-orange-300/70" />
            </span>
            <br />
            and securing what's behind them.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            A frontend developer with experience creating modern digital
            experiences, currently expanding my skills and knowledge in
            cybersecurity and information security.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
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
          <div className="mt-10 flex items-center gap-5">
            <span className="text-sm font-medium text-gray-500">
              Find me on
            </span>

            <div className="h-px w-8 bg-gray-300" />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kenneth-eugenio-7452403a0/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B82%2F%2BfiooTaisPF6sh24h4g%3D%3D"
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

            {/* Email */}
            <a
              href="mailto:eugenio.kennethcleofas@gmail.com"
              rel="noreferrer"
              target="_blank"
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

        {/* Avatar Section */}
        <div className="relative flex justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96 md:h-[420px] md:w-[420px]">
            {/* Outer Blob */}
            <div className="blob-border absolute inset-0 bg-blue-500 shadow-2xl shadow-blue-500/20" />

            {/* Rotating Decorative Ring */}
            <div className="absolute -inset-4 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-blue-300" />

            {/* Security Accent */}
            <div className="absolute -right-4 top-10 flex h-16 w-16 rotate-12 items-center justify-center rounded-2xl bg-orange-400/80 text-2xl shadow-lg">
              🔒
            </div>

            <div className="absolute -bottom-2 -left-4 h-12 w-12 rounded-full bg-blue-300" />

            {/* Avatar */}
            <img
              src={avatar}
              alt="Avatar"
              className="blob-image relative z-10 h-[85%] w-[85%] object-cover drop-shadow-xl"
            />

            {/* Career Card */}
            <div className="absolute -bottom-4 -left-4 z-20 hidden rounded-2xl border border-white/50 bg-white/90 px-5 py-4 shadow-xl backdrop-blur md:block">
              <p className="text-xs font-medium text-gray-500">
                Career Direction
              </p>

              <p className="text-lg font-bold text-gray-900">Cybersecurity</p>

              <p className="mt-1 text-xs text-blue-600">
                Building & securing digital systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
