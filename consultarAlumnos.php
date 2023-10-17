<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    include 'menu.php';
    include 'conexion.php';

    $sql = "SELECT * FROM alumnos";
    $datos = $conexion -> query($sql);

    ?>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <?php if($datos->num_rows > 0){ ?>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>nombre</th>
                                <th>Numero de control</th>
                                <th>Semestre</th>
                                <th>Edad</th>
                                <th>Turno</th>
                                <th>Sexo</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table> 
               <?php } else { ?>
                <h2> no existe datos</h2>
               <?php } ?>
            </div>
        </div>
    </div>


