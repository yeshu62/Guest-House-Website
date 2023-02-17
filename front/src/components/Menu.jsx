import React from "react";

function Menu(){
    return( <div>

    <section id="our_menu" class="pt-5 pb-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="page_title text-center mb-4">
						<h1>our menu</h1>
					
					</div>
				</div>
			</div>
			<div class="row">
				<ul class="nav nav-tabs menu_tab mb-4" id="myTab" role="tablist">
					<li class="nav-item">
						<a class="nav-link active" id="breakfast-tab" data-toggle="tab" href="#breakfast" role="tab">Beverages & Breakfast</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" id="appetizer-tab" data-toggle="tab" href="#appetizer" role="tab">Appetizers & sides</a>
					</li>

                    <li class="nav-item">
						<a class="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab">Main course</a>
					</li>

                    <li class="nav-item">
						<a class="nav-link" id="snack-tab" data-toggle="tab" href="#snack" role="tab">Snacks</a>
					</li>

                    

				</ul>
        	</div>
			<div class="row">
				<div class="tab-content col-lg-12" id="myTabContent">
					<div class="tab-pane fade show active" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
						<div class="row">
							<div class="col-md-6 border-right">
								<div class="single_menu">
									
									<div class="menu_content">
										<h4>Beverages</h4>
                                        <p>Milk Tea<span>Rs.80</span></p>
                                        <p>Hot Chocolate<span>Rs.130</span></p>
                                        <p>Black Tea/ Lemon Tea<span>Rs.60</span></p>
                                        <p>Black Coffee	<span>Rs.90</span></p>
                                        <p>Milk Coffee	<span>Rs.120</span></p>
                                        <p>Hot Milk	<span>Rs.90</span></p>
                                        <p>Hot Lemon, Ginger & Honey<span>Rs.170</span></p>
                                    </div>
                                    
									
								</div>
                                </div>
                                <div class="col-md-6">
                                <div class="single_menu">
                                
									<div class="menu_content">
										<h4>Breakfast</h4>
                                        <p>Corn Flakes with Milk<span>Rs.170</span></p>
                                        <p>Plain Toast with Butter &<br></br> Jam<span>Rs.110</span></p>
                                        <p>Boiled Egg/ Egg Fried<span>Rs.90</span></p>
                                        <p>Aalu Paratha With Aachar<br></br> and curd	<span>Rs.180</span></p>
                                        <p>Paneer Paratha With Aachar<br></br> and curd	<span>Rs.210</span></p>
                                        
										
									</div>
								
                                </div>	
							</div>
							
						</div>
					</div>


					<div class="tab-pane fade" id="appetizer" role="tabpanel" aria-labelledby="appetizer-tab">
						<div class="row">
						<div class="col-md-4 border-right">
								
                            <div class="single_menu">
                                
                                <div class="menu_content">
                                    <h4>Veg Appetizers</h4>
                                    <p>Veg Pakoda<span>Rs.220</span></p>
                                    <p>Panner Pakoda<span>Rs.350</span></p>
                                    <p>Paneer Chilly<span>Rs.390</span></p>
                                    <p>Paneer Dameko	<span>Rs.390</span></p>
                                    <p>Mushroom Pakoda		<span>Rs.320</span></p>
                                    <p>Mushroom Chilly Garlic		<span>Rs.350</span></p>
                                    <p>Peanuts Sadeko/fry/<br></br> Masala			<span>Rs.220</span></p>
                                    <p>Chashewnuts Fry		<span>Rs.360</span></p>
                                    <p>Veg Sping Roll		<span>Rs.290</span></p>
                                    <p>Papad Masala 		<span>Rs.180</span></p>
                                    <p>Papad Roaster/<br></br> Papad Fry (2Pcs) 		<span>Rs.90</span></p>
                                    
                                    
                                </div>
                            
                            </div>

						</div>

							<div class="col-md-4 border-right">
                            <div class="single_menu">
                                
                                <div class="menu_content">
                                    <h4>Non-Veg Appetizers</h4>
                                    <p>Chicken Lolipop(2pcs)<span>Rs.320</span></p>
                                    <p>Chicken  Drumstick (2Pcs)<span>Rs.320</span></p>
                                    <p>Chicken Chilly <span>Rs.350</span></p>
                                    <p>Chicken spring Roll <span>Rs.360</span></p>
                                    <p>Chicken Manchuriyan<span>Rs.400</span></p>
                                    <p>Crispy Spicy Chicken Wings<br></br> (4pcs) <span>Rs.360</span></p>
                                    <p>Nepali Chicken Roast<br></br> (4Pcs)<span>Rs.450</span></p>
                                    <p>Mutton Tass <span>Rs.485</span></p>
                                    <p>Mutton Sadheko <span>Rs.400</span></p>
                                    <p>Mutton Chhoila <span>Rs.420</span></p>
                                    <p>Mithila Fish Fry (2Pcs)<span>Rs.220</span></p>
                                    <p style={{"fontWeight":"bold"}}>JanakpurInn Special <br></br>( Mutton )<span>Rs.490</span></p>
                                    
                                    
                                </div>
                            
                            </div>
								
							</div>
                            <div class="col-md-4">
                            <div class="single_menu">
                                
                                <div class="menu_content">
                                    <h4>Our Soups</h4>
                                    <p>Sweet Corn Soup<span>Rs.320</span></p>
                                    <p>Veg Hot and Sour <span>Rs.320</span></p>
                                    <p>Chicken Hot And Sour <span>Rs.350</span></p>
                                    <p>Chicken Manchow  <span>Rs.360</span></p>
                                    <p>Chicken Clean <span>Rs.400</span></p>
    
                                    
                                    
                                </div>
                                <div class="menu_content">
                                    <h4>Fresh Salad</h4>
                                    <p>Nepali Salad<span>Rs.170</span></p>
                                    <p>Green Garden Salad  <span>Rs.160</span></p>
                                    <p>Onion Salad  <span>Rs.130</span></p>
       
                                </div>
                            
                            </div>
								
							</div>
                           
							
						</div>
					</div>

                    
					<div class="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
						<div class="row">
                        <div class="col-md-12">
								
                                <div class="single_menu">
                                    
                                    <div class="menu_content">
                                        <h4>Traditional Thali<br></br>Authentic Neapli Cuisine</h4>
                                        <p><b style={{"fontWeight":"bold"}}>Veg Thali:</b><br></br> Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd, <br></br>Rice <span>Rs.350</span></p>
                                        <p><b style={{"fontWeight":"bold"}}>Chicken Thali:</b> <br></br> Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd, Chicken,<br></br>Rice <span>Rs.450</span></p>
                                        <p><b style={{"fontWeight":"bold"}}>Mutton Thali:</b> <br></br> Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd, Mutton,<br></br> Rice  <span>Rs.550</span></p>
                                        <p><b style={{"fontWeight":"bold"}}>Egg Thali:</b> <br></br> Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd, Egg,<br></br> Rice <span>Rs.400</span></p>
                                        <p><b style={{"fontWeight":"bold"}}>Fish Thali:</b> <br></br> Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd,Fish, <br></br>Rice <span>Rs.420</span></p>
                              
                                    </div>
                                
                                </div>
    
                        </div>
                        <div class="col-md-4 border-right">
								
                                <div class="single_menu">
                                    
                                    <div class="menu_content">
                                        <h4>Flavour Of Basmati Rice</h4>
                                        <p>Mutton Biryani <span>Rs.490</span></p>
                                        <p>Chicken Biryani<span>Rs.420</span></p>
                                        <p>Veg-Biryani <span>Rs.290</span></p>
                                        <p>Jeera Rice/ Butter Rice<span>Rs.180</span></p>
                                        <p>Steam Rice <span>Rs.110</span></p>
                              
                                    </div>
                                
                                </div>
    
                        </div>
                            
                            

                        <div class="col-md-4 border-right">
								
                                <div class="single_menu">
                                    
                                    <div class="menu_content">
                                        <h4>Main Course-Veg</h4>
                                        <p>Mix – Veg Curry<span>Rs.180</span></p>
                                        <p>Vegetable Handi<span>Rs.340</span></p>
                                        <p>Paneer Tikka Masala<span>Rs.350</span></p>
                                        <p>Paneer Handi <span>Rs.350</span></p>
                                        <p>Matar Paneer<span>Rs.290</span></p>
                                        <p>Paneer Butter Masala<span>Rs.380</span></p>
                                        <p>Daal Fry/ Daal Tadka <span>Rs.250</span></p>
                                        <p>Aalu Dum / Aalu jeera/<br></br> Aalu Methi <span>Rs.220</span></p>
                                        <p>Aloo Do Pyaza<span>Rs.380</span></p>
                                        <p>Mushroom Do Pyaza <span>Rs.340</span></p>
                        
                                        
                                        
                                    </div>
                                
                                </div>
    
                        </div>
                        <div class="col-md-4">
								
                                <div class="single_menu">
                                    
                                    <div class="menu_content">
                                        <h4>Main Course-Non Veg</h4>
                                        <p>Chicken Butter Masala<span>Rs.420</span></p>
                                        <p>Chicken Tikika Masala<span>Rs.420</span></p>
                                        <p>Chicken Kadai<span>Rs.390</span></p>
                                        <p>Chicken Handi<span>Rs.390</span></p>
                                        <p>Chicken Curry<span>Rs.380</span></p>
                                        <p>Chicken Do Pyaza<span>Rs.380</span></p>
                                        <p>Mutton Curry<span>Rs.450</span></p>
                                        <p>Fish Curry <span>Rs.350</span></p>
                                        <p style={{"fontWeight":"bold"}}>JanakpurInn Special<br></br> ( Chicken )<span>Rs.500</span></p>
                                      
                                        
                                        
                                    </div>
                                
                                </div>
    
                        </div>
                        
						</div>
					</div>
                    <div class="tab-pane fade" id="snack" role="tabpanel" aria-labelledby="snack-tab">
						<div class="row">
                        <div class="col-md-3 border-right">
								
                                <div class="single_menu">
                                    
                                    <div class="menu_content">
                                        <h4>Nepali stew</h4>
                                        <p>Veg Thukpa <span>Rs.190</span></p>
                                        <p>Chicken Thukpa<span>Rs.210</span></p>
                                        <p>Mutton Thukpa <span>Rs.270</span></p>
                                        <p>Egg Thukpa<span>Rs.250</span></p>
                                     
                              
                                    </div>
                                
                                </div>
    
                        </div>
                            
                            

                        <div class="col-md-3 border-right">
                       
                                <div class="single_menu">
                                    
                                    <div class="menu_content">
                                        
                                        <h3 style={{"fontWeight":"bold","textDecoration":"underline","textAlign":"center"}}>Veg Momo</h3>
                                        <p>Steam<span>Rs.150</span></p>
                                        <p>Sadheko<span>Rs.170</span></p>
                                        <p>Kothey<span>Rs.180</span></p>
                                        <p>Fry<span>Rs.180</span></p>
                                        <p>Jhol<span>Rs.190</span></p>
                                        <p>Chilly<span>Rs.200</span></p>
                                    </div>
                                </div>
                        </div>
                        <div class="col-md-3 border-right">
								
                                <div class="single_menu">
                                    
                                    <div class="menu_content">
                                        
                                        <h3 style={{"fontWeight":"bold","textDecoration":"underline","textAlign":"center"}}>Chicken Momo</h3>
                                        <p>Steam<span>Rs.250</span></p>
                                        <p>Sadheko<span>Rs.250</span></p>
                                        <p>Kothey<span>Rs.260</span></p>
                                        <p>Fry<span>Rs.270</span></p>
                                        <p>Jhol<span>Rs.280</span></p>
                                        <p>Chilly<span>Rs.300</span></p>
                                    </div>
                                </div>
                        </div>
                        <div class="col-md-3">
								
                                <div class="single_menu">
                                    
                                    <div class="menu_content">
                                        
                                        <h3 style={{"fontWeight":"bold","textDecoration":"underline","textAlign":"center"}}>Mutton Momo</h3>
                                        <p>Steam<span>Rs.260</span></p>
                                        <p>Sadheko<span>Rs.270</span></p>
                                        <p>Fry<span>Rs.280</span></p>
                                        <p>Jhol<span>Rs.290</span></p>
                                        <p>Kothey<span>Rs.300</span></p>
                                        <p>Chilly<span>Rs.320</span></p>
                                    </div>
                                </div>
                        </div>
                       
						</div>
					</div>
				</div>
			
			</div>
		</div>
	</section>
    <p style={{"width":"80%","textAlign":"center","margin":"0 auto 0 auto"}}><strong>It Take 25-30 Min to Prepare the Food. Last food Order will Be Taken until 9:25 Pm. Restaurant Is Open From 7 Am Till 10 Pm. <br></br>Once Order  Taken Will not be cancelled ( Cancelled Charge 7%).Bringing Drinks And food  from Outside Is strictly Prohibited </strong></p><br></br>
       
</div>);
}

export default Menu;