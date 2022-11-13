import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { Fragment, ReactNode, useState } from 'react'
import { CpfGenerator, CnpjGenerator } from './generators'
import { CnpjValidator, CpfValidator } from './valitators'

const filters = [
  {
    id: 'validator',
    name: 'Validadores',
    options: [
      { id: 'cpf', label: 'CPF', description: 'Cadastro de Pessoa Física' },
      { id: 'cnpj', label: 'CNPJ', description: 'Cadastro Nacional da Pessoa Jurídica' },
    ],
  },
  {
    id: 'generator',
    name: 'Geradores',
    options: [
      { id: 'cpf', label: 'CPF', description: 'Cadastro de Pessoa Física' },
      { id: 'cnpj', label: 'CNPJ', description: 'Cadastro Nacional da Pessoa Jurídica' },
    ],
  },
]

type SideMenuProps = {
  section: string
  helper: string
}

const SideOption: { [key: string]: { [key: string]: ReactNode } } = {
  validator: { cpf: <CpfValidator />, cnpj: <CnpjValidator /> },
  generator: { cpf: <CpfGenerator />, cnpj: <CnpjGenerator /> },
}

export default function SideMenu({ section, helper }: SideMenuProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.id} className="flex items-center">
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-5 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Nossos Helpers ❤</h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                {filters.map((sectionData) => (
                  <Disclosure
                    as="div"
                    key={sectionData.id}
                    className="border-b border-gray-200 py-6"
                    defaultOpen={sectionData.id === section}
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{sectionData.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {sectionData.options.map((option) => {
                              const selected = option.id === helper && sectionData.id === section
                              return (
                                <div
                                  key={option.id}
                                  className={`
                                  flex flex-col justify-center cursor-pointer 
                                  rounded-md py-2 group hover:bg-secondary/20
                                  ${selected ? 'bg-secondary/10' : ''}
                                  `}
                                  onClick={() => {
                                    console.log(`/helpers?section=${sectionData.id}&helper=${option.id}`)
                                    router.push(`/helpers?section=${sectionData.id}&helper=${option.id}`)
                                  }}
                                >
                                  <label
                                    className={` 
                                    ml-3 text-sm text-gray-600 cursor-pointer group-hover:text-gray-900 group-hover:font-medium
                                    ${selected ? 'font-medium text-gray-900' : ''}
                                `}
                                  >
                                    {option.label}
                                  </label>
                                  <small
                                    className={`
                                    ml-3 text-xs text-gray-500 group-hover:text-gray-700
                                    ${selected ? 'text-gray-700' : ''}
                                `}
                                  >
                                    {option.description}
                                  </small>
                                </div>
                              )
                            })}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <>
                  <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full p-2">
                    {section && helper && SideOption[section][helper]}
                  </div>
                </>
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
