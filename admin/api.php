<?php

header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
if(isset($_SERVER['HTTP_ORIGIN'])){
    header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
}
if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])){
    header('Access-Control-Allow-Headers: '.$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']);
}
header('Access-Control-Allow-Credentials: true');
header("Content-Type: application/json");

$mysql_host = 'localhost';
$port = '3306'; 
$username = 'root';
$password = '';
$database = 'react-filters';

try{
    $pdo = new PDO('mysql:host=' . $mysql_host . ';dbname=' . $database . ';port=' . $port . ";charset=utf8", $username, $password );
    $stmt = $pdo->query('SELECT * FROM stylist'); 

    $response = [];
    while($row = $stmt->fetch()) {  
        $response[] = [
                'id_stylist' => $row['id_stylist'],
                'name' => $row['name'],
                'image' => $row['image'],
                'services' => [
                    'wedding_hair' => $row['wedding_hair'] == 1 ? true : false,
                    'wedding_makeup' => $row['wedding_makeup'] == 1 ? true : false,
                    'event_hair' => $row['event_hair'] == 1 ? true : false,
                    'event_makeup' => $row['event_makeup'] == 1 ? true : false,
                ],
                'city' => $row['city'],
                'desc' => $row['desc'],
            ];
    };
    
}catch(PDOException $e){
    echo 'Bład połączenia';
    die(); 
}

echo json_encode($response);








// header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
// if(isset($_SERVER['HTTP_ORIGIN'])){
//     header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
// }
// if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])){
//     header('Access-Control-Allow-Headers: '.$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']);
// }
// header('Access-Control-Allow-Credentials: true');
// header("Content-Type: application/json");

// $response = [
//     [
//         'name' => 'Edyta',
//         'image' => 'https://www.mobilesalon.net/wp-content/uploads/2019/01/MG_5036-300x200.jpg',
//         'servises' => [
//             'wedding_hair' => true,
//             'wedding_make' => true,
//             'event_hair' => true,
//             'event_makeup' => true,
//         ],
//         'city' => 'Warszawa',
//         'desc' => 'Historie z makijażem zaczęła w 2009 roku, gdy po architekturze krajobrazu postanowiła rozwijać się artystycznie stawiając na szkołę wizażu. Szkoła “Atlook” rozkochała Edytę w makijażu, co skłoniło ją do dalszego rozwoju w kierunku charakteryzacji w “Studio Sztuki” – uzyskała tam tytuł technik plastyk.Charakteryzacja to coś co łączy jej dwie pasje – ludzi oraz makijaż/stylizację. Sprawia jej to ogromną przyjemność. Prywatnie również maluje oraz zajmuje się rysunkiem.',
//     ],
//     [
//         'name' => 'Patrycja',
//         'image' => 'https://www.mobilesalon.net/wp-content/uploads/2019/01/profilowe-1-300x300.jpg',
//         'servises' => [
//             'wedding_hair' => true,
//             'wedding_makeup' => true,
//             'event_hair' => true,
//             'event_makeup' => true,
//         ],
//         'city' => 'Warszawa',
//         'desc' => '“Nie jesteśmy idealne, ale każda z nas jest wyjątkowa” – ten cytat jest dla Patrycji odzwierciedleniem jej pracy. Za swoje zadanie uważa podkreślenie makijażem i fryzurą urody, a nie przemalowaniem na kogoś innego. W dążeniu do idealnych makijaży pomagają jej szkolenia, w których często uczestniczy między innymi z Magdą Pieczonką, Maxineczką, Armani i Dior.',
//     ],
//     [
//         'name' => 'Małgorzata',
//         'image' => 'https://www.mobilesalon.net/wp-content/uploads/2019/03/Wizażystka-Kraków-220x300.jpg',
//         'servises' => [
//             'wedding_hair' => true,
//             'wedding_makeup' => true,
//             'event_hair' => true,
//             'event_makeup' => true,
//         ],
//         'city' => 'Kraków',
//         'desc' => 'Małgorzata od 11 lat zajmuje się fryzurami i stylizacjami. Jej pasją jest praca przy sesjach zdjęciowych oraz stylizacja ślubna. Jest absolwentką liceum plastycznego w Krakowie oraz Szkoły Artystycznego Projektowania Ubioru w Krakowie. W wolnych chwilach tworzy ceramikę, biżuterię oraz maluje obrazy.',
//     ],
// ];


// echo json_encode($response);

