import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss'

import items from './items';

const Navigation = () =>{
  const elements = items.map(({id, text, link}) => <li key={id}>
    <NavLink className = {styles.link} to = {link}>{text}</NavLink>
  </li>)

  return(
    <ul className = {styles.menu}>{elements}</ul>
  )
}
export default Navigation;
