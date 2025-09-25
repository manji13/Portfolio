import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path:'https://github.com/manji13'},
    {icon: <FaLinkedinIn />, path:'https://www.linkedin.com/in/manjitha-kavishan-35b645339/'}, 
    {icon: <FaEnvelope />, path:'mailto:manjikavi8@gmail.com'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Social