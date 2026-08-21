
import ScrollVelocity from './ScrollVelocity';
import {
  SiReact, SiTailwindcss, SiNextdotjs, SiJavascript,
  SiHtml5, SiCss, SiAxios, SiPostman, SiFigma,
  SiMysql, SiVercel, SiNetlify, SiPython, SiCplusplus, SiGo
} from 'react-icons/si';
import { FaPaintBrush, FaProjectDiagram } from 'react-icons/fa';

export default function TechStack() {
  const row1 = (
    <div className="flex items-center gap-8 mx-4">
      <div className="flex items-center gap-3"><SiReact /> ReactJS</div>
      <div className="flex items-center gap-3"><SiTailwindcss /> TailwindCSS</div>
      <div className="flex items-center gap-3"><FaPaintBrush /> HeroUI</div>
      <div className="flex items-center gap-3"><SiNextdotjs /> Next.js</div>
      <div className="flex items-center gap-3"><SiJavascript /> JavaScript</div>
      <div className="flex items-center gap-3"><SiHtml5 /> HTML</div>
      <div className="flex items-center gap-3"><SiCss /> CSS</div>
      <div className="flex items-center gap-3"><SiAxios /> Axios</div>
      <div className="flex items-center gap-3"><SiPostman /> Postman</div>
    </div>
  );

  const row2 = (
    <div className="flex items-center gap-8 mx-4">
      <div className="flex items-center gap-3"><SiFigma /> Figma</div>
      <div className="flex items-center gap-3"><FaProjectDiagram /> Draw.io</div>
      <div className="flex items-center gap-3"><FaPaintBrush /> Whimsical</div>
      <div className="flex items-center gap-3"><SiMysql /> MySQL</div>
      <div className="flex items-center gap-3"><SiVercel /> Vercel</div>
      <div className="flex items-center gap-3"><SiNetlify /> Netlify</div>
      <div className="flex items-center gap-3"><SiPython /> Python</div>
      <div className="flex items-center gap-3"><SiCplusplus /> C++</div>
      <div className="flex items-center gap-3"><SiGo /> Golang</div>
    </div>
  );

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white transition-colors duration-500">Tech Stack & Tools</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-500">
          A comprehensive suite of modern technologies and tools I use to build exceptional digital experiences.
        </p>
      </div>

      <ScrollVelocity
        texts={[row1, row2]}
        velocity={30}
        className="text-zinc-300 dark:text-zinc-700"
      />
    </section>
  );
}
