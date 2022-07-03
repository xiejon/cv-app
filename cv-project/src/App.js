import React from 'react'
import './styles.css';
import Preview from './components/Preview'
import GeneralForm from './components/GeneralForm';


function App() {
  const [info, setInfo] = React.useState({
    general: {
      name: '',
      phone: '', 
      email: ''
    }
  })

  console.log(info)

  return (
  <>
   <div className="selection">
     <GeneralForm update={setInfo}/>
   </div> 
   <div className="preview">
     <Preview info={info}/>
   </div>
  </>
  )
}

export default App;
