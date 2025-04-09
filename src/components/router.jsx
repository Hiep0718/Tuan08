import { createBrowserRouter } from "react-router-dom";
import RootPage from "./root";
import Dashboard from "./dashboard";
import ProjectPage from "./project";
import TeamPage from "./team";
import AnalyticsPage from "./analys";
import MessagesPage from "./magge";
import IntegrationsPage from "./intergra";
import NotFoul from "./notFoul";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
        { path: "dashboard", element: <Dashboard /> ,handle: { title: "Dashboard" }},
        { path: "project", element: <ProjectPage /> ,handle: { title: "Project" }},
        { path: "team", element: <TeamPage /> ,handle: { title: "Team" }},
        { path: "analytics", element: <AnalyticsPage /> ,handle: { title: "Analytics" }},
        { path: "messages", element: <MessagesPage /> ,handle: { title: "Messages" }},
        { path: "integrations", element: <IntegrationsPage /> ,handle: { title: "Integrations" }},
        { path: "*", element: <NotFoul /> ,handle: { title: "404 Page" }}
    ],
  },
]);

export default router;
