import './styles.css';
import Selection from './components/Selection'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import GeneralForm from './components/forms/GeneralForm'

function App() {
  
  return (
  <>
   <div className="selection">
     <Selection />
   </div> 
   <div className="preview">
   </div>
  </>
  )
}

export default App;
