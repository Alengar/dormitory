import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../services/axios";

const DormitoryDetailsPage = () => {
  const { slug } = useParams();
  const [dormitory, setDormitory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDormitory = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(`/dorm/${slug}`);
        setDormitory(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching dormitory details:", error);
        setIsLoading(false);
      }
    };

    fetchDormitory();
  }, [slug]);

  if (isLoading) return <h2>Loading...</h2>;
  if (!dormitory) return <h2>Dormitory not found!</h2>;

  return (
    <div className="dormitory-details-page">
      <img src={dormitory.previewImageUrl} alt={dormitory.name} />
      <h1>{dormitory.name}</h1>
      <p>{dormitory.location}</p>
      <p>{dormitory.price}</p>
      <p>{dormitory.description}</p>
    </div>
  );
};

export default DormitoryDetailsPage;
