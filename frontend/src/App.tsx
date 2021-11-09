import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary"> Spring React </h1>
        <header className="text-warning">$$$</header>
      <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
