import { NewOnCheffyContent } from '../../src/components/Layouts/new-in-cheffy/';
// import ProtectedKitchen from '../../src/components/Layouts/kitchen/ProtectedKitchen';
import FoodHeader from '../../src/components/Layouts/Header/HomeHeader';
import FoodFooter from "../../src/components/Layouts/home/FoodFooter";
// import { KitchenLayout } from '../../src/components/Layouts/kitchen/KitchenLayout';

const NewOnCheffySection = () => {
  return (
    <>
      <FoodHeader />
      <NewOnCheffyContent />
      <FoodFooter />
    </>
  );
};


// KitchenSection.Layout = KitchenLayout;
// const KitchenSectionComponent = ProtectedKitchen(KitchenSection);
// KitchenSectionComponent.Layout = KitchenLayout;
// export default KitchenSectionComponent;
export default NewOnCheffySection
