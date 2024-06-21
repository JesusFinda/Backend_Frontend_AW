import React, { useState } from "react";
import Header from "../../components/header";
import { Table } from "../../components/table";
import { Tabs } from "../../components/tab";

export const AdministratorMainPage = () => {
  const [currentTab, setCurrentTab] = useState();

  const clientColumns = [
    "Nome",
    "Nome de usuário",
    "BI",
    "Email",
    "Telefone",
    "Estado",
  ];
  const administrativeColumns = [
    "Nome",
    "Nome de usuário",
    "BI",
    "Email",
    "Telefone",
    "Estado",
  ];

  return (
    <div className="flex flex-col items-center">
      <Header />

      <main className="mt-24 w-[60%] space-y-4">
        <Tabs
          tabs={["Cliente", "Administrativo"]}
          tabChild={[
            <Table columns={clientColumns} />,
            <Table columns={administrativeColumns} />,
          ]}
        />
      </main>
    </div>
  );
};
