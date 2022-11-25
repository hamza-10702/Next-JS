import {useRouter} from 'next/router'
function ReviewsIDFile() {
     const router = useRouter();

    const {productId , reviewsId} = router.query;
    const {params} = router.query;

    console.log(params)
    return (
      <div>
        <h>This is {productId} is is {reviewsId} or {params}</h>
        <button onClick={()=>{
          router.replace("/noOne")
        }}>page 404</button>
      </div>
    );
  }
  
  export default ReviewsIDFile;
  