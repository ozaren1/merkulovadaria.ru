import { cn } from '@@@/shared/lib/utils';
import styles from './Container.module.scss';
 
interface Props {
  className?: string;
}
const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <div className={cn(styles.container, className)}>{children}</div>
  );
};

export default Container;



