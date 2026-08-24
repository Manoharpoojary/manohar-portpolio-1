import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowUpRight, ArrowDown, Sparkles, Code2, BrainCircuit, Database, Send } from 'lucide-react';
import 'swiper/css'; import 'swiper/css/navigation'; import 'swiper/css/pagination'; import './styles.css';

const github = 'https://github.com/Manoharpoojary';
const linkedin = '#linkedin-url-to-add';
const email = 'poojarymanohara967@gmail.com';
const projects = [
  { name: 'AI Video Assistant', tag: 'RAG · Generative AI', text: 'An intelligent video companion built around retrieval-augmented generation.', repo: 'AI-Video-Assistant-using-RAG', hue: 'violet' },
  { name: 'Phishing Detection', tag: 'ML · Cybersecurity', text: 'Machine-learning powered detection for suspicious websites and safer browsing.', repo: 'Phishing-Website-Detection', hue: 'cyan' },
  { name: 'RAG Implementation', tag: 'LLMs · Information Retrieval', text: 'A practical exploration of context-aware answers grounded in your data.', repo: 'RAG-implementaion', hue: 'orange' },
  { name: 'Multi-Agent Research', tag: 'Agents · Research', text: 'Collaborative AI agents that gather, reason, and synthesize research.', repo: 'multi-agent-research-system', hue: 'lime' },
  { name: 'Playure', tag: 'Full-stack · Product', text: 'A product-focused build that pairs thoughtful UX with modern web engineering.', repo: 'playure', hue: 'pink' },
];
const skills = [ ['AI systems', BrainCircuit], ['Full-stack apps', Code2], ['Data & databases', Database] ];
function App() {
 const { scrollYProgress } = useScroll(); const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
 return <><motion.div className="progress" style={{scaleX}} />
 <main>
   <nav><a className="monogram" href="#top">MP<span>.</span></a><div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href={'mailto:' + email}>Contact</a></div><a className="nav-cta" href={'mailto:' + email}>Let’s talk <ArrowUpRight size={15}/></a></nav>
   <section className="hero" id="top"><div className="aurora a1"/><div className="aurora a2"/>
      <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="eyebrow"><Sparkles size={14}/> AVAILABLE FOR SELECTED WORK</motion.p>
      <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.8}}><span>I build digital</span><em>intelligence.</em></motion.h1>
      <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.7}} className="hero-bottom"><p>Hi, I’m <b>Manohar Poojary</b> — a developer shaping helpful AI experiences and full-stack products with care, curiosity, and a little bit of magic.</p><a href="#work" className="round-link"><ArrowDown size={22}/></a></motion.div>
   </section>
   <section className="marquee"><div>AI ENGINEERING <i/> FULL-STACK DEVELOPMENT <i/> HUMAN-CENTERED PRODUCTS <i/> AI ENGINEERING <i/> FULL-STACK DEVELOPMENT <i/></div></section>
   <section id="work" className="work"><div className="section-head"><span>01 — Selected work</span><h2>Built to be<br/><i>useful.</i></h2><p>A few projects at the intersection of software, data, and intelligent systems.</p></div>
     <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{clickable:true}} autoplay={{delay:4200,disableOnInteraction:false}} loop spaceBetween={18} breakpoints={{0:{slidesPerView:1.1},760:{slidesPerView:2.05},1100:{slidesPerView:2.8}}} className="project-swiper">{projects.map((project,i)=><SwiperSlide key={project.repo}><article className={'project-card ' + project.hue}><span className="project-no">0{i+1}</span><div className="orb"/><div className="project-info"><p>{project.tag}</p><h3>{project.name}</h3><span>{project.text}</span><a href={github + '/' + project.repo} target="_blank">View project <ArrowUpRight size={16}/></a></div></article></SwiperSlide>)}</Swiper>
   </section>
   <section className="about" id="about"><div className="about-sticky"><span>02 — Approach</span><p>Ideas deserve more than a prototype. I turn them into <i>intuitive</i>, thoughtful experiences people actually want to use.</p></div><div className="skill-list">{skills.map(([name,Icon],i)=><motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.12}} className="skill" key={name}><Icon/><span>0{i+1}</span><h3>{name}</h3><ArrowUpRight/></motion.div>)}</div></section>
   <section className="contact"><p className="eyebrow">03 — Start something</p><h2>Have a bright<br/><i>idea?</i></h2><a className="email-link" href={'mailto:' + email}>{email}<Send size={23}/></a><div className="socials"><a href={github} target="_blank"><b>GH</b> GitHub</a><a href={linkedin} target="_blank"><b>in</b> LinkedIn</a></div></section>
 </main><footer><span>© {new Date().getFullYear()} Manohar Poojary</span><span>Made with intention ✦</span></footer></>
}
createRoot(document.getElementById('root')).render(<App/>);
