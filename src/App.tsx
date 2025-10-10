import "./App.css";
import { Header, BreadcrumbBar } from "./features/header";
import { CategoryNavigation } from "./features/navigation";
import { ProductGrid } from "./features/products";
import { MobileAppDownload } from "./features/mobile-app";
import { Footer } from "./features/footer";
import {
  CATEGORIES,
  BREADCRUMB_ITEMS,
  PRODUCTS,
  MOBILE_APP_CONFIG,
} from "./shared/constants";
import Campaign from "./features/products/components/Campaign";

function App() {
  return (
    <div className="app">
      <Header />
      <BreadcrumbBar items={[...BREADCRUMB_ITEMS]} />

      <main>
        <CategoryNavigation categories={[...CATEGORIES]} />
        <ProductGrid products={[...PRODUCTS]} />
        <hr className="main-hr" />
        <Campaign />
      </main>

      <MobileAppDownload {...MOBILE_APP_CONFIG} />

      <Footer />
    </div>
  );
}

export default App;
