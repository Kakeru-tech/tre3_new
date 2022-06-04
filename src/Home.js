import React from 'react'
import Adver from './Component/Adver'
import Banner from './Component/Banner'
import Book from './Component/Book'
import Gallary from './Component/Gallary'
import Header from './Component/Header'
import ShowCase from './Component/ShowCase'
import { auth } from './firebase'
import Frame from './Frame'

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Frame/>
            {/* <Services/> */}
            {/* <Book/> */}
            {/* <Location/>
            <Gallary/>
            <ShowCase/> */}
            <Adver/>
        </div>
    )
}

export default Home