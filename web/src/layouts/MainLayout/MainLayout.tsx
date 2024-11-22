import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default MainLayout
