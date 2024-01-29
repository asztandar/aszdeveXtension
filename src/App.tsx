import './App.css'
import GridContainer from './components/GridContainer'
import GridItem from './components/GridItem';
import { CgColorPicker } from "react-icons/cg";
import { FaListCheck } from "react-icons/fa6";
import { BsRegex } from "react-icons/bs";
import { SiConvertio } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";
import { FaTextWidth } from "react-icons/fa6";
import { SiProtractor } from "react-icons/si";
function App() {

  const testClick = () => {
    console.log("test");
  }

  return (
    <>
      <div>
        <h1>AszDevExtension:</h1>
        <GridContainer>
          <GridItem onclick={testClick}><CgColorPicker /></GridItem>
          <GridItem onclick={testClick}><FaListCheck /></GridItem>
          <GridItem onclick={testClick}><BsRegex /></GridItem>
          <GridItem onclick={testClick}><SiConvertio /></GridItem>
          <GridItem onclick={testClick}><IoKeyOutline /></GridItem>
          <GridItem onclick={testClick}><FaTextWidth /></GridItem>
          <GridItem onclick={testClick}><SiProtractor /></GridItem>

        </GridContainer>
      </div>
    </>
  )
}

export default App
