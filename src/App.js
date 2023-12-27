import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from './components/layout/Main'

import Home2 from './pages/Home2'
import Skill from './components/work/Skill'
import AboutMe from './components/work/AboutMe'
import Content from './components/work/Content'
import Youtube from './components/work/Youtube'
import Gsap from './components/work/Gsap'
import Myuduck from './components/work/Myuduck'
import Mouse from './components/work/Mouse'
import Movie from './components/work/Movie'
import Slide from './components/work/Slide'
import AddPlus from './components/work/AddPlus'

const App = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route path='/' element={<Home2 />}></Route>
          <Route path='/skill' element={<Skill />}></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
          <Route path='/content' element={<Content />}></Route>
          <Route path='/youtube' element={<Youtube />}></Route>
          <Route path='/gsap' element={<Gsap />}></Route>
          <Route path='/myuduck' element={<Myuduck />}></Route>
          <Route path='/mouse' element={<Mouse />}></Route>
          <Route path='/movie' element={<Movie />}></Route>
          <Route path='/slide' element={<Slide />}></Route>
          <Route path='/addplus' element={<AddPlus />}></Route>
        </Routes>
      </Main>
    </div>
  )
}

export default App