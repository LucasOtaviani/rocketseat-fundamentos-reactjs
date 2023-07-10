import { PencilSimpleLine } from 'phosphor-react';
import { Photo } from './Photo';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
      />

      <div className={styles.profile}>
        <Photo src="https://github.com/LucasOtaviani.png" />

        <strong>Lucas Otaviani</strong>
        <span>Back-end Developer</span>

        <footer>
          <a href="#">
            <PencilSimpleLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}
