import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'

type MetadataProps = {
  title?: string
  description?: string
  canonical?: string
}

export const Metadata = ({
  title = 'O melhor amigo de um Dev aqui :)',
  description = 'Encontre aqui as melhores ferramentas online para desenvolvedores, com nosso geradores e validadores de dados.',
  canonical = '/',
}: MetadataProps) => {
  const router = useRouter()

  const author = 'Lucas Aguiar'
  const keysWords =
    'desenvolvedores, dados, geradores, gerar, validar, validadores, helpes, gerar cpf, validar cpf, gerar cnpj, validar cnpj, helper'
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=1"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="twitter:title" content={`${title} | Dev Helper`} />
        <meta name="twitter:creator" content={author} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keysWords} />
        <meta name="twitter:description" content={description} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
      </Head>

      <NextSeo
        titleTemplate="%s | Dev Helper"
        defaultTitle="O melhor amigo de um Dev aqui :)"
        title={title}
        description={description}
        canonical={`${process.env.BASE_URL}${canonical}`}
        robotsProps={{
          noarchive: false,
          nosnippet: false,
          notranslate: false,
          noimageindex: false,
          maxImagePreview: 'large',
          maxSnippet: -1,
          maxVideoPreview: -1,
        }}
        twitter={{
          handle: '@',
          site: 'https://dev-helper.com.br',
          cardType: 'summary',
        }}
        openGraph={{
          title: `${title} | Dev Helper`,
          description: description,
          url: `${process.env.BASE_URL}${canonical}`,
          locale: 'pt-BR',
          site_name: 'Dev Helper',
          article: {
            authors: [author],
            tags: keysWords.split(','),
          },
        }}
      />
    </>
  )
}
