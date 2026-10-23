import "@/styles/admin.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import AdminApp from "@/components/admin/AdminApp";

const route = getRoute("/admin/");

export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path, noindex: true });

export default function Page() {
  return <AdminApp />;
}
