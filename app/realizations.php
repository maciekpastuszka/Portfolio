<?
include 'config.php';
db_connect();

$realization_id = clear($_GET['realization']);

class Realization
{
    public $id;
    public $name;
    public $url;     
    public $desc;  
    public $technologies; 
    
    public function setData($id, $name, $url, $desc, $technologies)
    {
        $this->id = $id;
        $this->name = $name;
        $this->url = $url;
        $this->desc = $desc;
        $this->technologies = $technologies;
    }         
}



     $result = mysql_query("SELECT * FROM `realizations` WHERE short_name = '{$realization_id}'") or die(mysql_error());
        if(mysql_num_rows($result) > 0) {
            $row = mysql_fetch_assoc($result);
           
           $technologies = explode(',',$row['technologies'], -1);
            
            
$realization = new Realization;
$realization->setData($realization_id, $row['name'], $row['url'], $row['description'], $technologies);

echo json_encode($realization);
 
        
        
        } else {
          echo $realization_id." doesn't exist";
        }





/*

*/
?>