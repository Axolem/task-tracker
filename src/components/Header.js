import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, author }) => {
  const onClick = () => {
    console.log("cliked");
  };
  return (
    <header className="header">
      <h1>
        {title} by {author}
      </h1>
      <Button color="green" text="Add" onClick={onClick} />
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
