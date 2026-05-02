import {
  type IconType,
  SiFlutter,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiFlask,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiGithub,
  SiNestjs
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'HTML', icon: SiHtml5 },
        { skill: 'CSS', icon: SiCss3 },
        { skill: 'JavaScript', icon: SiJavascript },
        { skill: 'TypeScript', icon: SiTypescript },
        { skill: 'React', icon: SiReact },
        { skill: 'Next.js', icon: SiNextdotjs },
        { skill: 'Bootstrap', icon: SiBootstrap },
        { skill: 'Tailwind', icon: SiTailwindcss },
        { skill: 'Flutter', icon: SiFlutter },
      ],
    },
    {
      field: 'Backend',
      skills: [
        { skill: 'MySQL', icon: SiMysql },
        { skill: 'PostgreSQL', icon: SiPostgresql },
        { skill: 'MongoDB', icon: SiMongodb },
        { skill: 'Node.js', icon: SiNodedotjs },
        { skill: 'Pyhton', icon: SiPython },
        { skill: 'Express', icon: SiExpress },
        { skill: 'NestJs', icon: SiNestjs },
        { skill: 'Flask', icon: SiFlask },
        { skill: 'Fast API', icon: SiFastapi },
        { skill: 'Nginx', icon: SiNginx },
        { skill: 'Docker', icon: SiDocker },
        { skill: 'Git', icon: SiGit },
        { skill: 'Github', icon: SiGithub },
      ],
    },
  ]

export default SKILLS
