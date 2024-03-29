import styles from '../css/Skeleton.module.css';

interface Props {
  width: string;
  height: string;
}

export default function Skeleton({ width = '100%', height }: Props) {
  const size = { width: width, height: height };
  return (
    <div
      className={styles.skeleton}
      style={size}
    />
  );
}
