import PropTypes from 'prop-types';

const Review = ({ author = '', content = '' }) => {
  return (
    <div>
      <p>Author: {author}</p>
      <p>{content}</p>
    </div>
  );
};

export default Review;

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
