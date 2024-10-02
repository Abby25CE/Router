import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Router from "./components/Router";
import Page404 from "./pages/404";

function App() {
  return (
    <main>
      <Router
        routes={[
          {
            path: "/",
            Component: HomePage,
          },
          {
            path: "/about",
            Component: AboutPage,
          },
        ]}
        defaultComponent={Page404}
      />
    </main>
  );
}

export default App;
