var configValues = require("./config");


module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${ configValues.username }:${ configValues.password }@ds133368.mlab.com:33368/todoslist`;
    }
}