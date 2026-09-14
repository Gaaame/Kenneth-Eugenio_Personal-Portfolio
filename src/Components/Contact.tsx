function Contact() {
  const email = "eugenio.kennethcleofas@gmail.com";
  const phone = "+63 919 356 0556";

  return (
    <section
      id="contact"
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* Decorative Background */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

      {/* Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Section Label */}
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500 sm:text-base">
            Get in touch
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let's work{" "}
            <span className="relative inline-block text-blue-600">
              together
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-orange-300/70" />
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Have a project, opportunity, or idea you'd like to discuss? Feel
            free to reach out. I'm always open to connecting and exploring new
            opportunities.
          </p>

          {/* Contact Card */}
          <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-blue-500/5 sm:p-10">
            {/* Email Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Contact Information
            </h3>

            <p className="mt-3 text-gray-600">
              Feel free to reach out through any of the following:
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-4 text-left">
              {/* Email */}
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Email
                </p>

                <a
                  href={`mailto:${email}`}
                  className="mt-1 block font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                  {email}
                </a>
              </div>

              {/* Phone */}
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Contact Number
                </p>

                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="mt-1 block font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <span className="text-sm font-medium text-gray-500">
              Or connect with me on
            </span>

            <a
              href="https://www.linkedin.com/in/kenneth-eugenio-7452403a0/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800"
            >
              LinkedIn
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
