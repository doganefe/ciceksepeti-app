import "./App.css";
import { Header, BreadcrumbBar } from "./features/header";
import { CategoryNavigation } from "./features/navigation";
import { ProductGrid } from "./features/products";
import { MobileAppDownload } from "./features/mobile-app";
import { Footer } from "./features/footer";
import Campaign from "./features/products/components/Campaign";

function App() {
  return (
    <div className="app">
      <Header />
      <BreadcrumbBar />

      <main>
        <CategoryNavigation />
        <ProductGrid />
        <hr className="main-hr" />
        <Campaign />
      </main>

      <MobileAppDownload />

      <Footer />
    </div>
  );
}

export default App;
