import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/moviesAPI';
import Review from 'components/Review/Review';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('fetch');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsContent = await API.reviews(movieId);
        setReviews(reviewsContent);
        setStatus('finish');
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    status === 'finish' &&
    (reviews.length > 0 ? (
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <Review author={author} content={content} />
          </li>
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie</p>
    ))
  );
};

export default Reviews;
