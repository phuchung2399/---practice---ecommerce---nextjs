import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { GetStaticPaths, GetStaticProps } from "next";
import { MongoClient, ObjectId } from "mongodb";
import Product from "src/model/Product";
import Meta from "@/components/common/Meta";
interface AppProps {
  singleProduct: Product;
  allProducts: Product[];
}

export default function ProductDetailPage({
  singleProduct,
  allProducts,
}: AppProps) {
  return (
    <>
      <Meta
        title={`${singleProduct.name} | VTLShoping`}
        description={singleProduct.description}
        image="/preview.png"
      />
      <ProductDetail singleProduct={singleProduct} allProducts={allProducts} />;
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@vtlshopping.6benmaj.mongodb.net/vtlshopping?retryWrites=true&w=majority`
  );
  const db = client.db();
  const productClt = db.collection("products");
  const categoryAndIdObjs = await productClt
    .find({}, { projection: { category: 1 } })
    .toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: categoryAndIdObjs.map((categoryAndIdObj) => ({
      params: {
        productId: categoryAndIdObj._id.toString(),
        productCategory: categoryAndIdObj.category,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params!.productId as string;
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@vtlshopping.6benmaj.mongodb.net/vtlshopping?retryWrites=true&w=majority`
  );
  const db = client.db();
  const productClt = db.collection("products");
  const singleProduct = await productClt.findOne({
    _id: new ObjectId(productId),
  });

  const allProducts = await productClt.find().toArray();
  client.close();
  const convertedSingleProducts = JSON.parse(JSON.stringify(singleProduct));
  const convertedAllProducts = JSON.parse(JSON.stringify(allProducts));

  return {
    props: {
      singleProduct: {
        ...convertedSingleProducts,
        id: convertedSingleProducts!._id.toString(),
      },
      allProducts: convertedAllProducts.map((product: Product) => ({
        ...product,
        id: product._id.toString(),
      })),
    },
  };
};
