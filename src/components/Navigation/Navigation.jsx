import styles from './navigation.module.scss'

import items from './items';

const Navigation = () =>{
  const elements = items.map(({id, text, link}) => <li key={id}>
    <a className = {styles.link} href = {link}>{text}</a>
  </li>)

  return(
    <ul className = {styles.menu}>{elements}</ul>
  )
}
export default Navigation;
