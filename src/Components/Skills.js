import {FaReact, FaPython, FaGitAlt, FaGithub, FaFigma, FaJava, FaJenkins } from "react-icons/fa";
import {TbSql} from "react-icons/tb";
import {SiMongodb, SiJulia, SiSelenium, SiApachegroovy, SiGraphql, SiJavascript} from "react-icons/si";
import {BsFiletypeXml} from "react-icons/bs";
import { TbHexagonLetterC } from "react-icons/tb";

const Skills = ({skill}) => {
    const icon = {
        Julia: <SiJulia/>,
        Python : <FaPython/>,
        Java: <FaJava/>,
        GraphQl: <SiGraphql/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Groovy : <SiApachegroovy/>,
        XML : <BsFiletypeXml/>,
        SQL : <TbSql/>,
        Selenium : <SiSelenium/>,
        React : <FaReact/>,
        Jenkins : <FaJenkins/>,
        C : <TbHexagonLetterC/>,
        Javascript : <SiJavascript/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
