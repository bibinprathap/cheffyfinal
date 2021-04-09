import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { mustTryAndRecommendedChef } from "../../../redux/actions/chef/chefAction";

const RecommendedChef = () => {
  const [recommended, setRecommended] = useState("");
  const dispatch = useDispatch();

  useEffect(async () => {
    const getMustTryAndRecommended = await dispatch(
      mustTryAndRecommendedChef()
    );
    const data = getMustTryAndRecommended.data;
    setRecommended(data["recommendedChefs"]);
  }, []);

  return (
    <>
      <Row
        className="food-grid mt-16 mb-10"
        gutter={32}
        justify="start"
        align="middle"
      >
        <Col className="my-5">
          <label className="font-extrabold text-5xl xs:text-4xl sm:text-4xl lg:text-5xl">
            Recommended Chef
          </label>
        </Col>
      </Row>
      <Row className="food-grid" justify="center" gutter={32} align="middle">
        {recommended &&
          recommended.map((chef, index) => {
            return index < 6 ? (
              <Col
                className="gutter-row h-64"
                xs={12}
                sm={8}
                md={6}
                lg={4}
                xl={4}
                xxl={4}
                key={chef.id}
              >
                <Link href={`/food-detail/${encodeURIComponent(chef.id)}`}>
                  <a>
                    <div className="flex flex-col py-6 px-3 items-center">
                      <img
                        className="category-icon mb-4"
                        src={chef.imagePath}
                        alt=""
                      />
                      <label className="category-label cursor-pointer">
                        {chef.name}
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
    </>
  );
};

export default RecommendedChef;
