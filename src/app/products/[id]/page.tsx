import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";

interface ProductsPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductsPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product?.name + " - Flowmazon",
    description: product?.description,
    openGraph: {
      images: [{ url: product?.imageUrl ?? "" }],
    },
  };
}

const ProductsPage = async ({ params: { id } }: ProductsPageProps) => {
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={300}
        className="max-h-[300px] max-w-[300px] rounded-lg"
        priority
      />

      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} />
        <p className="py-6">{product.description}</p>
      </div>

      <AddToCartButton
        productId={id}
        incrementProductQuantity={incrementProductQuantity}
      />
    </div>
  );
};

export default ProductsPage;
