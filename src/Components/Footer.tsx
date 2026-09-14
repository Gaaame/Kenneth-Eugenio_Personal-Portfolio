import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      id="contact"
      className="relative flex min-h-50 overflow-hidden bg-slate-950 text-white"
    >
      {/* Decorative Background */}{" "}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />{" "}
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
      {/* Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
            Let's Connect
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block text-blue-400">great together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            I'm always open to discussing new opportunities, creative projects,
            web development, and my growing journey into cybersecurity.
          </p>

          {/* Contact Button */}

          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl"
          >
            Get In Touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand / Copyright */}
          <div className="text-center md:text-left">
            <a href="/#home" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                KE
              </span>

              <span className="font-semibold text-white">Kenneth Eugenio</span>
            </a>

            <p className="mt-3 text-sm text-gray-500">
              © {new Date().getFullYear()} Kenneth Eugenio. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-6 md:items-end">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              <li>
                <a
                  href="/#home"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/#experience"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="/#projects"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Projects
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <ul className="flex items-center justify-center gap-4">
              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/in/kenneth-eugenio-7452403a0/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg"
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
              </li>

              {/* GitHub */}
              <li>
                <a
                  href="https://github.com/Gaaame"
                  rel="noreferrer"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-slate-950 hover:shadow-lg"
                >
                  <span className="sr-only">GitHub</span>

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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
