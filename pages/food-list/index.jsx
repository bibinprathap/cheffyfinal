import React from "react";
import FoodListContent from "../../src/components/Layouts/foodList/FoodListContent";
import FoodHeader from "../../src/components/Layouts/Header/HomeHeader";
import { FoodFooter } from "../../src/components/Layouts/home";

const Index = ({ data }) => {
  return (
    <div>
      <FoodHeader />
      <FoodListContent data={data} />
      <FoodFooter />
    </div>
  );
};

export async function getServerSideProps() {
  let response = await (
    await fetch(`https://mycheffy.herokuapp.com/plate/`)
  ).json();

  const data = await response.data;

  return {
    props: { data },
  };
}

export default Index;
