import Head from "next/head";
import { useDispatch } from "react-redux";
import { FoodLayout } from "../src/components/Layouts/home";
import { FoodContent } from "../src/components/Layouts/home";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
    <Head>
      <title>Cheffy - Home</title>
    </Head>
      <FoodContent dispatch={dispatch} />
    </>
  );
};

Home.Layout = FoodLayout;

export default Home;
