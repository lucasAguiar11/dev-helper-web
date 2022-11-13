import { GetServerSideProps, NextPage } from 'next'

import SideMenu from '../components/SideMenu'

type HelpersProps = {
  section: string
  helper: string
}

const Helpers: NextPage<HelpersProps> = ({ section, helper }) => {
  return <SideMenu section={section} helper={helper} />
}

export default Helpers

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { section, helper } = ctx.query

  const dt: HelpersProps = {
    section: (section as string) ?? null,
    helper: (helper as string) ?? null,
  }
  console.log(dt)
  return {
    props: {
      ...dt,
    },
  }
}
