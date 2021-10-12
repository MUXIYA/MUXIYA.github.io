// import Icon from '../icon'
import styles from "../styles/alert.module.css";
export default function divs(props) {
  const { type, children, className } = props;
  if (type == undefined) {
    type = 0;
  }
  console.log(type, children, className, styles.success);
  return (
    <>
      {type == 1 ? (
        <div className={styles[className]}> {children} </div>
      ) : (
        `${children}错误不显示`
      )}
    </>
  );
}
