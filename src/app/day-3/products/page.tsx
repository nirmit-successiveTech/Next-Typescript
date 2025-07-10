
import Link from "next/link"
import products from "../products" 

export default function PageProduct() {

    return (
        <div style={{textAlign:'center',paddingTop:'30px',fontSize:'30px'}}>
            <div style={{display:"flex",flexDirection:'column',gap:'20px'}}>
                {products.map((item, index) => (
                    <div key={index}>
                        <Link href={`products/${index + 1}`}>
                            <div id="productslink" >
                            {products[index].name}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}