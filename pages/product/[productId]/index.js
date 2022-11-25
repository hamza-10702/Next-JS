import {useRouter} from 'next/router'
function ProductIDFile() {
     const router = useRouter();

    const productID = router.query.productId;

    const handleSubmit = ()=>{
      router.push(`${productID}/reviews`)
    }

    return (
      <div>
        <h3>This is Product ID is is {productID} detail page</h3>
        <button onClick={handleSubmit}>Confrom Product</button>
      </div>
    );
  }
  
  export default ProductIDFile;
  