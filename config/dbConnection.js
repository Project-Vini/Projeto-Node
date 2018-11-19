var mysql = require('mysql');

var conMysql = function(){
    console.log('Conexão com o banco de dados foi estabelecida!');
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portal_noticias'
        });
}

module.exports =  function() {
    console.log('O autolod carregou o modulo de conexão com o db!');
        return conMysql;
}