import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div>
      <div className="hero rounded-xl bg-base-300">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            height={600}
            width={400}
            className="max-h-80 w-full max-w-sm rounded-lg object-cover shadow-2xl"
            priority
          />
          <div className="flex-col self-start">
            <h1 className="text-5xl font-bold">{products[0].name}</h1>
            <p className="py-6">{products[0].description}</p>
            <Link
              className="btn btn-primary text-white"
              href={"/products/" + products[0].id}
            >
              Check it out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((element, index) => {
          if (index === 0) return null;
          return <ProductCard key={element.id} product={element} />;
        })}
      </div>
    </div>
  );
}
