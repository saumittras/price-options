import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li
        key={route.id}
        className="mr-10 px-6 text-xl font-semibold hover:bg-blue-800 hover: rounded-full hover:text-white hover:"
      >
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
