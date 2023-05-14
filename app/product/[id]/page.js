import products from "../../products";

function Product({ product }) {

  return (
    <div>
    <h1>{product && product.name}</h1>
    <p>{product && product.description}</p>
    <p>Price: {product && product.price}</p>
  </div>
  );
}

export async function getStaticPaths() {
  const paths = products.map((product) => ({ params: { id: product.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("params:", params);

  const product = products.find((product) => product.id.toString() === params.id.toString());

  if (!product) {
    console.log("Product not found");
    return {
      notFound: true,
    };
  }

  console.log("Product:", product);

  return {
    props: {
      product,
    },
  };
}

export default Product;