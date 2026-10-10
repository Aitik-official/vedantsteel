import type { Metadata } from "next";
import { Suspense } from "react";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Products & Engineering Catalogue | Vedant Steel Corporation",
  description:
    "Stainless steel flexible hoses, expansion bellows, automotive exhaust connectors, and industrial metal products manufactured to international standards.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center px-4 py-20 text-center text-sm text-[#666]">
            Loading product catalogue…
          </div>
        }
      >
        <ProductCatalog />
      </Suspense>
    </main>
  );
}
