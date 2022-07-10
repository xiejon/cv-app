import React from 'react'
import './styles.css';
import Preview from './components/Preview'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'

import PrintPreview from './components/Print'

function App() {
  const [info, setInfo] = React.useState({
    general: {
      name: 'Jane Doe',
        email: 'janedoe@doe.com',
        phone: '(414)-432-9078'
    },
    education: [],
    experience: [],
    skills: []
  })


  return (
  <>
   <div className="main">
    <div className="logo">
        <h1>CV Generator</h1>
      </div>
     <div className="selection">
       <General update={setInfo} />
       <Education update={setInfo} />
       <Experience update={setInfo} />
       <Skills update={setInfo} />
     </div>
   </div>
   <div className="preview">
     <PrintPreview info={info}/>
   </div>
  </>
  )
}

export default App;
