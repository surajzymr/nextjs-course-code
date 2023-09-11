import fs from "fs/promises";
import path from "path";

export default function ProductDetailPage(props) {
    const {loadedProduct} = props;
    console.log("loadedproduct.....///",loadedProduct);
  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <h1>{loadedProduct.description}</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), "data", "block-data.json");
  // below is to read the above the file path
  const jsonData = await fs.readFile(filePath);
  // modify the above data fetched to readable data and then passing it below to props
  const data = JSON.parse(jsonData);
  const product = data.products.find(e => e.id === productId);

  return {
    props: {
        loadedProduct : product
    }
  }
} 

export async function getStaticPaths() {
    return {
        paths: [
            {params: { pid: 'p1' }},
            {params: { pid: 'p2' }},
            {params: { pid: 'p3' }}
        ],
        fallback: false
    }
}