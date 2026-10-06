const projects = [
  {
    url: "https://eagro.netlify.app/",
    project: "E-Agro",
    tags: ["React", "TailwindCSS", "Frontend"],
    image: "https://i.8upload.com/image/85fc5fca850bd11c/eagro-cap.png",
    description:
      "Developing digital tools and experiences to support farmers, suppliers, and laborers.",
  },
  {
    url: "https://backroads-travelsite.netlify.app/",
    project: "Backroads Travel Website",
    image: "https://i.8upload.com/image/03b2354ce52c7592/backgroadscap.png",
    tags: ["React", "TailwindCSS", "Frontend"],
    description:
      "Creating a one-stop digital destination for discovering and exploring travel experiences.",
  },
  {
    url: "https://www.behance.net/gallery/175292137/Simple-Green-and-White-Photography-Portfolio",
    project: "Photography Portfolio",
    image:
      "https://i.8upload.com/image/9df6da44522c0911/7b9d35175292137-64b0eb6353954.webp",
    tags: ["Figma", "UI/UX", "Mockup"],
    description:
      "A UI/UX case study focused on creating a clean and visually engaging photography portfolio.",
  },
  {
    url: "https://pokedex-champions.netlify.app/",
    project: "Pokedex Champions",
    image: "https://ibb.co/YFX7ZrWV",
    tags: ["React", "CSS", "JavaScript", "Frontend"],
    description:
      "A website compiling information from the POKEAPI to easily access what's needed for competitive play.",
  },
  {
    url: "https://kenneth-photographysite.netlify.app/",
    project: "Photography Portfolio Website",
    image:
      "https://i.8upload.com/image/085904c05788daf6/screencapture-kenneth-photographysite-netlify-app-2026-09-28-16-12-35.png",
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    description:
      "A website, turning the UI case study into an interactive portfolio",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden  bg-blue-50">
      {/* Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              My Projects
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              A collection of projects where I combine frontend development,
              design, and creativity to build modern digital experiences.
            </p>
          </div>

          {/* Project Cards */}
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 ">
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
                  {/* Project Preview */}
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={`${item.project} preview`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  {/* Top Row */}
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
