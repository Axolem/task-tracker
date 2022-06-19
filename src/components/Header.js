import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, author, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>
        {title} by {author}
      </h1>
      <Button color={showAdd ? 'Red' : 'Green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  author: "Axole Maranjana",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default Header;