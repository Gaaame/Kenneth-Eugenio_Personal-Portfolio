const projects = [
  // {
  //   url: "https://e-agro.ph/",
  //   project: "E-Agro",
  //   tags: ["React", "Frontend"],
  //   description:
  //     "Developing digital tools and experiences to support farmers, suppliers, and laborers.",
  // },
  {
    url: "https://backroads-travelsite.netlify.app/",
    project: "Backroads Travel Website",
    tags: ["React", "Frontend"],
    description:
      "Creating a one-stop digital destination for discovering and exploring travel experiences.",
  },
  {
    url: "https://www.behance.net/gallery/175292137/Simple-Green-and-White-Photography-Portfolio",
    project: "Photography Portfolio",
    tags: ["UI/UX", "Branding"],
    description:
      "A UI/UX case study focused on creating a clean and visually engaging photography portfolio.",
  },
  {
    url: "https://kenneth-photographysite.netlify.app/",
    project: "Photography Portfolio Website",
    tags: ["React", "Frontend"],
    description: "Turning the case study into an interactive portfolio",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-50">
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-400" />

            <p className="text-sm font-semibold tracking-wide text-orange-500 uppercase sm:text-base">
              Selected Work
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              My Endeavors
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              A collection of projects where I combine frontend development,
              design, and creativity to build modern digital experiences.
            </p>
          </div>

          {/* Project Cards */}
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((item, index) => (
              <a
                key={item.project}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-orange-50/0 transition-all duration-300 group-hover:from-blue-50 group-hover:to-orange-50" />

                <div className="relative">
                  {/* Top Row */}
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold text-blue-500">
                      0{index + 1}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-lg text-gray-700 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="mt-10 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    {item.project}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-pretty leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
