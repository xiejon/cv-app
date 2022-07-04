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
      name: 'Adam Smith',
      phone: '(212) 414-2809', 
      email: 'adamsmith@smith.com'
    },
    education: {
      name: '',
      degree: '',
      startDate: '',
      endDate: ''
    }, 
    experience: {
      title: '',
      employer: '',
      startDate: '',
      endDate: '',
      description: ''
    },
    skills: {
      description: ''
    }
  })

  return (
  <>
   <div className="selection">
     <General update={setInfo} />
     <Education update={setInfo} />
     <Experience update={setInfo} />
     <Skills update={setInfo} />

   </div> 
   <div className="preview">
     <PrintPreview info={info}/>
   </div>
  </>
  )
}

export default App;
