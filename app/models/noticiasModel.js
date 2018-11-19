module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('Select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback) {
          connection.query('Select * from noticias Where idNoticias = 2', callback); 

    }
    
    return this;
}