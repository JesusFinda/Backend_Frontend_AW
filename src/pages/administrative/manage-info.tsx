import React from "react";
import Header from "../../components/header";
import { Tabs } from "../../components/tab";
import { Table } from "../../components/table";

const AdministrativeManageInformationPage = () => {
  const professionalColumns = ["Nome", "BI", "Email", "Telefone", "Estado"];
  const serviceColumns = [
    "Nome",
    "Descrição",
    "Duração",
    "Preço",
    "Criado em ",
  ];
  const categoryColumns = ["Nome", "Descrição", "Criado em "];
  return (
    <div className="flex flex-col items-center">
      <Header />

      <main className="mt-24 w-[60%]">
        <Tabs
          tabs={["Categoria", "Serviço", "Profissional"]}
          tabChild={[
            <Table columns={categoryColumns} />,
            <Table columns={serviceColumns} />,
            <Table columns={professionalColumns} />,
          ]}
        />
      </main>
    </div>
  );
};

export default AdministrativeManageInformationPage;
