import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import AnalyticsTable from "components/Cards/AnalyticsTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Analytics() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
        <div className="w-full mb-12 px-4">
          <AnalyticsTable/>
        </div>
      </div>
    </>
  );s
}

Analytics.layout = Admin;