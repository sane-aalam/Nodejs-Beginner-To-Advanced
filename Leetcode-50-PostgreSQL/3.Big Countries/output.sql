
-- Write your PostgreSQL query state
-- out put on basic of this condtion 
-- where (condtion)
-- it has an area of at least three million (i.e., 3000000 km2), or
-- it has a population of at least twenty-five million (i.e., 25000000).


SELECT name,population,area from World
WHERE (area >= 3000000 or population >= 25000000 )