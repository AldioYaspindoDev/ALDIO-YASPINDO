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
  SiLaravel,
  SiVite
} from '@icons-pack/react-simple-icons'

const PROJECTS: {
  slug: string
  name: string
  description: string
  problem: string
  solution: string
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
    description: `Ethereal Kreatif adalah aplikasi berbasis web yang dirancang untuk membantu perusahaan Ethereal memasarkan produk pakaian mereka. Pelanggan dapat dengan mudah menelusuri katalog pakaian dan melakukan pemesanan secara langsung. Tujuan utama pembuatan situs web ini adalah untuk mendorong digitalisasi dan meningkatkan kualitas UMKM (Usaha Mikro, Kecil, dan Menengah) di kota Padang.`,
    problem: `Sebelum adanya pengembangan sistem digital, perusahaan penjualan dan produksi baju serta sablon ini menghadapi berbagai tantangan yang berdampak langsung pada pertumbuhan bisnis. Penjualan yang masih berfokus secara offline mulai mengalami penurunan minat sejak masyarakat beralih ke platform e-commerce yang lebih praktis dan cepat. Selain itu, jangkauan pemasaran perusahaan hanya terbatas di dalam kota sehingga potensi pasar yang lebih luas belum dapat dimanfaatkan secara maksimal. Keterbatasan strategi promosi dan media pemasaran juga menyebabkan produk kurang dikenal oleh calon pelanggan di luar wilayah lokal, sehingga daya saing perusahaan menjadi semakin rendah di era digital saat ini.`,
    solution: `Sebagai solusi, dikembangkan sebuah website modern yang responsif dan dapat diakses dengan optimal melalui perangkat mobile maupun desktop untuk memberikan pengalaman pengguna yang lebih nyaman. Website ini dilengkapi dengan katalog produk interaktif beserta detail produk yang informatif, sehingga memudahkan pelanggan dalam memilih produk sesuai kebutuhan. Proses pemesanan dibuat lebih praktis melalui integrasi langsung ke WhatsApp serta sistem keranjang belanja yang responsif dan mudah digunakan. Dengan memanfaatkan teknologi JavaScript modern, proses pemesanan dapat dilakukan secara realtime sehingga meningkatkan kecepatan dan efisiensi layanan. Kehadiran website ini diharapkan mampu memperluas jangkauan pemasaran, meningkatkan daya tarik pelanggan, serta membantu perusahaan meningkatkan penjualan secara lebih efektif di era digital.`,
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
    description: 'Sistem Pemesanan Sewa Kendaraan PT. Cantigi International Tours adalah platform berbasis web yang dirancang untuk memudahkan penyewaan kendaraan secara online. Sistem ini mencakup manajemen kendaraan, pemesanan pelanggan, koordinasi pengemudi, pemrosesan pembayaran, dan pelaporan transaksi. Tujuan kami: meningkatkan efisiensi operasional dan kenyamanan pelanggan, sekaligus meningkatkan kualitas UMKM di Padang.',
     problem: 'Sebelum sistem digital diterapkan, perusahaan rental kendaraan masih menghadapi berbagai kendala operasional yang menghambat perkembangan bisnis. Jangkauan layanan rental hanya terbatas pada satu daerah sehingga peluang untuk menjangkau pelanggan yang lebih luas belum dapat dimaksimalkan. Selain itu, calon pelanggan harus datang langsung ke lokasi hanya untuk melihat daftar kendaraan dan mengetahui harga sewa, yang tentunya kurang efisien di era serba digital saat ini. Proses booking dan pencatatan transaksi juga masih dilakukan secara manual menggunakan buku, sehingga berisiko menyebabkan kesalahan pencatatan, kehilangan data, serta menyulitkan perusahaan dalam mengelola laporan keuangan secara akurat dan cepat.',
    solution: 'Untuk mengatasi permasalahan tersebut, dikembangkan sebuah website rental kendaraan online dengan sistem booking realtime yang memungkinkan pelanggan melakukan pemesanan langsung dari rumah secara praktis dan efisien. Website dirancang dengan tampilan yang minimalis, modern, dan responsif agar nyaman diakses melalui perangkat mobile maupun desktop. Pengguna dapat melihat ketersediaan kendaraan secara realtime lengkap dengan spesifikasi, harga sewa, dan syarat penyewaan sehingga proses pengambilan keputusan menjadi lebih mudah. Selain itu, sistem dilengkapi dengan pencatatan keuangan digital untuk membantu pengelolaan transaksi yang lebih rapi dan terstruktur, serta integrasi pembayaran menggunakan Midtrans yang aman dan terpercaya untuk meningkatkan kenyamanan dan keamanan transaksi pelanggan. Dengan adanya website ini, diharapkan perusahaan dapat memperluas jangkauan pasar, meningkatkan efisiensi operasional, serta memberikan pengalaman penyewaan kendaraan yang lebih baik bagi pelanggan di era digital saat ini.',
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
    description: `Ellegance Shoes adalah aplikasi berbasis web yang dirancang untuk membantu Ellegance Shoes memasarkan produk sepatu kulit mereka. Pelanggan dapat dengan mudah menelusuri katalog sepatu kulit dan melakukan pemesanan langsung. Tujuan utama pembuatan situs web ini adalah untuk mendorong digitalisasi dan meningkatkan kualitas UMKM (Usaha Mikro, Kecil, dan Menengah) di Padang`,
    problem: '',
    solution: '',
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
    slug: 'arcn',
    name: 'ArecaNut Grade AI',
    description: `ArecaNut Grade AI adalah platform Website dan Aplikasi Mobile yang dibangun untuk membantu para petani maupun perusahaan yang bergerak dibidang pertanian pengolahan biji pinang, agar dapat dengan cepat dan akuran dalam memprediksi Jenis pinang, Tingkat Kekeringan nya serta Harga dari pinang tersebut bedasarkan AI yang canggih.`,
    problem: '',
    solution: '',
    video: '',
    date: '2026-06-25',
    liveLink: 'https://areca-nut-grade-apps.vercel.app/',
    previewImage: '/arcn/Main.png',
    repoUrl: 'https://github.com/AldioYaspindoDev/ARECA-NUT-GRADE-APPS',
    skills: [
      { skill: 'FastAPI', icon: SiFastapi },
      { skill: 'React', icon: SiReact },
      { skill: 'Vite', icon: SiVite },
      { skill: 'ReactNative', icon: SiReact },
      { skill: 'MySQL', icon: SiMysql },
      { skill: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    slug: 'shmk',
    name: 'SahamKu',
    description: 'Buat Prediksi Harga Saham Yang Kamu Mau Kami memprediksi harga saham-saham besar US sebagai landasan kamu dalam mengambil keputusan investasi yang lebih cerdas',
    problem: '',
    solution: '', 
    video: '',
    date: '2025-01-01',
    liveLink: 'https://google.com',
    previewImage: '/shmk/MockupSahamku.png',
    repoUrl: 'https://github.com/AldioYaspindoDev/Sahamku-Apps',
    skills: [
      { skill: 'Python', icon: SiPython },
      { skill: 'FastAPI', icon: SiFastapi },
      { skill: 'React', icon: SiReact },
      { skill: 'Next.js', icon: SiNextdotjs },
      { skill: 'PostgreSQL', icon: SiPostgresql },
      { skill: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    slug: 'comingsoon',
    name: 'Cooming Soon',
    description: 'Lorem ipsum dolor sit amet',
    problem: '',
    solution: '',
    video: '',
    date: '2025-01-01',
    liveLink: 'https://google.com',
    previewImage: '/comingsoon.png',
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
