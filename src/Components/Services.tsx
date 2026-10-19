function Services() {
  const services = [
    {
      title: "Web Development",
      description: "I can bring your ideas from paper to screen.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <rect x="2.5" y="3.5" width="19" height="17" rx="2.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 9 5 12l3 3m8-6 3 3-3 3m-3-8-2 10"
          />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Let's work on something modern, beautiful, and easy to use together.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"
          />
        </svg>
      ),
    },
    {
      title: "Cybersecurity",
      description:
        "Building a safer digital experience through security awareness and best practices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12 2 2 4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Services I <span className="text-blue-600">Offer.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Turning ideas into meaningful digital experiences through thoughtful
            design and development.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 sm:p-10"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-100">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                {service.title}
              </h3>

              <p className="max-w-md text-base leading-7 text-gray-600 sm:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
