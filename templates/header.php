<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Jstore</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link
        href="https://fonts.googleapis.com/css?family=Abel|Big+Shoulders+Display|Noto+Sans|Old+Standard+TT&display=swap"
        rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="animate.css">
      <link rel="stylesheet" href="sites.css">

</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php">JaxStore</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php"> <i class="material-icons">home</i>Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#feature">
                            <i class="material-icons">
                            view_module
                            </i>Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#categories"><i class="material-icons">local_florist</i>Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="app.php"><i class="material-icons">local_florist</i>Store</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <!-- <li class="nav-item active cart-link" data-toggle="modal" data-target="#exampleModal">
                        <a class="nav-link" href="#">
                            <i class="material-icons">add_shopping_cart</i><span class='cart'>Cart </span></a>
                    </li> -->
                    <li class="nav-item dropdown show cart-link">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="material-icons">add_shopping_cart</i><span class='cart'>Cart </span>
                        </a>
                        <div style='width: 900px;
                                    margin-top: 5px;
                                    height: auto;
                                    overflow: auto;
                                    background: #f8f9fa;
                                    padding: 10px 10px;
  ' class="dropdown-menu dropdown-menu-right cart-view" aria-labelledby="navbarDropdownMenuLink">
                            
        <table class="table cart-table table-striped">
            <thead>
                <th>Product Id</th>
                <th> Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Line Price</th>
            </thead>
            <tbody class='table-body'></tbody>
            <tfoot>
                <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                
            </tfoot>
        </table>
                        </div>
                    </li>
                    
                    
                    
                </ul>


            </div>
        </div>
    </nav>
    <div class="container-fluid">