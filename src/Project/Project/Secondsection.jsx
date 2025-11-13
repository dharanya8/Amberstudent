import Image from 'react-bootstrap/Image';
import bed from './../assets/homepage-beds.svg';
import cities from './../assets/homepage-cities.svg';
import university from './../assets/homepage-universities.svg';
import logowhite from './../assets/logo-white.svg';
import star from './../assets/stars-4.5.svg';
import Container from 'react-bootstrap/Container';
function Secondsection(){
    return(
        <div>
            <Container>
                <div className='d-flex  flex-wrap'>
            <div className='d-flex gap-5 mt-5'>
                <div className='d-flex flex-column'>
                    <Image src={bed} className='img-fluid'style={{width:"50px",height:"60px"}}/>
                <div><h3 className='fs-4'>1M+ Beds</h3>
                <p>Book your perfect place from an extensive list of options.</p>
                </div>
                </div>
                <div className='d-flex flex-column'>
                <Image src={university} style={{height:"60px",width:"50px"}}/>
                <div><h3 className='fs-4'>800+ Universities</h3>
                <p>Find the best student homes near prestigious universities.</p>
                </div>
                </div>
                <div className='d-flex flex-column'>
                <Image src={cities} style={{height:"60px",width:"50px"}}/>
                <div><h3 className='fs-4'>250+ Global Cities</h3>
                <p>We operate in major cities around the world.</p>
                </div>
                </div>
               <div className='d-flex flex-column'>
                <Image src={logowhite}className='w-50' style={{
    height: '60px',
    width: '150px',
    filter: 'invert(100%) sepia(99%) saturate(367%) hue-rotate(100deg)',
  }} />
                <div>
                <Image src={star} style={{width:"95%"}}/><br/><span style={{color:"black"}}>TrustScore <span style={{fontWeight:"bolder"}}>4.7</span> |
                <a href='#star'className='text-dark ms-2'><span className='fw-bold'style={{fontSize:"14px"}}>8,391</span> <span style={{fontSize:"14px"}}>reviews</span></a>
                </span>
                </div>      
               </div>               
            </div>
            </div>
            </Container>
        </div>
    )

}
export default Secondsection;