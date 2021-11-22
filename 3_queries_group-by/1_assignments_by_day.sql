SELECT assignments.day as day, COUNT(assignment_submissions.*) as total_assignments
FROM assignment_submissions
JOIN assignments ON assignments.id = assignment_submissions.id
GROUP BY assignments.day
ORDER BY assignments.day;
