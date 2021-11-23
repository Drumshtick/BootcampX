SELECT day, COUNT(*) as number_assignments, SUM(duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;
