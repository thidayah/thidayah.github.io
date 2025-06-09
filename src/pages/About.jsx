import React from 'react'
import iconApp from '../assets/icon-app.svg'
import iconDev from '../assets/icon-dev.svg'
import { SkillsSection } from "../components";

const About = () => {
  const skillsData = [
    {
      category: "Languages",
      items: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          link: "https://www.typescriptlang.org/"
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          link: "https://www.php.net/"
        }
      ]
    },
    {
      category: "UI / Styling",
      items: [
        {
          name: "Tailwind",
          icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
          link: "https://tailwindcss.com/"
        },
        {
          name: "MaterialUI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
          link: "https://mui.com/"
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          link: "https://getbootstrap.com/"
        },
        {
          name: "jQuery",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
          link: "https://jquery.com/"
        }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          link: "https://reactjs.org/"
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          link: "https://nextjs.org/"
        },
        {
          name: "Vite",
          icon: "https://vite.dev/logo.svg",
          link: "https://vite.dev/"
        },
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          link: "https://reactnative.dev/"
        },
        {
          name: "Vue",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          link: "https://vuejs.org/"
        },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          link: "https://redux.js.org/"
        },
        {
          name: "Nuxt",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
          link: "https://nuxt.com/"
        },
        {
          name: "Laravel",
          icon: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg",
          link: "https://laravel.com/"
        },
        {
          name: "CodeIgniter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
          link: "https://codeigniter.com/"
        },
        {
          name: "ChartJS",
          icon: "https://www.chartjs.org/media/logo-title.svg",
          link: "https://www.chartjs.org/"
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          link: "https://nodejs.org/"
        },
      ]
    },
    {
      category: "Tools",
      items: [
        {
          name: "VSCode",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          link: "https://code.visualstudio.com/"
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          link: "https://git-scm.com/"
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          link: "https://github.com/"
        },
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
          link: "https://www.postman.com/"
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          link: "https://www.figma.com/"
        },
        {
          name: "Adobe XD",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
          link: "https://www.adobe.com/products/xd.html"
        },
        {
          name: "Vercel",
          icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
          link: "https://vercel.com/"
        },
        {
          name: "Netlify",
          icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
          link: "https://www.netlify.com/"
        },
        {
          name: "Trello",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
          link: "https://www.trello.com/"
        }
      ]
    }
  ];
  
  

  return (
    <>
      <p className="text-[#d6d6d6] md:text-xl mt-4 md:mt-8">
        My main focus right now is as a <b className="text-[#fcd16b]">Frontend Web</b> and <b className="text-[#fcd16b]">Mobile Developer</b>. With more than 5 years of experience building web and mobile applications, I am used to creating fast, responsive, user-friendly, comfortable to use, and performance-efficient.
        <br />
        <br />
        I regularly collaborate with cross-functional teams such as Backend and UI/UX to deliver optimal user experiences. In every project, I always prioritize clean code, reusability, and performance. With a combination of technical skills and a strong passion for continuous learning, I’m ready to be part of your team and contribute to building impactful digital products.
      </p>

      <div className=" text-2xl md:text-3xl font-bold text-white mt-12">What I'm Doing</div>
      <div className=" grid md:grid-cols-2 gap-6 mt-8">
        {/* <div className=" flex flex-row space-x-6 bg-[#222224] rounded-2xl p-8 shadow shadow-[#ffffff]">
          <img src={iconDesign} className="size-10" />
          <div>
            <div className="text-[#fafafa] font-bold text-xl">Web Design</div>
            <div className="text-[#d6d6d6] text-lg mt-2">The most modern and high-quality design made at a professional level.</div>
          </div>
        </div> */}
        <div className=" flex flex-col lg:flex-row text-center lg:text-start items-center lg:items-start space-y-3 lg:space-y-0 lg:space-x-6 bg-[#222224] rounded-2xl p-8 shadow shadow-[#ffffff]">
          <img src={iconDev} className="size-10" />
          <div>
            <div className="text-[#fafafa] font-bold lg:text-xl">Web Development</div>
            <div className="text-[#d6d6d6] lg:text-lg mt-2">Building high-quality, responsive websites with a focus on user experience</div>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row text-center lg:text-start items-center lg:items-start space-y-3 lg:space-y-0 lg:space-x-6 bg-[#222224] rounded-2xl p-8 shadow shadow-[#ffffff]">
          <img src={iconApp} className="size-10" />
          <div>
            <div className="text-[#fafafa] font-bold lg:text-xl">Mobile Apps</div>
            <div className="text-[#d6d6d6] lg:text-lg mt-2">Cross-platform mobile solutions with a focus on performance and design.</div>
          </div>
        </div>
        {/* <div className=" flex flex-row space-x-6 bg-[#222224] rounded-2xl p-8 shadow shadow-[#ffffff]">
          <img src={iconPhoto} className="size-10" />
          <div>
            <div className="text-[#fafafa] font-bold text-xl">Photography</div>
            <div className="text-[#d6d6d6] text-lg mt-2">I make high-quality photos of any category at a professional level.</div>
          </div>
        </div> */}
      </div>

      <SkillsSection data={skillsData} />

      {/* <div className=" text-2xl md:text-3xl font-bold text-white mt-12">My Skill</div>
      <ul className="list-disc list-inside mt-4">
        <li className=" text-white text-xl">Languages:</li>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 ml-7">
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" alt="HTML5" />
              <span>HTML5</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" alt="CSS3" />
              <span>CSS3</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" alt="JavaScript" />
              <span>JavaScript</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://www.typescriptlang.org/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" alt="TypeScript" />
              <span>TypeScript</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://www.php.net/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="40" alt="PHP" />
              <span>PHP</span>
            </a>
          </div>
        </div>
      </ul>
      <ul className="list-disc list-inside mt-4">
        <li className=" text-white text-xl">UI / Styling:</li>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 ml-7">
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://tailwindcss.com/" target="_blank">
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="40" alt="Tailwind CSS" />
              <span>Tailwind</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://mui.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" width="40" alt="Material UI" />
              <span>MaterialUI</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://getbootstrap.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="40" alt="Bootstrap" />
              <span>Bootstrap</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://jquery.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" width="40" alt="jQuery" />
              <span>jQuery</span>
            </a>
          </div>
        </div>
      </ul>
      <ul className="list-disc list-inside mt-4">
        <li className=" text-white text-xl">Frameworks & Libraries:</li>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 ml-7">
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://reactjs.org/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" alt="React.js" />
              <span>React.js</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://nextjs.org/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="40" alt="Next.js" />
              <span>Next.js</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://vitejs.dev/" target="_blank">
              <img src="https://vite.dev/logo.svg" width="40" alt="Vite" />
              <span>Vite</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://reactnative.dev/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" alt="React Native" />
              <span>React Native</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://redux.js.org/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="40" alt="Redux" />
              <span>Redux</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://vuejs.org/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="40" alt="Vue" />
              <span>Vue</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://nuxt.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" width="40" alt="Nuxt" />
              <span>Nuxt</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://firebase.google.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" width="40" alt="Firebase" />
              <span>Firebase</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://laravel.com/" target="_blank">
              <img src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" width="40" alt="Laravel" />
              <span>Laravel</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://codeigniter.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" width="40" alt="CodeIgniter" />
              <span>CodeIgniter</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://nodejs.org/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" alt="Node.js" />
              <span>Node.js</span>
            </a>
          </div>

        </div>
      </ul>
      <ul className="list-disc list-inside mt-4">
        <li className=" text-white text-xl">Tools:</li>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 ml-7">
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://code.visualstudio.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="40" alt="VS Code" />
              <span>VS Code</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://www.sublimetext.com/" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png" width="40" alt="Sublime Text" />
              <span>Sublime</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://git-scm.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" alt="Git" />
              <span>Git</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://www.npmjs.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="40" alt="NPM" />
              <span>NPM</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://yarnpkg.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" width="40" alt="Yarn" />
              <span>Yarn</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://www.postman.com/" target="_blank">
              <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" width="40" alt="Postman" />
              <span>Postman</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://trello.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" width="40" alt="Trello" />
              <span>Trello</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://www.adobe.com/products/xd.html" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" width="40" alt="Adobe XD" />
              <span>Adobe XD</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://figma.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="40" alt="Figma" />
              <span>Figma</span>
            </a>
          </div>
          <div className=" border border-white py-4 flex justify-center items-center rounded">
            <a className="text-white space-y-4 flex flex-col items-center" href="https://chat.openai.com/" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" width="40" alt="ChatGPT" />
              <span>ChatGPT</span>
            </a>
          </div>
        </div>
      </ul> */}
    </>
  )
}

export default About