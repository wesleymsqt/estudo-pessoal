import styles from './styles.module.css';

type GeneticHtmlProps = {
  children?: React.ReactNode;
};

export function GenericHtml({ children }: GeneticHtmlProps) {
  return (
    <div className={styles.genericHtml}>
      {children}
    </div>
  );
}