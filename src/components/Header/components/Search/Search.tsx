// Styles
import Styles from "./styles/index.module.scss";

// TODO: add dropdown and search logic
const Search = () => {
  return (
    <div className={Styles.search}>
      <img src="/search-blue.svg" alt="search icon" className={Styles.icon} />
    </div>
  );
};

export default Search;
