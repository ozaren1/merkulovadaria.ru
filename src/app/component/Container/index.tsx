import styles from './Container.module.scss';
 

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>{children}</div>
  );
};

export default Container;



