const DBSQL=require('./mysqlDB.js')

const seedDB=async()=>{
    const users = [
        ['Adrina', 19,'nothing', 'adz@example.com'],
        ['Asher', 15, 'nothing', 'asher@example.com'],
        ['Hilda', 40, 'nothing', 'hil@example.com']
    ];

    const userQuery = 'INSERT INTO users (name, age,description, email) VALUES ?';

    DBSQL.query(userQuery, [users], (err, result) => {
        if (err) throw err;
        console.log('Users Inserted:', result.affectedRows);

        const entities = [
            ['Spaghetti Bolognese', 'A classic Italian pasta dish with rich meat sauce', 45],
            ['Chocolate Brownie', 'A rich and fudgy chocolate dessert with a crispy top', 35],  
            ['Blueberry Pancakes', 'Fluffy pancakes loaded with fresh blueberries and maple syrup', 25]  
        ];

        const entityQuery = 'INSERT INTO entities (name, description, created_by) VALUES ?';

        DBSQL.query(entityQuery, [entities], (err, result) => {
            if (err) throw err;
            console.log('Entities Inserted:', result.affectedRows);
            db.end();
        });
    });
}