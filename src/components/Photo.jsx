import styles from './Photo.module.css'

export function Photo({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.photoWithBorder : styles.photo}
      src={src}
    />
  );
}
