import report from './assets/images/report_web.pdf'
import paris_image from './assets/images/Paris-Agreement_image.jpg'
import h2_seep from './assets/images/h2_seep.png';
import serp_mantle from './assets/images/serp_mantle.png'

export default function Serpentinisation() {

    return (
        <div>
            <div className="serp_article">
                <h3 style={{ fontSize: '1.5rem', fontWeight: "bold", textAlign: "center" }}>CAN SERPENTINISATION REACTIONS PRODUCE ENOUGH COMMERCIAL
                    HYDROGEN TO FACILITATE THE ENERGY TRANSITION?</h3>

                <div className="public_date"><p>Published August 25, 2024. 11:24 am BST </p></div>

                <p>Despite its significant role in driving technological advancements,
                    the negative externalities associated with fossil fuels often overshadow their benefits.
                    This disparity has intensified the search for cleaner and more affordable energy alternatives.
                    Hydrogen has emerged as a promising substitute, with several production methods
                    each having distinct environmental and economic impacts.
                    Grey hydrogen, produced through methane reforming, releases greenhouse gases,
                    while blue hydrogen involves capturing and storing CO2 emissions to mitigate environmental impacts.
                    Green hydrogen, generated via electrolysis, offers a more environmentally friendly option. Recently, interest has also grown in natural hydrogen,
                    or "gold hydrogen," which is cost-effective and extracted from subsurface rocks. This article thus explores the processes involved in
                    natural hydrogen production, particularly serpentinization, and examines its potential implications for supporting the energy transition.</p>

                <p style={{ fontSize: '1rem', fontWeight: "bold" }}>THE PERFECT AGREEMENT</p>
                <p>The Paris Agreement, a landmark international treaty was adopted in 2015 to
                    combat climate change by limiting global warming to well below 2°C above pre-industrial levels.
                    It sets out a framework for countries to set and achieve their own climate targets,
                    aiming to reduce greenhouse gas emissions and enhance resilience to climate impacts.
                    The agreement emphasizes financial and technological support for developing nations to meet their climate goals and transition to sustainable practices
                    <a href="https://www.un.org/en/climatechange/paris-agreement" style={{ textDecoration: 'none' }} target="_blank"> [1]</a>.
                    With focus on everything renewable energy, the agreement does not only seek to ensure a cleaner and more sustainable environment,
                    but also directly enhances human development.</p>
                   
                   <div>
                   <img src={paris_image} alt=""  style={{width:'100%', height:'30rem', objectFit:"cover", borderRadius:"0.5rem"}}/>
                   <p style={{color:'gray', marginLeft:"0.5rem"}}>COP21, December, 2015, Paris, France. World leaders agree to meet climate targets. Photo credit <a href="https://www.greenpeace.org.uk/news/what-is-paris-climate-agreement-and-why-does-it-matter/" style={{textDecoration:"none"}} target='_blank'>[Green Peace]</a></p>


                   </div>

                <p>
                    To align itself with this target, the European Commission in 2020 launched a hydrogen strategy outlining policy actions across five key areas:
                    supporting investments, fostering research and collaboration, and developing a hydrogen market and infrastructure.
                    Additionally, the Commission aims to generate up to 10 million tonnes of renewable hydrogen by 2030 and import an equivalent amount of 10 million tonnes <a href="https://energy.ec.europa.eu/topics/energy-systems-integration/hydrogen_en#:~:text=tonnes%20by%202030.-,EU%20Hydrogen%20strategy,and%20cooperation%20and%20international%20cooperation." style={{ textDecoration: 'none' }} target="_blank">[2]</a>.
                    The United States has  also taken significant strides in pushing the frontiers for hydrogen exploration and production. Recently, the U.S. Department of Energy (DOE) announced up to $20 million in funding to support the development of
                    innovative approaches for hydrogen gas emissions detection and quantification <a href="https://arpa-e.energy.gov/news-and-media/press-releases/us-department-energy-announces-20-million-develop-cost-effective" style={{ textDecoration: 'none' }} target="_blank">[3]</a>, and in China , the government has launched 20 initiatives to help the development of hydrogen energy industry in Beijing, covering various aspects including the research,
                    development and innovation of science and technology, infrastructure development, talent attraction, incubation, financing and investment of hydrogen energy enterprises <a href="https://www.linklaters.com/en/insights/thought-leadership/energy/hydrogen/china#:~:text=The%20Chinese%20central%20government%20has,use%20cases%20of%20hydrogen%20energy." style={{ textDecoration: 'none' }} target="_blank">[4]</a>. These significant actions taken by the economic superpowers provides hope
                    for a cleaner tomorrow only if the investments keep raking in.
                </p>

                <p style={{ fontSize: '1rem', fontWeight: "bold" }}>WAXING TECHNICAL</p>
                <p>Yes, hydrogen is an alternative to fossil fuel and can support various aspects of the economy;
                    from fertilizer production, to steel manufacturing,
                    but to fit the criteria of an alternative energy source,
                    the gas needs being very affordable to ensure its widespread adoption.
                    To this end, most of the world’s hydrogen is produced from steam methane reforming.
                    In fact, the method supports about 95% of US hydrogen production.
                    SMR is a method that employs high-temperature steam and a catalyst to interact with methane from natural gas,
                    resulting in the production of hydrogen. This process also generates carbon monoxide and a minor quantity of carbon dioxide <a href="https://www.energy.gov/eere/fuelcells/hydrogen-production-natural-gas-reforming" style={{ textDecoration: 'none' }} target="_blank">[5]</a>.
                    The emission and cost associated with this method makes it a less viable option in the quest for energy transition.
                    Talking of cost, natural hydrogen has been marked as a good candidate, but its production on a larger and commercial scale still  hasn't seen the light of day. Mali’s Bourakebougou highlights the benefits of natural hydrogen <a href="https://www.sciencedirect.com/science/article/pii/S0360319918327861" style={{ textDecoration: 'none' }} target="_blank">[6]</a>. The project has its early story grounded more on an accident that an intentional exploration, where a well intended to be dug to produce water astonishingly outgassed what was later discovered as 98% hydrogen. Now the gas is burned by a
                    ford engine which produces water as a “waste product". The engine is hooked up to a 30-kilowatt generator that gives Bourakébougou its first electrical benefits <a href="https://www.science.org/content/article/hidden-hydrogen-earth-may-hold-vast-stores-renewable-carbon-free-fuel" style={{ textDecoration: 'none' }} target="_blank">[7]</a>.

                    <p>Now let’s delve a bit deeper into what happening in these geological formations. Though Mali’s geology and the hydrogen production dynamics is somewhat different from what would be discussed, the underlying principles remain the same. Here we would focus solely on what serpentinisation reaction is, and how it can support our quest for natural hydrogen production.

                        When ultramafic rocks, which are rich in olivine and orthopyroxene, react with water, they become serpentinized, the resulting metamorphosed rock is composed primarily of serpentine. Serpentinite encompasses a broad category of ultramafic rocks that undergo serpentinization, with H2 being an important reaction by-product. An ultramafic rock has fewer than 45 wt.% SiO2 and has high Mg and Fe concentrations. The origin and formation of ultramafic rocks on Earth are associated with crustal and volcanic processes. While the formation of ultramafic rocks differs across cosmic entities, their characteristics and classification remain consistent owing to their chemical composition and mineral makeup. These rocks can also be grouped based on the standardized ratios or prevalence of olivine and pyroxene minerals. Peridotites are ultramafic rocks with more than 40% olivine, while pyroxenites have less than 40% olivine. Serpentinisation reaction can be simplified in the following terms;</p>

                    Olivine ± Orthopyroxene + H2O → Serpentine ± Brucite + Magnetite + H2.

                </p>

                <div>
                   <img src={h2_seep} alt=""  style={{width:'100%', height:'30rem', objectFit:"cover"}}/>
                   <p style={{color:'gray', marginLeft:"0.5rem"}}>Hydrogen seeps from a site in California. Photo credit <a href="https://www.researchgate.net/publication/256715699_Geochemistry_and_geobiology_of_a_present-day_serpentinization_site_in_California_The_Cedars" style={{textDecoration:"none"}} target='_blank'>[Morrill et al. 2013]</a></p>


                   </div>

                <p style={{ fontSize: '1rem', fontWeight: "bold" }}>GEOLOGICAL CONDITIONS FAVOURING SERPENTINIZATION REACTIONS</p>
                <p>Notable occurrences of serpentinization reactions have been attributed to mid-oceanic ridges in the sea floor, and ophiolite complexes on land, though there has been a proposition to explore cratonic basins <a href="https://www.lyellcollection.org/doi/full/10.1144/geoenergy2024-002" style={{ textDecoration: 'none' }} target="_blank">[8]</a>. In this model, it is suggested that, for exploration, geoscientists can fall on several major cues including but not limited to a protolith in Precambrian greenstone, the existence of groundwater, a fault that would serve as a conduit for transport and an overlying sediment that would serve as a reservoir.
                    The formation of ophiolite complexes on land involves certain fascinating geological events of tectonics, obduction and accretionary processes.
                    For natural hydrogen, though various discoveries continue to roll out,
                    the accumulation of the gas has been underestimated due
                    to the lack of attention it has received, the complexity and underdeveloped technolgy for its production, and the over- reliance on oil and gas.
                    If deliberate efforts are made towards its exploration, and advancing its technology,
                    the gas would be found in large accumulations.
                </p>

                <div>
                   <img src={serp_mantle} alt=""  style={{width:'100%', height:'20rem', objectFit:"cover"}}/>
                   <p style={{color:'gray', marginLeft:"0.5rem"}}>Typical serpentinization reactions include reactions between sea water and exposed mantle-derived rocks and between water that seeps through fissures during ridge spreading and mantle rocks. [Insert]: The aftermath of serpentinization reactions involves the transport of hydrogen to the seafloor. Taken from  Photo credit <a href="https://hal.science/hal-02380968/file/hal-02380968.pdf" style={{textDecoration:"none"}} target='_blank'>[Debure et al. 2019]</a></p>


                   </div>

                Want to read more? <a href={report} style={{textDecoration:"none"}} target="_blank">Natural Hydrogen, A Comprehensive Overview</a>

            </div>


        </div>
    );
}