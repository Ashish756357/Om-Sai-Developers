import NargoliTownshipLanding from "@/components/NargoliTownshipLanding";
import StructuredData from "@/app/structured-data";
import MaintenancePage from "@/components/MaintenancePage";

export default function Home() {
  if (process.env.MAINTENANCE_MODE === "true") {
    return <MaintenancePage />;
  }

  return (
    <>
      <StructuredData />
      <NargoliTownshipLanding />
    </>
  );
}
