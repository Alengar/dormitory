import { useState, useEffect } from "react";
import axiosInstance from "../../services/axios";
import Navbar from "../../Components/Navbar/Navbar";
import "./ComparingPage.scss";

const ComparingPage = () => {
  const [dormitories, setDormitories] = useState([]);
  const [dormList, setDormList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDormitories = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/dorm");
        setDormitories(response.data);
      } catch (error) {
        setError("Error fetching dormitories. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDormitories();
  }, []);

  const manageDormList = (id) => {
    setDormList((prevList) =>
      prevList.includes(id)
        ? prevList.filter((item) => item !== id)
        : prevList.length < 2
        ? [...prevList, id]
        : prevList
    );
  };

  const firstSelectedDorm = dormitories.find((item) => item._id === dormList[0]);
  const secondSelectedDorm = dormitories.find((item) => item._id === dormList[1]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="comparing">
        <h2>Dormitories list</h2>
        <div className="comparing-grid">
          {dormitories.map((item) => (
            <div key={item._id} className="comparing-item">
              <div className="comparing-item-part">
                <img src={item.previewImageUrl} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.location}</p>
                </div>
              </div>
              <div className="comparing-item-part">
                <input
                  type="checkbox"
                  disabled={!dormList.includes(item._id) && dormList.length >= 2}
                  checked={dormList.includes(item._id)}
                  onChange={() => manageDormList(item._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="comparing-results">
        <h2>Comparison</h2>
        {dormList.length === 2 ? (
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>{firstSelectedDorm.name}</th>
                <th>{secondSelectedDorm.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image</td>
                <td>
                  <img
                    src={firstSelectedDorm.previewImageUrl}
                    alt={firstSelectedDorm.name}
                    className="comparison-image"
                  />
                </td>
                <td>
                  <img
                    src={secondSelectedDorm.previewImageUrl}
                    alt={secondSelectedDorm.name}
                    className="comparison-image"
                  />
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{firstSelectedDorm.location}</td>
                <td>{secondSelectedDorm.location}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{firstSelectedDorm.price} ₸</td>
                <td>{secondSelectedDorm.price} ₸</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{firstSelectedDorm.description}</td>
                <td>{secondSelectedDorm.description}</td>
              </tr>
              <tr>
                <td>Capacity</td>
                <td>{firstSelectedDorm.capacity}</td>
                <td>{secondSelectedDorm.capacity}</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>{firstSelectedDorm.size} sq.m</td>
                <td>{secondSelectedDorm.size} sq.m</td>
              </tr>
              <tr>
                <td>Extras</td>
                <td>{firstSelectedDorm.extras.join(", ")}</td>
                <td>{secondSelectedDorm.extras.join(", ")}</td>
              </tr>
              <tr>
                <td>WiFi</td>
                <td>{firstSelectedDorm.hasWiFi ? "Yes" : "No"}</td>
                <td>{secondSelectedDorm.hasWiFi ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Meal</td>
                <td>{firstSelectedDorm.hasMeal ? "Yes" : "No"}</td>
                <td>{secondSelectedDorm.hasMeal ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{firstSelectedDorm.overallRate}</td>
                <td>{secondSelectedDorm.overallRate}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Please select 2 dormitories to compare.</p>
        )}
      </div>
    </>
  );
};

export default ComparingPage;
