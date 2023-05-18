
import Image from "next/image";
import Beens from "../../../public/beans.jpg"
import HomeBanner from "@/components/HomeBanner";
import Navbar from "@/components/Navbar";



function Product() {
  return (
    <>
    <Navbar />
    <HomeBanner/>
    <div className="wrapper sectionPadding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Image width={700} src={Beens} alt="product Image" />
          </div>
          <div className="col-sm-12 col-md-6">
            <h1 className="productTitle">Beans Dwarf</h1>
            <h2 className="productType">Alligator</h2>
            <p className="productTypeDescription">
              Fine Dwarf French bean with a maturity of 67 Days. Alligator can be picked continuously, resulting in a very high yield.
            </p>
            <h3 className="packageInstractionTitle">Disease Resistance Package</h3>
            <div className="packageInstraction">
              <ul>
                <li>High Resistance:</li>
                <li> Bean Common Mosaic Virus (BCMV)</li>
                <li>Anthracnose</li>
              </ul>

              <p className="resistance">Intermediate Resistance:</p>
              <ul>
                <li>Beet Curly Top Virus (BCTV)</li>
                <li>Halo Blight (Psp)</li>
                <li>Rust (Ua)</li>
              </ul>

            </div>
            <div className="productVaritionWrapper">
              <div className="tabilTitle">Variety</div>
              <div className="productVaritionTabil row">
                <div className="col-6 vtitle py-2">Type:</div>
                <div className="col-6 py-2">Dwarf French</div>
                <div className="col-6 vtitle py-2">Market Segment:</div>
                <div className="col-6 py-2">Fine</div>
                <div className="col-6 vtitle py-2">Type:</div>
                <div className="col-6 py-2">Dwarf French</div>
                <div className="col-6 vtitle py-2">Market Segment:</div>
                <div className="col-6 py-2">Fine</div>
                <div className="col-6 vtitle py-2">Type:</div>
                <div className="col-6 py-2">Dwarf French</div>
                <div className="col-6 vtitle py-2">Market Segment:</div>
                <div className="col-6 py-2">Fine</div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
    </>
  );
}



export default Product;