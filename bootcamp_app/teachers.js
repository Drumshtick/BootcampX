const { Pool } = require('pg');
// import node-pg then connect to database with the following
// options
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv.splice(2,1);

pool.query(`
SELECT DISTINCT  teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = '${cohort}'
ORDER BY teacher;
`)
.then(res => {
  console.log('connected');
  res.rows.forEach(HTMLTableRowElement => {
    console.log(`${cohort}: ${row.teacher}`);
  })
});