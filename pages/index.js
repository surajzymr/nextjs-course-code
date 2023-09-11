import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  // console.log("PROPS ****", props);
  return (
    <div>
      {products?.map((e) => {
        return (
          <div key={e.id}>
            <ul>
              <li> <Link href={ `products/${e.id}`} >{e.title} </Link></li>
            </ul>
          </div>
        );
      })}
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
    revalidate: 10,
    // notFound: true
  };
}

export default HomePage;