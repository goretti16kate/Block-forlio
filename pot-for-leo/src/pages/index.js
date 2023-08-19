//Import React
import * as React from 'react'
import Layout from '../components/layout'
import Introduction from '../components/introduction'
import Stuff from '../components/stuff'
import Project from '../components/project'
import Contact from '../components/contact'

//Define the component
const HomePage = () => {
  return (
    <Layout>
      {/* <h1 className={heading}>Welcome to my Gatsby site</h1> */}
      <Introduction></Introduction>
      <Stuff></Stuff>
      <Project></Project>
      <Contact></Contact>
    </Layout>
 
  )
}

export const Head = () => <title>Home Page!</title>
export default HomePage