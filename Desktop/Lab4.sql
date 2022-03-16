--- 1
Create table patron_statistics
    (patron_id              Varchar2(10)    Not Null,
    last_name               Varchar2(10),
    first_name              Varchar2(10),
    number_of_purchases     Number(11,0),
    number_of_items         Number(11,0),
    
    constraint Patron_Statistics_Pk Primary Key (Patron_id) );
    
    
    
--- 2
select patron_statistics.patron_id, patron_statistics.number_of_items, patron_statistics.number_of_purchases from patron_statistics;


--- 3
insert into patron_statistics (patron_id, last_name, first_name, number_of_purchases, number_of_items),
    Values  (123456789, 'Swatski', 'Daniel' 10, 20),
            (987654321, 'Swatski', 'John' 15, 25),
            (345678912, 'Gabe', 'Daniel' 5, 6);
 commit;
 select patron_statistics.patron_id, patron_statistics.number_of_items, patron_statistics.number_of_purchases from patron_statistics;


   
commit;
--- 4
