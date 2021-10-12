
import React from 'react';



const Home = () => {
    return (
        <div className="container" >
             <title>Capgemini</title>
             <p><br/></p>
             <div class="text-center">
                
            </div>
            <p><br/></p>
          <div class="card mb-3" style={{ width: "69.3rem" }}>
                <img src="https://www.capgemini.com/de-de/wp-content/uploads/sites/5/2018/09/HR-Recruiting_Landing_2021_V1.2-003.jpg?w=750" height="400" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 class="card-title"><b>Capgemini</b></h3>
                    <p class="card-text">Capgemini SE is a French multinational information technology (IT) services and consulting company.</p>
                    <table class="table table-striped"></table>
                    <thead>
                    <tbody>
                            <tr>
                            <th scope="row">Founder: </th>
                            <td>Serge Kampf</td>
                            </tr>

                            <tr>
                            <th scope="row">Headquarters: </th>
                            <td>Paris , France</td>
                            </tr>

                            <tr>
                            <th scope="row">Date of Establishment: </th>
                            <td>1 Oct 1967</td>
                            </tr>
                    </tbody>
                    </thead>
                </div>
        </div>
          <p><br/><br/></p>
         
            <div class="card-deck">
                <div class="card" style={{ width: "30rem" }}>
                    <img src="https://i2.wp.com/sightsinplus.nyc3.digitaloceanspaces.com/sightsinplus/wp-content/uploads/2020/05/19074840/Aiman_Ezzat.png?fit=638%2C391&ssl=1" class="card-img-top" alt="Aiman Ezzat" />
                    <div class="card-body">
                        <h5 class="card-title"><h1>Aiman Ezzat</h1>CEO Capgemini</h5>
                        <p class="card-text">Aiman Ezzat was appointed Chief Executive Officer of the Capgemini Group on 20 May 2020, at the close of the Annual General Meeting of Shareholders.<br />
                            During his tenure as Chief Operating Officer (from January 1, 2018 to May 2020) and prior to this as Chief Financial Officer, from December 2012 to 2018, Aiman reinforced both the Group’s position as a global leader as well as its financial resilience. He also played an instrumental role in the implementation of the Group’s new operating model.</p>
                        {/* <a href="#" class="btn btn-primary" onClick={onSubmitAddResign}>Go somewhere</a> */}
                    </div>
                </div>

                <div class="card" style={{ width: "30rem" }}>
                    <img src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1545156065/1545156063.jpg" class="card-img-top" alt="Ashwin Yardi" />
                    <div class="card-body">
                        <h5 class="card-title"><h1>Ashwin Yardi</h1>CEO Capgemini India</h5>
                        <p class="card-text">Ashwin Yardi is the CEO of Capgemini in India since December 2018.<br />
                            He was also the Chief Industrialization & Automation Officer untill January 2021 and was driving the  competitiveness and industrialization of delivery of Capgemini portfolio. This involved leading the organisation’s focus on building a knowledge-driven delivery model and deploying intelligent automation to help clients derive the best value.<br />
                            In his previous role, Ashwin was the COO of Capgemini in India from January 2016 to December 2018. As COO, he managed operations, delivery, capability development and Innovation across India.</p>
                        {/* <a href="#" class="btn btn-primary" onClick={onSubmitAddResign}>Go somewhere</a> */}
                    </div>
                </div>
            </div>
            <p><br/><br/></p>
        {/*  */}
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">

            <div class="carousel-item active">
                <iframe width="1200" height="400" src="https://www.youtube.com/embed/ukM8ALjUK1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>   
            <div class="carousel-item ">
                    <img width="1200" height="400" src="http://surl.li/ajtyt" alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img width="1200" height="400" src="http://surl.li/ajtyp" alt="Third slide" />
                </div>
                <div class="carousel-item">
                    <img width="1200" height="400" src="http://surl.li/ajtzk" alt="Fourth slide" />
                </div>
                <div class="carousel-item">
                    <img src="http://surl.li/ajtyz" class="d-block w-100" alt="Fifth slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            
        </div>
        <hr/>
        </div>
    );
}

export default Home;