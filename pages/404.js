import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

 const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(1) -> 1 means foward -1 means back to page previously
            router.push('/') //redirect to homepage
        },3000)
    },[])
    return ( 
        <div className="not-found">
            <h1>Oooops....</h1>
            <h2>Page cannot be found</h2>
            <p>Go back to the <Link href='/'>Homepage</Link></p>
        </div>
     );
 }
  
 export default NotFound;