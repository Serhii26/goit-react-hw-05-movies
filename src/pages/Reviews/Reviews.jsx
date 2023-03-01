import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'pages/services/services';
const Reviews = () => {
  const [reviewsDetails, setreviewsDetails] = useState('');
  const { detailId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieIdDetails = await fetchReviews(detailId);
        setreviewsDetails(movieIdDetails);
      } catch (error) {
        console.log('🚀  error details', error);
      }
    };
    fetchData();
  }, [detailId]);
  // console.log(reviewsDetails);
  return (
    <>
      {reviewsDetails && reviewsDetails.length > 0 ? (
        <ul>
          {reviewsDetails.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{`Author:${author}`}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p> We don't have any review for this movie</p>
      )}
    </>
  );
};
export default Reviews;
