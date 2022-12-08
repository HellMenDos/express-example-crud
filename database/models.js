import Sequelize from 'sequelize'

var conn;  
(async function() {  
    if(!conn) {  
        try {  
            // Initialize the connection on the first run  
            conn = new Sequelize("dbName", null, null, {  
                dialect: "sqlite",  
                storage: "database/db.sqlite"  
            });  
            console.log("Connected to the database.");  
     
            // Create the tables  
            try {  
                await conn.sync({force: true});  
                console.log("Created the tables successfully.");  
            } catch(error) {  
                console.log("Cannot create the tables.\n" + error);  
            }  
        } catch (error) {  
            console.log("There was a problem with connection.\n" + error);  
        }  
    }  
})();


export const User = conn.define("Employee", {  
    Id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },  
    Name: Sequelize.STRING,  
}); 


