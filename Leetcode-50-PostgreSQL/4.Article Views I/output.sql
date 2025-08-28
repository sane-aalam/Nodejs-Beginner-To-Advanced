-- Write your PostgreSQL query statement below
-- DISTINCT duplicate remove 
-- ORDER BY - sort acesending order 

SELECT DISTINCT author_id id FROM Views
where author_id = viewer_id 
ORDER BY author_id