import IMG4 from "../assets/LinkSHOP.png";
import IMG5 from "../assets/movie.png";

import PersistFlow from "../assets/PersistFlow2.png";
import Notion from "../assets/notion.png";
import TodoFullStack from "../assets/Todo-fullstack.png";
import CovidTracker from "../assets/Covid-Tracker.png";
import MERNBlog from "../assets/blog-mern.png";

const data = [
  {
    id: 1,
    image: PersistFlow,
    title: "React.js",
    github: "https://github.com/paidynikhil/PersistFlow",
    demo: "https://persistflow-nikhil.netlify.app/",
  },
  {
    id: 2,
    image: Notion,
    title: "Next.js",
    github: "https://github.com/paidynikhil/Notion_Clone",
    demo: "https://notionclone-puce.vercel.app/",
  },
  {
    id: 3,
    image: TodoFullStack,
    title: "NExt.js | Prisma | Clerk ",
    github: "https://github.com/paidynikhil/Todo-fullStack",
    demo: "https://todo-full-stack-dusky.vercel.app",
  },
  {
    id: 4,
    image: CovidTracker,
    title: "React.js | Chart.js ",
    github: "https://github.com/paidynikhil/Covid-19",
    demo: "https://covid-19-nik.netlify.app/",
  },
  {
    id: 5,
    image: MERNBlog,
    title: "MERN Stack ",
    github: "https://github.com/paidynikhil/",
    demo: "https://github.com/paidynikhil/",
  },
  {
    id: 6,
    image: IMG4,
    title: "Games",
    github: "https://github.com/paidynikhil",
    demo: "https://link-accessor.netlify.app",
  },
  {
    id: 7,
    image: IMG5,
    title: "Reactjs | Movie Review clone",
    github: "https://github.com/paidynikhil/BoxOfficeMojo",
    demo: "https://movieweb22.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio__container grid grid-cols-[repeat(3,_1fr)] gap-10">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article
              key={id}
              className="portfolio__item bg-[var(--color-bg-variant)] p-[1.3rem] rounded-[2rem] border-[1px] border-[solid] border-[transparent] transition-[var(--transition)] hover:bg-transparent"
            >
              <div className="portfolio__item-image rounded-3xl overflow-hidden">
                <img src={image} alt={title} />
              </div>
              <h3 className="mt-[1.2rem] mx-[0] mb-8">{title}</h3>
              <div className="portfolio__item-cta flex gap-4 mb-4">
                <a
                  href={github}
                  className="inline-block text-blue-400 px-3 py-2 rounded border border-blue-400 cursor-pointer transition duration-400 ease-in-out hover:bg-white hover:text-blue-900 hover:border-transparent "
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="bg-blue-400 text-blue-900 hover:bg-blue-500 hover:text-white px-4 py-2 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
