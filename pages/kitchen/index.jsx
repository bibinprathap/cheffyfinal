import { KitchenHeader, KitchenContent, KitchenFooter } from '../../src/components/Layouts/kitchen/';
// import ProtectedKitchen from '../../src/components/Layouts/kitchen/ProtectedKitchen';
import FoodHeader from '../../src/components/Layouts/Header/HomeHeader';
import FoodFooter from "../../src/components/Layouts/home/FoodFooter";
// import { KitchenLayout } from '../../src/components/Layouts/kitchen/KitchenLayout';

const KitchenSection = () => {
  return (
    <>
      <FoodHeader />
      <KitchenContent />
      <FoodFooter />
    </>
  );
};


// KitchenSection.Layout = KitchenLayout;
// const KitchenSectionComponent = ProtectedKitchen(KitchenSection);
// KitchenSectionComponent.Layout = KitchenLayout;
// export default KitchenSectionComponent;
export default KitchenSection
