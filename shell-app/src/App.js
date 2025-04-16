import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("dashboard/App"));
const Settings = React.lazy(() => import("settings/App"));

function App() {
  return (
    <div>
      <h1>Shell App</h1>
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
