import React from 'react'
import Header from './Components/header/Header'
import Create from './Components/Create page/create'
import Notables from './Components/notables/Notables'
import Categories from './Components/Categories/Categories'
import Faq from './Components/faq/Faq'
import Resources from './Components/resources/Resources'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Create />
   
      <Faq />
      <Resources />
      <Footer />


    </div>
  )
}

export default App