import fs from "fs/promises";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <div>
      {products?.map((e) => {
        return (
          <div key={e.id}>
            <p>{e.title}</p>
          </div>
        );
      })}
      {/* <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul> */}
    </div>
  );
}

export async function getStaticProps() {
  // below is the path name and structure for it
  const filePath = path.join(process.cwd(), "data", "block-data.json");
  // below is to read the above the file path
  const jsonData = await fs.readFile(filePath);
  // modify the above data fetched to readable data and then passing it below to props
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}

export default HomePage;
