import { MouseEvent } from 'react';
import styles from './Modal.module.css';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
  handleReplySubmit: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Modal({
  isModalOpen,
  toggleModal,
  handleReplySubmit,
}: Props) {
  return (
    isModalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <span className={styles.modal_header}>정말로 삭제하시겠습니까?</span>
          <div className={styles.modal_buttons}>
            <button
              className={`${styles.button} ${styles.confirm}`}
              onClick={(e) => handleReplySubmit(e)}
            >
              삭제
            </button>
            <button
              className={`${styles.button} ${styles.cancel}`}
              onClick={toggleModal}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    )
  );
}
