-- Visitor baseline: default 50,000 all-time visits.
-- Real tracked visits are added on top of this by increment_visit().

alter table visitor_totals alter column total_count set default 50000;

-- Explicit baseline set: re-running this file resets the counter to 50,000.
insert into visitor_totals (id, total_count)
values (1, 50000)
on conflict (id) do update set
  total_count = 50000,
  updated_at = now();

select * from visitor_totals;
