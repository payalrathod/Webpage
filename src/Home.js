import styles from "./my-style.module.css";

const Home = () => {
  return (
    <div>
      <h1 className={styles.bigblue}>Home</h1>
      <p className={styles.bigblu}>This is our home page.</p>
    </div>
  );
};

export default Home;
