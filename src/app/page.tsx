import Hero from '@/components/hero'
import LatestProject from '@/components/latest-project'
import ProgramingLanguage from '@/components/programing-language'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div className="font-base">
      <Hero />
      <ProgramingLanguage />
      <LatestProject />
      <Contact />
    </div>
  )
}
