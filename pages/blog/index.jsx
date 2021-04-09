import React from "react";
import FoodHeader from "../../src/components/Layouts/Header/HomeHeader";
import { FoodFooter } from "../../src/components/Layouts/home";
import Blog from "../../src/components/Layouts/blog/Blog";

function Index({ data }) {
  return (
    <div>
      <FoodHeader />
      <Blog data={data} />
      <FoodFooter />
    </div>
  );
}

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
