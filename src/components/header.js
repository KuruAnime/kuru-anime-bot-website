import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const NavLink = ({ children }) => {
//   <a href={`http://${children}.kuru-anime.com/`} target="_blank" rel="noopener noreferrer" className="no-underline text-grey-light hover:text-white font-sans mr-3 text-sm">
//     {children}
//   </a>
// }

const Header = ({ siteTitle, botInviteLink, companyName }) => (
  <header className="mb-5 p-2 bg-kuru">
    <div className="container mx-auto flex items-center">
      <h1 className="m-0 p-0 font-roboto-condensed text-2xl">
        <Link to="/" className="no-underline text-white" title={siteTitle}>
          {companyName}
        </Link>
      </h1>
      {/* <nav className="ml-5 mr-auto">
        <NavLink>Discord</NavLink>
      </nav> */}
      <a href={botInviteLink} target="_blank" rel="noopener noreferrer" className="no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded">
        <FontAwesomeIcon icon="robot" /><span className="ml-2 font-sans">Invite {companyName}</span>
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  botInviteLink: PropTypes.string,
  companyName: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  botInviteLink: ``,
  companyName: ``,
}

// NavLink.propTypes = {
//   children: PropTypes.string,
// }

// NavLink.defaultProps = {
//   children: ``,
// }

export default Header
