import Devices from "views/Devices/Devices";
import DeviceDashboard from "views/DeviceDashboard/DeviceDashboard"

const dashboardRoutes = [
  {
    path: "/devices",
    name: "Devices",
    icon: "pe-7s-usb",
    component: Devices
  },
  {
    path: "/devicedashboard",
    name: "DeviceDashboard",
    component: DeviceDashboard,
    hidden: true
  },
  { redirect: true, path: "/", to: "/devices", name: "Devices" }
];

export default dashboardRoutes;
