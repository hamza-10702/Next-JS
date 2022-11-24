import {useRouter} from 'next/router'
function ProductDetail() {
     const router = useRouter();

    const productID = router.query.productId;
    return (
      <div>
        <h>This is Product detil is is {productID}</h>
      </div>
    );
  }
  
  export default ProductDetail;
  