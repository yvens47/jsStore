<?php require 'templates/header.php' ?>

<div class="row mt-5 mb-5">

    <div class="col-md-6 mt-5">

        <div class="product-image">
            <img src="https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/iiafzj3eynywecv7kzbu/air-jordan-xxxiv-basketball-shoe-RG4jCV.jpg"  class='img-fluid' alt="" srcset="">

        </div>
        <div class="product-thumb-wrap">

        </div>
    </div>
    <div class=" product-view col-md-6 mt-5">
        <div class='product-title'>
            <h2>title of the Product <span>$90</span></h2>
        </div>
        <div class="product-details">

            <div class="product-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas, modi aspernatur sint commodi neque temporibus aperiam iste unde vero sequi aliquid quasi quam voluptatem cumque aut veritatis accusamus quibusdam.
            </div>
            <div class='product-form'>
                <form method="post" action="add_listing_handler.php">
                        <!-- <div class="form-group">
                         
                            <input name='agent_name' type="text" class="form-control" id="exampleFormControlInput1" placeholder="full name">
                        </div> -->
                        <div class="form-group">
                                <div class="container">
                                        <div class="row">
                                                        <div class="col-md-6 pl-0">
                                                        <input name="street" type="text" value="" class="form-control" id="exampleFormControlInput1" placeholder="street address">

                                                        </div>
                                                        <div class="col-md-6 pr-0">
                                                        <input value="" name="city" type="text" class="form-control" id="exampleFormControlInput1" placeholder="City">

                                                        </div>
                                        </div>
                                </div>
                            </div>

                                
                        <div class="form-group">
                                <label for="exampleFormControlSelect1">Color</label> 
                                <select name="type" class="form-control" id="exampleFormControlSelect1">
                                <option value="1">Black</option>
                                <option value="2">Red</option>
                                <option value="3">Blue</option>
                                
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Size</label> 
                                <select name="type" class="form-control" id="exampleFormControlSelect1">
                                <option value="1">Black</option>
                                <option value="2">Red</option>
                                <option value="3">Blue</option>
                                
                                </select>
                            </div>
                           

                        
                        
                       

                         <div class="form-group">
                              <div class="container">
                                        <div class="row">
                                                        <div class="col-md-6 pl-0">
                                                        <button class="btn btn-info col-md-10">Add to cart</button>
                                                        </div>
                                                        <div class="col-md-6 pr-0">
                                                            <button class="btn btn-primary col-md-10">Favorite</button>
                                                        </div>
                                        </div>
                                </div>
                         
                            
                        </div>
                        </form>
            </div>

        </div>
    
    </div>
</div>


<?php require 'templates/footer.php' ?>