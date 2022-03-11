// eslint-disable-next-line import/no-anonymous-default-export
import { AiOutlineHome, AiOutlineUser, AiOutlineFileDone } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: 'home',
    label: 'HOME',
    icon: <AiOutlineHome />
  },
  {
    path: 'about',
    label: 'ABOUT',
    icon: <AiOutlineUser />
  },
  {
    path: 'portofolio',
    label: 'PORTOFOLIO',
    icon: <AiOutlineFileDone />
  },
  {
    path: 'contact',
    label: 'CONTACT',
    icon: <BiMessageDetail />
  },
];