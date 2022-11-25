import Link from "next/link";
function Product() {
  return (
    <>
      <div>
        {[1, 2, 3, 4].map((value,index) => {
          return (
            <div key={index}>
              <Link href={`/product/${value}`} replace>Product - {value} detail</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
