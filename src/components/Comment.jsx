import { ThumbsUp, Trash } from 'phosphor-react';
import { Photo } from './Photo';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Photo hasBorder={false} src="https://github.com/LucasOtaviani.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Otaviani</strong>
              <time title="10 de Julho às 09:38" dateTime="2023-07-10">Cerca de 2 horas atrás</time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}