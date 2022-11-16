import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="p-4 sm:mx-40 bg-white border-t border-gray-200/50 md:flex md:items-center md:justify-between md:p-6  bottom-0 left-0 right-0 ">
      <span className="text-sm text-gray-500 sm:text-center">
        © {new Date().getFullYear()}{' '}
        <a href="https://dev-helper.com.br" className="hover:underline">
          Dev Helper
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
        <li>
          <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/terms" className="mr-4 hover:underline md:mr-6 ">
            Termos de Uso
          </Link>
        </li>
        <li>
          <Link href="/privacy-policies" className="mr-4 hover:underline md:mr-6 ">
            Política de Privacidade
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
