import ProductCategory from "@/components/ProductCategory/ProductCategory";
import { MongoClient } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import Product from "src/model/Product";
import Meta from "@/components/common/Meta";
type AppProps = {
  products: Product[];
};

export default function ProductCategoryPage({ products }: AppProps) {
  return (
    <>
      <Meta
        title="VTLShopping | Category"
        description="VTLShopping were my everything."
        image="/preview.png"
      />
      <ProductCategory productsList={products} />;
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@vtlshopping.6benmaj.mongodb.net/vtlshopping?retryWrites=true&w=majority`
  );
  const db = client.db();
  const productClt = db.collection("products");
  const categories = await productClt
    .find({}, { projection: { category: 1, _id: 0 } })
    .toArray();
  const uniqueCategories = Array.from(
    new Set(categories.map((item) => item.category))
  );

  client.close();

  return {
    fallback: "blocking",
    paths: uniqueCategories.map((category) => ({
      params: { productCategory: category },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productCategory = context.params!.productCategory;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@vtlshopping.6benmaj.mongodb.net/vtlshopping?retryWrites=true&w=majority`
  );
  const db = client.db();
  const productClt = db.collection("products");
  const correspondingProducts = await productClt
    .find({ category: productCategory })
    .toArray();

  client.close();
  const convertedProducts = JSON.parse(JSON.stringify(correspondingProducts));

  return {
    props: {
      products: convertedProducts.map((product: Product) => ({
        ...product,
        id: product._id.toString(),
      })),
    },
  };
};
