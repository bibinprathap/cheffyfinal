import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FoodHeader from "../../../src/components/Layouts/Header/HomeHeader";
import KitchenDetails from "../../../src/components/Layouts/kitchen/KitchenDetails";
import axiosClient from "../../../src/utils/axios-config";
import Head from "next/head";
import FoodFooter from "../../../src/components/Layouts/home/FoodFooter";

function ChefKitchen() {
  const router = useRouter();
  const [kname, setKname] = useState("");
  const [kitchenId, setKitchenId] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [allKitchen, setAllKitchen] = useState("");

  useEffect(async () => {
    if (router.isReady) {
      const { kname, kitchenid } = router.query;

      setKitchenId(kitchenid);
      setKname(kname);

      try {
        const res = await axiosClient.get(
          `https://cheffyus-api.herokuapp.com/kitchens/?name=${encodeURIComponent(
            kname
          )}`
        );
        setKitchen(res[0]);
      } catch (e) {
        console.log(e);
      }

      try {
        const res = await axiosClient.get(
          `https://cheffyus-api.herokuapp.com/kitchens`
        );
        
        setAllKitchen(res);
      } catch (e) {
        console.log(e);
      }
    }
  }, [router.query]);

  return (
    <>
      <Head>
        {kname ? <title>{`Kitchen - ${kname}`}</title> : <title>Loading</title>}
      </Head>
      <FoodHeader />
      {kitchen && (
        <KitchenDetails
          kitchenId={kitchenId}
          data={kitchen}
          allKitchen={allKitchen}
        />
      )}
      <FoodFooter />
    </>
  );
}

export default ChefKitchen;
