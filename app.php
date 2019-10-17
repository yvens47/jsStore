<?php require 'templates/header.php' ?>



<div class=" row products-page">
    <div class='col-md-2 pt-4'>
        <div class="row">
            <div class="col-md-4 pr-0">
                Filter by
            </div>
            <div class="col-md-8">
              <select class="custom-select " id="genre">
                <option selected>Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
            </select>
            </div>
        </div>
        <div id='app'>
            <Search></Search>

        </div>
        
    </div>
    <div class="col-md-10 px-0 products-app">
         <ul class='products'>
                
        </ul>

    </div>
    
</div>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Your Cart</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <ul class="modal-body-ul products-cart">

          </ul>
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal ends here--->
<?php require 'templates/footer.php' ?>