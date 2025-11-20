import Image from 'react-bootstrap/Image';
import bed from './../assets/homepage-beds.svg';
import cities from './../assets/homepage-cities.svg';
import university from './../assets/homepage-universities.svg';
import logowhite from './../assets/logo-white.svg';
import star from './../assets/stars-4.5.svg';
import Container from 'react-bootstrap/Container';

function Secondsection() {
  return (
    <div>
      <Container>
        <div className='mt-4'>
          <div className="row justify-content-center">

            {/* Box 1 */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
              <div className='d-flex flex-column align-items-center'>
                <div className='d-flex flex-column'>
                <Image src={bed} style={{ width: "50px", height: "60px" }} />
                <h3 className='fs-4 mt-2'>1M+ Beds</h3>
                <p className="px-2">Book your perfect place from an extensive list of options.</p>
              </div>
              </div>
            </div>
            {/* Box 2 */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
              <div className='d-flex flex-column align-items-center'>
                 <div className='d-flex flex-column' >
                <Image src={university} style={{ width: "50px", height: "60px" }} />
                <h3 className='fs-4 mt-2'>800+ Universities</h3>
                <p className="px-2">Find the best student homes near prestigious universities.</p>
              </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex ">
              <div className='d-flex flex-column align-items-center '>
                 <div className='d-flex flex-column'>
                <Image src={cities} style={{ width: "50px", height: "60px" }} />
                <h3 className='fs-4 mt-2'>250+ Global Cities</h3>
                <p className="px-2">We operate in major cities around the world.</p>
              </div>
              </div>
            </div>
            {/* Box 4 */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex ">
              <div className='d-flex flex-column align-items-center'>
                 <div className='d-flex flex-column'>
                <Image
                  src={logowhite}
                  style={{
                    width: '150px',
                    height: '60px',
                    filter: 'invert(100%) sepia(99%) saturate(367%) hue-rotate(100deg)',
                  }}
                />
                <Image src={star} style={{ width: "95%" }} className="mt-2" />

                <span className="mt-1" style={{ color: "black", fontSize: "14px" }}>
                  TrustScore <b>4.7</b> |
                  <a href='#star' className='text-dark ms-2'>
                    <b>8,391</b> reviews
                  </a>
                </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Secondsection;
