import React, { useEffect } from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";
import { createSelector } from "reselect";

const FoodGrid = ({ category }) => {
  const data = useSelector(foodSelector, shallowEqual);
  return (
    <Row
      className="food-grid"
      justify="center"
      gutter={[32, 48]}
      align="middle"
    >
      {category &&
        category.map((plate, index) => {
          return index < 6 ? (
            <Col
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              xxl={4}
              className="gutter-row"
              key={plate.id}
            >
              {/* <Link href={`/category/${encodeURIComponent(plate.id)}`}> */}
              <Link href="/category">
                <a>
                  <div className="flex flex-col food-card h-56">
                    <img className="category-icon" src={plate.url} alt="" />
                    <label className="category-label cursor-pointer">
                      {plate.name}
                    </label>
                  </div>
                </a>
              </Link>
            </Col>
          ) : (
            ""
          );
        })}
    </Row>
  );
};

const foodSelector = createSelector(
  (state) => state.food.collection,
  (data) => data
);

export default FoodGrid;
