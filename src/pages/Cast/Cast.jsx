import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'pages/services/services';
import { Detailsitem } from './Cast.styled';

const Cast = () => {
  const [castDetails, setcastDetails] = useState('');
  const { detailId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieIdDetails = await fetchCredits(detailId);
        setcastDetails(movieIdDetails);
      } catch (error) {
        console.log('🚀  error details', error);
      }
    };
    fetchData();
  }, [detailId]);

  // console.log(castDetails); деталі

  return (
    <>
      {castDetails && (
        <>
          <ul>
            {castDetails.map(
              ({ credit_id, profile_path, original_name, character }) => {
                return (
                  <Detailsitem key={credit_id}>
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                        alt={original_name}
                        width={250}
                      />

                      <p>{original_name}</p>
                      <p> {`Character: ${character}`}</p>
                    </div>
                  </Detailsitem>
                );
              }
            )}
          </ul>
        </>
      )}
    </>
  );
};
export default Cast;
