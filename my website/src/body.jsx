import jeff_image from './assets/images/jeff_photo.jpg'
import jeff_cv from './assets/images/JEFFREY_AKUOKO(CV).pdf'
import quotation_open from './assets/images/quotation_open.webp'
import quotation_close from './assets/images/quotation_close.webp'


export default function Body(props) {

    return (

        <div>

            <div className='description'>
                <h1>Jeffrey K. Akuoko</h1>
                <p>Navigating the Cosmos, Analyzing the Game, and Embracing Knowledge Every Step of the Way</p>


            </div>

            <div className="jeff_image">

                <img src={jeff_image} alt="" />
            </div>

            <div className='cv_container'>
                <a href={jeff_cv} target='blank' style={{ textDecoration: 'none' }}>Curriculum Vitae</a>
            </div>

            <div style={{ position: 'relative' }}>

                <div className="about_jeff" >
                    <img src={quotation_open} alt="" className='quote_open' />
                    <p style={{ color: props.color }}>
                        I am an experienced engineer, a passionate advocate for advancing sustainable and renewable energy solutions
                        across Africa, and a Ph.D. student working with  <a href="https://research.manchester.ac.uk/en/persons/lin.ma" target='blank' style={{ textDecoration: 'none' }}>Dr. Lin Ma</a> at the University of Manchester within the
                        <a href="https://www.harwell.manchester.ac.uk/research-areas/subsurface-energy-and-storage/" target="_blank" style={{ textDecoration: "none" }}> Subsurface Engineering and Storage group. </a>
                        My professional journey has been marked by a deep passion for the Earth, the cosmos, and sustainable energy, which I explore through the interdisciplinary fields of Planetary and Cosmic Geosciences, with primary research interests in aqueous geochemistry, 
                        and cosmochemistry. Whether working in the field, the lab, or the classroom, I bring a multidisciplinary approach to everything I do, blending my expertise in geosciences with advanced techniques in artificial intelligence and data analysis.

                        I am particularly excited about leveraging AI to solve complex geoscientific problems. This unique blend of skills and perspectives enables me to address complex challenges in sustainable energy and beyond. I also have a passion for football, which keeps me grounded and connected to teamwork and strategy. This combination of technical expertise, research innovation, and love for sports gives
                        me a distinctive outlook that I bring to every challenge I face.

                        I invite you to check out my projects and welcome any opportunities for collaboration.



                    </p>
                    <img src={quotation_close} alt="" className='quote_close' />


                </div>


            </div>





        </div>


    );
}


