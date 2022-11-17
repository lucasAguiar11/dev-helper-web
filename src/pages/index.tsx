import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className="bg-white h-[calc(100vh-20vh)]">
        {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <BackgroundSVG className="w-screen h-screen" />
        </div> */}
        <main>
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-32 sm:pb-40">
              <div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    O melhor amigo de um Dev aqui :)
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    Confira aqui os melhores{' '}
                    <span className="text-primary font-bold">&quot;helpers&quot;</span> para o seu
                    dia a dia. 😁
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <Link
                      href="/helpers?section=validator"
                      className="inline-block rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary hover:bg-primary/80 hover:ring-primary"
                    >
                      Preciso Validar
                      <span className="text-gray-200" aria-hidden="true">
                        &rarr;
                      </span>
                    </Link>

                    <Link
                      href="/helpers?section=generator"
                      className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      Quero Gerar
                      <span className="text-gray-200" aria-hidden="true">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Script
        async
        id="ads-script-1"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADSENSE_CLIENT}`}
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7889378758959768"
        data-ad-slot="8186002461"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      <Script id="ads-script-2">(adsbygoogle = window.adsbygoogle || []).push({});</Script>
    </>
  )
}
