import React, { useRef, useState } from "react";
import { Col, Form, FormGroup } from "reactstrap";
import "./search-bar.css";

import { BASE_URL } from "./../utils/config";
import { useNavigate } from "react-router-dom";
import data from "../assets/data/location.json";
import { ErrorToast } from "../helper/Toast";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return ErrorToast("All fields are required!");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) ErrorToast("Something went wrong");

    const result = await res.json();

    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };

  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  localStorage.setItem("value", value);
  localStorage.setItem("place", value);

  const [peoplesize, setPeopleSize] = useState("");
  const onChange1 = (event) => {
    setPeopleSize(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search", searchTerm);
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>

            <div>
              <h6>Location</h6>

              <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          {/* <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>

            <div>
              <h6>Date</h6>
              <FaCalendarAlt className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
            </div>
          </FormGroup> */}
          {/* <FormGroup>
            <div className="d-flex gap-3 form_group form_group-fast">
              <span>
                <i class="ri-calendar-2-fill"></i>
              </span>

              <div>
                <h6>Date</h6>
                <div className="headerSearchItem">
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                    style={{ fontSize: 15, color: "#000" }}
                    ref={distanceRef}
                  >
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>
                </div>
              </div>
            </div>

            <div>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  // minDate={new Date()}
                />
              )}
            </div>
          </FormGroup> */}

          <FormGroup className="d-flex gap-3 form_group form_group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>

            <div>
              <h6>Max People</h6>
              <input
                type="number"
                placeholder="0"
                value={peoplesize}
                onChange={onChange1}
                ref={maxGroupSizeRef}
              />
            </div>
          </FormGroup>

          <span
            className="search_icon"
            type="submit"
            onSubmit={() => onSearch(value)}
            onClick={searchHandler}
          >
            <i className="ri-search-line"></i>
          </span>
        </Form>

        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const City = item.city.toLowerCase();

              return (
                searchTerm && City.startsWith(searchTerm) && City !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.city)}
                className="dropdown-row"
                key={item.city}
              >
                {item.city}
              </div>
            ))}
        </div>
      </div>
    </Col>
  );
};

export default SearchBar;
