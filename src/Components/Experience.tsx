const experiences = [
  {
    img: "https://cdn.brandfetch.io/id5QYgvkmd/w/566/h/122/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
    company: "Tenerity",
    year: "2024 - 2026",
    role: "Creative Associate",
    description:
      "Collaborated with international clients across Europe, North and South America to develop and implement marketing solutions that enhanced brand visibility and accessibility. Developed and optimized HTML and CSS creatives for deployment through Google Campaign Manager, ensuring accurate functionality, responsiveness, and adherence to campaign requirements.",
  },
  {
    img: "https://onedoc.ph/assets/logo-CbYAyeE7.png",
    company: "One Document Corporation",
    year: "2021 - 2024",
    role: "Frontend Developer",
    description:
      "Developed responsive websites and user-focused digital experiences using React, Tailwind CSS, Bootstrap, WordPress, and Figma, including projects for E-Agro and Strategic Asia Pacific Partners, Inc. (SAPPI). Designed UI/UX, prototypes, and high-fidelity mockups while ensuring modern, responsive, and consistent digital experiences.",
  },
  {
    img: "https://chimesconsulting.com/Chimes%20Logo%20v.3-01.png?name=chimes-logo.webp",
    company: "Chimes Consulting",
    year: "2021",
    role: "Frontend Associate Developer",
    description:
      "Assisted in developing the MyVet project’s front end using Tailwind CSS, while designing website pages and layouts in Figma. Trained and gained hands-on experience with the company’s technology stack, including Tailwind, Laravel, Git, Figma, Chart.js, and PHP.",
  },
];

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-blue-50">
      {/* Decorative Background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-400" />

          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500 sm:text-base">
            Career Journey
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            My Work Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Over five years of experience building digital experiences,
            developing frontend solutions, and working with international teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-blue-200 md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.company} className="group relative md:pl-16">
                {/* Timeline Number */}
                <div className="absolute left-0 top-8 z-10 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-blue-50 bg-blue-500 text-sm font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-400 md:flex">
                  0{index + 1}
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-8">
                  {/* Card Hover Accent */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-400 transition-all duration-300 group-hover:w-2" />

                  {/* Decorative Number */}
                  <span className="absolute -right-2 -top-6 select-none text-8xl font-bold text-blue-50 transition-all duration-300 group-hover:text-blue-100">
                    0{index + 1}
                  </span>

                  <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                    {/* Logo */}
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md sm:h-24 sm:w-24">
                      <img
                        src={experience.img}
                        alt={`${experience.company} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="mb-1 text-sm font-semibold text-orange-500">
                            {experience.role}
                          </p>

                          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {experience.company}
                          </h3>
                        </div>

                        {/* Year Badge */}
                        <span className="w-fit rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                          {experience.year}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="my-5 h-px w-full bg-gray-100" />

                      {/* Description */}
                      <p className="max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
