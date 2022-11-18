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
  canonical,
}: MetadataProps) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="O melhor amigo de um Dev aqui :) | Dev Helper " />
        <meta name="twitter:creator" content="@" />
        <meta name="author" content="Lucas Aguiar" />
        <meta
          name="keywords"
          content="geradores, gerar, validar, validadores, helpes, gerar cpf, validar cpf, gerar cnpj, validar cnpj, helper"
        />

        <meta
          name="twitter:description"
          content="Encontre aqui as melhores ferramentas online para desenvolvedores, com nosso geradores e validadores de dados."
        />
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
        canonical={canonical}
        robotsProps={{
          noarchive: false,
          nosnippet: false,
          notranslate: false,
          noimageindex: false,
          maxImagePreview: 'large',
          maxSnippet: -1,
          maxVideoPreview: -1,
        }}
        openGraph={{
          title: title,
          description: description,
          url: canonical,
          locale: 'pt-BR',
          site_name: 'Dev Helper',
          article: {
            authors: ['Lucas Aguiar'],
            tags: [
              'geradores',
              'gerar',
              'validar',
              'validadores',
              'helpes',
              'gerar cpf',
              'validar cpf',
              'gerar cnpj',
              'validar cnpj',
              'helper',
            ],
          },
        }}
      />
    </>
  )
}
