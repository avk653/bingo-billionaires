const mysql = require('mysql');
const con = mysql.createConnection({
host: "localhost",
user: 'root',
password: '',
database: "bingobillionaire"
});
if(con){ // mysql is started && connected successfully.
   console.log("I'm lowkey winning");

}else{
   console.log("I'm lowkey cooked");
}
