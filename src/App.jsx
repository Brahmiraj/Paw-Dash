import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicNotice from "./page/Page1/PublicNotice";
import AllValidators from "./page/Page2/AllValidators";
import Overview from "./page/Page3/Overview";
import Overview2 from "./page/Page4/Overview2";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/PublicNotice" element={<PublicNotice />} />
          <Route path="/AllValidators" element={<AllValidators />} />
          <Route path="/Overview2" element={<Overview2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;