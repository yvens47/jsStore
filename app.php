<?php require 'templates/header.php' ?>



<div class=" row products-page mt-5">
    <div class='col-md-2 pt-4'>
        <div class="row">
            <div class="col-md-4 pr-0">
                Filter by
            </div>
            <div class="col-md-8">
              <select class="custom-select " id="genre">
                <option value='all' selected>Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
            </select>
            </div>
        </div>
        <div id='app'>
            <Search></Search>

        </div>
        <div class="row mt-1">
          <div class="col-md-12">
            <h3>Brand</h3>
            

          </div>
        </div>
        
    </div>
    <div class="col-md-10 px-0 products-app mb-3 pt-4">
        
        
        <div class="category">
          <!-- <h2 class="">Shoy By Category</h2> -->
            <div class="container">
              
<div class="row">
  <div class="col-md-3">
    <img
      src="https://cdn4.iconfinder.com/data/icons/blue-real-estate/64/Real_Estate_Loan_House-09-512.png"
      class="lead-img img-fluid"
    />
   <p style="text-align: center;font-weight: bold;font-size: 25px;font-family: Abel;color: #555;"> Lorem ipsum </p>
  </div>
  <div class="col-md-3">
    <img
      src="https://cdn3.iconfinder.com/data/icons/real-estate-20/512/1-33-512.png"
      class=" lead-img img-fluid"
    />
    <p style="text-align: center;font-weight: bold;font-size: 25px;font-family: Abel;color: #555;"> Lorem ipsum </p>
  </div>
  <div class="col-md-3">
    <img
      src="https://cdn3.iconfinder.com/data/icons/real-estate-20/512/1-33-512.png"
      class=" lead-img img-fluid"
    />
    <p style="text-align: center;font-weight: bold;font-size: 25px;font-family: Abel;color: #555;"> Lorem ipsum </p>
  </div>
  
  <div class="col-md-3">
    <img
      src="https://image.flaticon.com/icons/png/512/48/48861.png"
      class=" lead-img img-fluid"
    />
    <p style="text-align: center;font-weight: bold;font-size: 25px;font-family: Abel;color: #555;"> Lorem ipsum </p>
  </div>
</div>

            </div>
        </div>
        <div class="info">        
        </div>
         <ul class='products'>
                
        </ul>

    </div>
    
</div>
<?php require 'templates/footer.php' ?>