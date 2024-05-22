import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import axiosInstance from "../../services/axios.js";
import DormitoryCard from "../../Components/Dormitory/DormitoryCard.jsx";
import "./dormitory.scss";
import { filterDormitories } from "../../utils/utils.js";

const DormitoryPage = () => {
  const [dormitories, setDormitories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [hasWiFi, setHasWiFi] = useState(false);
  const [hasMeal, setHasMeal] = useState(false);
  const filteredDormitories = filterDormitories(dormitories, search, hasWiFi, hasMeal);

  useEffect(() => {
    const fetchDormitories = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/dorm");
        setDormitories(response.data);
        console.log(dormitories);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching dormitories:", error);
      }
    };

    fetchDormitories();
  }, []);

  return (
    <div className="dormitory-page">
      <h1>Find Your Dormitory</h1>
      <div className="dormitory-container">
        <div className="dormitory-search">
          <h3 className="dormitory-search-title">Search dormitoriy by name:</h3>
          <div className="dormitory-search-wrapper">
            <input
              type="text"
              className="dormitory-search-input"
              placeholder="Enter name of dorm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <CiSearch />
          </div>
        </div>
        <div className="dormitory-wrapper">
          <div className="dormitory-grid">
            {isLoading ? (
              <h2>Loading...</h2>
            ) : filteredDormitories.length === 0 ? (
              <h2>Dorms not found!</h2>
            ) : (
              filteredDormitories.map((dorm) => <DormitoryCard key={dorm._id} dorm={dorm} />)
            )}
          </div>
          <div className="dormitory-sorting">
            <div className="dormitory-sorting-checkbox">
              <input type="checkbox" checked={hasWiFi} onChange={() => setHasWiFi(!hasWiFi)} />
              <p>has Wi-Fi</p>
            </div>
            <div className="dormitory-sorting-checkbox">
              <input type="checkbox" checked={hasMeal} onChange={() => setHasMeal(!hasMeal)} />
              <p>has meal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DormitoryPage;
