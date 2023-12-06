import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PublicNotice from "./page/Page1/PublicNotice";
import AllValidators from "./page/Page2/AllValidators";
import Overview from "./page/Page3/Overview";
import Overview2 from "./page/Page4/Overview2";
import Overview3 from "./page/Page5/Overview3";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/PublicNotice" element={<PublicNotice />} />
//           <Route path="/AllValidators" element={<AllValidators />} />
//           <Route path="/Overview" element={<Overview />} />
//           <Route path="/Overview2" element={<Overview2 />} />
//           <Route path="/Overview3" element={<Overview3 />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
function App() {

  const router = createBrowserRouter([
    {
      path: "/PublicNotice",
      element: <PublicNotice />,
    },
    {
      path: "/AllValidators",
      element: <AllValidators />,
    },
    {
      path: "/Overview",
      element: <Overview />,
    },
    {
      path: "/Overview2",
      element: <Overview2 />,
    },
    {
      path: "/Overview3",
      element: <Overview3 />,
    },

  ]);


  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;