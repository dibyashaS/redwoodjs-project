// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

//import SharedLink from 'src/components/SharedLink/SharedLink'
import SharedLinksCell from 'src/components/SharedLink/SharedLinksCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>

      <SharedLinksCell />

  <SharedLink title={''} points={123} username={''} commentCount={0} link={''} />
      {/*
          My default route is named `home`, link to me with:
          `<Link to={routes.home()}>Home</Link>`
      */}
    </>
  )
}

export default HomePage
