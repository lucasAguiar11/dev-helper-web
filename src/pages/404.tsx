import { Metadata } from '../components/Metadata'
import NotFoundSVG from '../components/svgs/NotFoundSVG'

const NotFoundPage = () => {
  return (
    <>
      <Metadata
        title="Página não encontrada 😢"
        description="A página que você está procurando não foi encontrada."
        canonical="/404"
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 h-screen flex flex-col items-center">
        <NotFoundSVG className="h-96 mt-10" />
        <a className="text-xs" href="https://storyset.com/people">
          People illustrations by Storyset
        </a>
      </section>
    </>
  )
}

export default NotFoundPage
