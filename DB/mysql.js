import mysql from 'mysql'
const config = {
    host    : '',
    user    : '',
    password: '',
    database: ''
  };

  
const connection = mysql.createConnection(config)
  

export default connection;