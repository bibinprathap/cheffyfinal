import React from "react";
import { useDispatch } from "react-redux";
import Faq from "../../src/components/Layouts/faq/Faq";
import FoodHeader from "../../src/components/Layouts/Header/HomeHeader";
import { FoodFooter } from "../../src/components/Layouts/home";

function Index() {
  const dispatch = useDispatch();
  return (
    <div>
      <FoodHeader />
      <Faq dispatch={dispatch} />
      <FoodFooter />
    </div>
  );
}

export default Index;
