<?
include 'config2.php';
db_connect();


$action = $_POST['action'];
$post_id = $_POST['post_id'];
$ocena = $_POST['rate'];

class rate {
    public function getRate($id)
    {
        $result = mysql_query("SELECT * FROM `wp_posts` WHERE ID = '{$id}'") or die(mysql_error());
        if(mysql_num_rows($result) > 0) {
            $row = mysql_fetch_assoc($result);
            $rate = round($row['sum']/$row['count']);
        }
        return $rate;
    }   

    public function updateRate($id, $rate)
    {
        $result = mysql_query("SELECT * FROM `wp_posts` WHERE ID = '{$id}'") or die(mysql_error());
        if(mysql_num_rows($result) > 0) {
            $row = mysql_fetch_assoc($result);
            $count = $row['count']+1;
            $sum = $row['sum']+$rate;
            mysql_query("UPDATE `wp_posts` SET `sum` = '{$sum}', `count` = '{$count}' WHERE `id` = '{$id}'") or die(mysql_error());
        }
    } 
} 


$rate = new rate;

switch ($action) {
    case "get":
        echo $rate->getRate($post_id);
        break;
    case "update":
        $rate->updateRate($post_id, $ocena);
        echo $rate->getRate($post_id);
        break;
}

?>