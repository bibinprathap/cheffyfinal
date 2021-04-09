import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import { popularAndNew } from "../../../redux/actions/food";
import { useDispatch } from "react-redux";
import Image from "next/image";

const StarIcon = () => {
  return <img className="mr-2 w-4 h-4" src="/images/star.png" alt="rating" />;
};
const ClockIcon = () => {
  return <img className="mr-2 w-4 h-4" src="/images/clock.png" alt="time" />;
};
const TruckIcon = () => {
  return (
    <img className="mr-2" src="/images/truck.png" width="20px" alt="delivery" />
  );
};

const NewOnCheffy = ({ _new }) => {
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
            New on Cheffy
          </label>
        </Col>
      </Row>
      <Row className="food-grid" gutter={[32, 48]} justify="center" align="top">
        {_new &&
          _new.map((data, index) => {
            return index < 4 ? (
              <Col
                xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={6}
                xxl={6}
                key={data.id}
                className="new-food-card"
              >
                <Link href={`/food-detail/${encodeURIComponent(data.id)}`}>
                  <a>
                    <Row
                      justify="center"
                      align="middle"
                      className="new-food-image"
                      style={{
                        backgroundImage: `url(${data.PlateImages[0]?.url})`,
                      }}
                    >
                      {/* <Image src={data.PlateImages[0]?.url} width={350} height={250} layout="fixed" className="w-full rounded-md"  alt="Image" /> */}
                    </Row>
                    <Row className="my-5" justify="space-between">
                      <Col xs={8} sm={6} md={8} lg={8} xl={6} xxl={8}>
                        <Row align="middle" justify="start">
                          <StarIcon />
                          <label>4.5</label>
                        </Row>
                      </Col>
                      <Col xs={8} sm={9} md={8} lg={8} xl={9} xxl={8}>
                        <Row align="middle" justify="start">
                          <ClockIcon />
                          <label>15-20 min</label>
                        </Row>
                      </Col>
                      <Col xs={8} sm={9} md={8} lg={8} xl={9} xxl={8}>
                        <Row align="middle" justify="end">
                          <TruckIcon />
                          <label>Delivery</label>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <label className="label">{data.name}</label>
                    </Row>
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

export default NewOnCheffy;
