import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

import scopedStyles from './css/index.module.css'

const BoxDescription = ({ icon, title, description }) => (
  <div className="flex-1 mx-5 p-3 rounded shadow bg-white text-black flex">
    <div className="text-center text-5xl text-grey-darker pr-3">
      <i className="fas fa-language"></i>
    </div>
    <div className="flex-1">
      <h5 className="m-0 p-0 pb-1 font-bold text-lg font-roboto-condensed text-kuru">Natural Language Processing</h5>
      <p className="m-0 p-0 text-xs">You can talk to the bot through DMs and it will reply to you. Our bot uses Natural Language Processing (with the help of Dialogflow) so you can type normal English sentences and the bot will understand most of the time!</p>
      <Link to="/page-2/"></Link>
    </div>
  </div>
)

const IndexPage = () => (
  <StaticQuery
    query={graphql`
    query IndexPageQuery {
      site {
        siteMetadata {
          companyName
        }
      }
    }
  `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className={`text-center text-white mb-5 ${scopedStyles.mainBlock}`}>
          <div className={`sm:p-14 md:p-20 lg:p-26 xl:p-32 ${scopedStyles.filter}`}>
            <h1 className="p-0 pb-3 m-0 font-roboto-condensed">{data.site.siteMetadata.companyName} Bot</h1>
            <p className="p-0 pb-3 m-0">An all purpose bot for Discord servers!</p>
            <div>
              <a href={`https://discordapp.com/oauth2/authorize?&client_id=514252558248706059&scope=bot&permissions=8`} target="_blank" rel="noopener noreferrer" className="inline-block m-3 no-underline hover:bg-grey-lighter bg-white p-3 text-sm text-kuru rounded shadow-lg"><i className="fas fa-robot"></i><span className="ml-2">Invite Bot</span></a>
              <a href="http://discord.kuru-anime.com/" target="_blank" rel="noopener noreferrer" className="inline-block m-3 no-underline hover:bg-grey-lighter bg-white p-3 text-sm text-kuru rounded shadow-lg"><i className="fab fa-discord"></i><span className="ml-2">Join Server</span></a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mb-5">
          <div className="flex">
            <BoxDescription />
            <BoxDescription />
            <BoxDescription />
          </div>
        </div>
      </Layout>
    )}
  />
)

BoxDescription.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

BoxDescription.defaultProps = {
  icon: ``,
  title: ``,
  description: ``,
}

export default IndexPage
