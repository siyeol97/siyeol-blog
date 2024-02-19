import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <aside className={styles.aside}>
      <ul>
        <li>메뉴 1</li>
        <li>메뉴 2</li>
        <li>메뉴 3</li>
        <li>메뉴 4</li>
        <li>메뉴 5</li>
        <li>메뉴 6</li>
        <li>메뉴 7</li>
      </ul>
    </aside>
  );
}
