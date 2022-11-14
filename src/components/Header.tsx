import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BuildingStorefrontIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, HTMLAttributes } from 'react'

const validators = [
  {
    name: 'CPF',
    description: 'Valida CPF (Cadastro de Pessoa Física).',
    href: '/helpers?section=validator&helper=cpf',
    icon: UserIcon,
  },
  {
    name: 'CNPJ',
    description: 'Valida CNPJ (Cadastro Nacional da Pessoa Jurídica).',
    href: '/helpers?section=validator&helper=cnpj',
    icon: BuildingStorefrontIcon,
  },
]

const generators = [
  {
    name: 'CPF',
    description: 'Gerar CPF (Cadastro de Pessoa Física).',
    href: '/helpers?section=generator&helper=cpf',
    icon: UserIcon,
  },
  {
    name: 'CNPJ',
    description: 'Gerar CNPJ (Cadastro Nacional da Pessoa Jurídica).',
    href: '/helpers?section=generator&helper=cnpj',
    icon: BuildingStorefrontIcon,
  },
]

type HeaderProps = HTMLAttributes<HTMLDivElement>

const Header = (props: HeaderProps) => {
  return (
    <header {...props}>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">Your Company</span>
                <Image
                  src="/images/logo.png"
                  alt="Logo DevHelper"
                  width={140}
                  height={40}
                  draggable={false}
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`${open ? 'text-gray-900' : 'text-gray-700'}
                        group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                        `}
                    >
                      <span>Validadores</span>
                      <ChevronDownIcon
                        className={`
                          ${
                            open ? 'text-gray-600' : 'text-gray-400'
                          }ml-2 h-5 w-5 group-hover:text-gray-500`}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {validators.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-primary"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"></div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`${open ? 'text-gray-900' : 'text-gray-700'}
                        group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                        `}
                    >
                      <span>Geradores</span>
                      <ChevronDownIcon
                        className={`
                          ${
                            open ? 'text-gray-600' : 'text-gray-400'
                          }ml-2 h-5 w-5 group-hover:text-gray-500`}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {generators.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-primary"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"></div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {/* todo: logo no paypal */}
              <Link
                href={process.env.PAYPAL_DONATE || ''}
                target={'_blank'}
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Doações
              </Link>
              <a href="#" className="text-base font-medium text-gray-700 hover:text-gray-900">
                Sobre
              </a>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0"></div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src="/images/logo.png"
                      alt="Logo DevHelper"
                      width={150}
                      height={50}
                      draggable={false}
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-gray-700 text-sm border-b border-slate-100 font-medium pb-1 mb-3">
                    <h3>Geradores</h3>
                  </div>
                  <nav className="grid gap-y-8">
                    {generators.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex flex-col justify-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <div className="flex items-center">
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-indigo-600"
                            aria-hidden="true"
                          />
                          <p className="ml-3 text-base font-medium text-gray-900">{item.name}</p>
                        </div>

                        <p className="pl-9 text-sm text-gray-500">{item.description}</p>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mt-6">
                  <div className="text-gray700 text-sm border-b border-slate-100 font-medium pb-1 mb-3">
                    <h3>Validadores</h3>
                  </div>
                  <nav className="grid gap-y-8">
                    {validators.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex flex-col justify-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <div className="flex items-center">
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-indigo-600"
                            aria-hidden="true"
                          />
                          <p className="ml-3 text-base font-medium text-gray-900">{item.name}</p>
                        </div>

                        <p className="pl-9 text-sm text-gray-500">{item.description}</p>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    href={process.env.PAYPAL_DONATE || ''}
                    target={'_blank'}
                    className="text-base font-medium text-gray-700 hover:text-gray-900"
                  >
                    Doações
                  </Link>
                  <a href="#" className="text-base font-medium text-gray-700 hover:text-gray-900">
                    Sobre
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default Header
