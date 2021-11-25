const { Pool } = require('pg');
// import node-pg then connect to database with the following
// options
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.splice(2,2);

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '${args[0]}%'
LIMIT ${Number(args[1])};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});