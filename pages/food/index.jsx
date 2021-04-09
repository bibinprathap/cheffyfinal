import { FoodContent, FoodLayout } from "../../src/components/Layouts/home";
import { useDispatch } from "react-redux";

const FoodSection = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FoodContent dispatch={dispatch} />
    </>
  );
};

FoodSection.Layout = FoodLayout;

export default FoodSection;
