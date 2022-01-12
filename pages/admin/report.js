import React from "react";

// components
import StatShow from "components/Stats/StatShow.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// layout for page

import AdminTable from "layouts/AdminTable";
import CardTableReport from "components/Cards/CardTableReport";


export default function Report() {

  return (
  <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <CardTableReport />
        </div>
      </div>
    </>
  );
}

Report.layout = AdminTable;
