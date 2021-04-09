import { DriverContent, DriverLayout } from "../../src/components/Layouts/driver";
// import ProtectedDriver from "../../src/components/Layouts/driver/ProtectedDriver";


const DriverSection = () => {
  return (
    <>
      <DriverContent />
    </>
  );
};

// const DriverSectionComponent = ProtectedDriver(DriverSection);
DriverSection.Layout = DriverLayout;
export default DriverSection;
