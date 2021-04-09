import React from "react";
import { useRouter } from "next/router";
import { FoodDetailContent } from "../../src/components/Layouts/food-detail/";
import FoodHeader from "../../src/components/Layouts/Header/HomeHeader";
import FoodFooter from "../../src/components/Layouts/home/FoodFooter";

const Index = ({ data, platesRelated }) => {
  const router = useRouter();
  const foodId = router.query.foodId || [];
  return (
    <div>
      <FoodHeader />
      <FoodDetailContent foodId={foodId} data={data} platesRelated={platesRelated} />
      <FoodFooter />
    </div>
  );
};

export async function getServerSideProps({ query }) {
  let response = await (
    await fetch(`https://mycheffy.herokuapp.com/plate/show/${query.foodId}`)
  ).json();

  const data = await response.data;

  response = await (
    await fetch(`https://mycheffy.herokuapp.com/plate/${query.foodId}/related`)
  ).json();

  const platesRelated = await response.data;

  return {
    props: { data, platesRelated },
  };
}

export default Index;
