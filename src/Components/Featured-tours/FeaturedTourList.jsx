import React from "react";
import TourCard from "../../Shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { Link } from "react-router-dom";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  return (
    <>
      {loading && <h4>Loading.......</h4>}

      {error && <h4>{error}</h4>}

      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button
          style={{
            width: "10%",
            padding: 10,
            fontSize: 20,
            borderRadius: 10,
            backgroundColor: "#16a085",
            border: "none",
            color: "#fff",
          }}
        >
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/tours">
            View All
          </Link>
        </button>
      </div>
    </>
  );
};

export default FeaturedTourList;
