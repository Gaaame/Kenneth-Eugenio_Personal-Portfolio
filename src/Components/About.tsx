import aboutimg from "../assets/aboutimg.jpg";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-slate-50"
    >
      {/* Decorative Background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

      {/* Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500 sm:text-base">
              About Me
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
              Developer by experience.
              <br />
              <span className="text-blue-600">Security by ambition.</span>
            </h1>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              <p>
                I am a frontend developer with the past 4 years of experience
                creating responsive websites and digital experiences. I enjoy
                turning ideas into clean, functional, and user-friendly
                interfaces.
              </p>

              <p>
                My experience includes working with technologies such as React,
                Tailwind CSS, JavaScript, HTML, CSS, and WordPress, along with
                tools like Git, Figma, and Google Campaign Manager.
              </p>

              <p>
                I'm currently expanding my knowledge in cybersecurity and
                information security. My goal is to combine my development
                background with security-focused skills to better understand how
                digital systems are built, protected, and maintained.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-blue-600">5+</p>
                <p className="mt-1 text-sm text-gray-500">Years Experience</p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-blue-600">React</p>
                <p className="mt-1 text-sm text-gray-500">Primary Framework</p>
              </div>

              <div className="col-span-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:col-span-1">
                <p className="text-2xl font-bold text-orange-500">
                  Cyber Security
                </p>
                <p className="mt-1 text-sm text-gray-500">Current Direction</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
              {/* Blob */}
              <div className="blob-border absolute inset-0 bg-blue-500 shadow-2xl shadow-blue-500/20" />

              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-blue-300" />

              {/* Decorative Elements */}
              <div className="absolute -right-4 top-8 flex h-16 w-16 rotate-12 items-center justify-center rounded-2xl bg-orange-400/80 text-2xl shadow-lg">
                💻
              </div>

              <div className="absolute -bottom-2 -left-4 h-12 w-12 rounded-full bg-blue-300" />

              {/* Image */}
              <div className="relative z-10 flex h-[85%] w-[85%] overflow-hidden rounded-[40%] bg-white shadow-xl">
                <img
                  src={aboutimg}
                  alt="Kenneth Eugenio"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
