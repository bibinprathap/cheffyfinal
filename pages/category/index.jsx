import React from "react";
import { useDispatch } from "react-redux";
import FoodHeader from "../../src/components/Layouts/Header/HomeHeader";
import { FoodFooter } from "../../src/components/Layouts/home";
import Category from "../../src/components/Layouts/category/Category";
import Head from "next/head";
import { cheffApi } from '../../src/api';

function Index(props) {
  const { categoriesArray } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <title>
          Cheffy - Category
        </title>
      </Head>
      <FoodHeader />
      <Category categoriesArray={categoriesArray} dispatch={dispatch} />
      <FoodFooter />
    </div>
  );
}
export const getServerSideProps = async ({ params }) => {
  //we are  cache this api responce for 1/24 hour 
  //in the node server for avoiding the repeated api call and improving ther performence 
  const categories = await cheffApi.getfoodCategories();
  return {
    props: {
      categoriesArray: { data: categories.data },
    }
  }
};
export default Index;
