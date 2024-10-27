import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li key={route.id} className="mr-10">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );

  // eslint-disable-next-line no-unreachable
  Link.propTypes = {
    route: PropTypes.object,
  };
};

export default Link;
