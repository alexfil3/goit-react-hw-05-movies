import PropTypes from 'prop-types';

const Character = ({ name = '', character = '', profile_path = '' }) => {
  const img = `https://image.tmdb.org/t/p/w500${profile_path}`;

  const imageUrl = profile_path !== null ? img : require('./default-img.jpg');

  return (
    <div>
      <img src={imageUrl} alt={name} height="150" width="100" />
      <p>{name}</p>
      <p>{character}</p>
    </div>
  );
};

export default Character;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};
