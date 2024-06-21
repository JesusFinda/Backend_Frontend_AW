import Header from "../../components/header";
import { Tabs } from "../../components/tab";
import { Table } from "../../components/table";

const AdministrativeManageBooking = () => {
  const bookingColumns = [
    "Serviço",
    "Profissional",
    "Data",
    "Hora",
    "Duração",
    "Preço",
    "Criado em ",
  ];
  return (
    <div className="flex flex-col items-center">
      <Header />

      <main className="mt-24 w-[60%] space-y-4">
        <Tabs
          tabs={["Marcações"]}
          tabChild={[<Table columns={bookingColumns} />]}
        />
      </main>
    </div>
  );
};

export default AdministrativeManageBooking;
