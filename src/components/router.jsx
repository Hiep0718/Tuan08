import { createBrowserRouter } from "react-router-dom";
import RootPage from "./root";
import Dashboard from "./dashboard";
import ProjectPage from "./project";
import TeamPage from "./team";
import AnalyticsPage from "./analys";
import MessagesPage from "./magge";
import IntegrationsPage from "./intergra";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "project", element: <ProjectPage /> },
        { path: "team", element: <TeamPage /> },
        { path: "analytics", element: <AnalyticsPage /> },
        { path: "messages", element: <MessagesPage /> },
        { path: "integrations", element: <IntegrationsPage /> },
    ],
  },
]);

export default router;
