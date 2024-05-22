import { Link } from "react-router-dom";

const DormitoryCard = ({ dorm }) => {
  return (
    <div className="dormitory-card">
      <img src={dorm.previewImageUrl} alt={dorm.name} />
      <h2>{dorm.name}</h2>
      <p>{dorm.location}</p>
      <p>{dorm.price}</p>
      <p>
        {dorm.description.length > 150
          ? dorm.description.substring(0, dorm.description.lastIndexOf(" ", 147)) + "..."
          : dorm.description}
      </p>
      <Link to={`/dormitory/${dorm.slug}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default DormitoryCard;
