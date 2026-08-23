import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-offwhite text-navy-900">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
