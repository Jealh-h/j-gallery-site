import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const categories = [
  { id: "portrait", name: "人像摄影", icon: "👤" },
  { id: "street", name: "人文摄影", icon: "🏘️" },
  { id: "landscape", name: "风景摄影", icon: "🏔️" },
  { id: "wildlife", name: "野生动物", icon: "🦁" },
  { id: "architecture", name: "建筑摄影", icon: "🏛️" },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] items-center w-full max-w-4xl">
          <h1 className="text-3xl font-bold">Nikon 摄影作品集</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-square flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-4xl mb-4">{category.icon}</span>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {category.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          Support by <span className="text-red-500 animate-ping">❤</span>
        </footer>
      </div>
    </PageTransition>
  );
}
