import AppLayout from "./components/AppLayout/AppLayout.jsx";
import { cheats } from "./utils/loadCheats.js";

export default function App() {
  return <AppLayout cheats={cheats} />;
}
