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
  SiNestjs,
  SiPhp,
  SiLaravel
} from '@icons-pack/react-simple-icons'

const PROJECTS: {
  slug: string
  name: string
  description: string
  previewImage: string
  video: string
  date: string
  repoUrl: string
  liveLink: string
  skills: { skill: string; icon: IconType }[]
}[] = [
  {
    slug: 'ethr',
    name: 'Ethereal Kreatif',
    description: 'Ethereal Kreatif is a web-based application designed to help Ethereal company market their clothing products. Customers can easily browse the clothing catalog and place orders directly. The main goal of building this website is to drive digitalization and improve the quality of MSMEs (Micro, Small, and Medium Enterprises) in Padang.',
    video: '/ethr/ethr-mp4.mp4',
    date: '2025-07-15',
    liveLink: 'https://ethereal-kreatif-3wrunekc7-aldioyaspindodevs-projects.vercel.app/',
    previewImage: '/ethr/Main2.png',
    repoUrl: 'https://github.com/AldioYaspindoDev/EtherealCreativeProject',
    skills: [
      { skill: 'Node.js', icon: SiNodedotjs },
      { skill: 'React', icon: SiReact },
      { skill: 'Next.js', icon: SiNextdotjs },
      { skill: 'Express', icon: SiExpress },
      { skill: 'MySQL', icon: SiMysql },
      { skill: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    slug: 'cntg',
    name: 'Cantigi Rent Car',
    description: 'The Vehicle Rental Booking System of PT. Cantigi International Tours is a web-based platform designed to make online vehicle rental easy. It includes vehicle management, customer bookings, driver coordination, payment processing, and transaction reporting. Our goal: improve operational efficiency and customer comfort, while also boosting the quality of MSMEs in Padang.',
    video: '',
    date: '2025-07-16',
    liveLink: 'https://cantigitours.com',
    previewImage: '/ctgi/Main.png',
    repoUrl: 'https://github.com/Aldioyaspindo/PBL-Kelompok-5',
    skills: [
      { skill: 'PHP', icon: SiPhp },
      { skill: 'Laravel', icon: SiLaravel },
      { skill: 'Tailwind CSS', icon: SiTailwindcss },
      { skill: 'MySQL', icon: SiMysql },
    ],
  },
  {
    slug: 'elgc',
    name: 'Ellegance Shoes',
    description: 'Ellegance Shoes is a web-based application designed to help Ellegance Shoes market their leather shoes products. Customers can easily browse the leather shoes catalog and place orders directly. The main goal of building this website is to drive digitalization and improve the quality of MSMEs (Micro, Small, and Medium Enterprises) in Padang.',
    video: '',
    date: '2024-10-10',
    liveLink: 'https://ellegance-apps-hgtvhgj2l-aldioyaspindodevs-projects.vercel.app/',
    previewImage: '/ellg/Main2.png',
    repoUrl: 'https://github.com/AldioYaspindoDev/Ellegance-Apps',
    skills: [
      { skill: 'Node.js', icon: SiNodedotjs },
      { skill: 'React', icon: SiReact },
      { skill: 'Next.js', icon: SiNextdotjs },
      { skill: 'Express', icon: SiExpress },
      { skill: 'PostgreSQL', icon: SiPostgresql },
      { skill: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    slug: 'comingsoon',
    name: 'Cooming Soon',
    description: 'Lorem ipsum dolor sit amet',
    video: '',
    date: '2025-01-01',
    liveLink: 'https://google.com',
    previewImage: '/CoomingSooon.png',
    repoUrl: 'https://github.com',
    skills: [
      { skill: 'Node.js', icon: SiNodedotjs },
      { skill: 'React', icon: SiReact },
      { skill: 'Next.js', icon: SiNextdotjs },
      { skill: 'Express', icon: SiExpress },
      { skill: 'PostgreSQL', icon: SiPostgresql },
      { skill: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
];

export default PROJECTS
