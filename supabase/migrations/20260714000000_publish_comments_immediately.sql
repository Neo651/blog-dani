alter table public.comments enable row level security;

alter table public.comments
  alter column is_approved set default true;

do $$
declare
  insert_policy record;
begin
  for insert_policy in
    select policyname
    from pg_policies
    where schemaname = 'public'
      and tablename = 'comments'
      and cmd = 'INSERT'
  loop
    execute format('drop policy %I on public.comments', insert_policy.policyname);
  end loop;
end
$$;

create policy comments_insert_authenticated_public
on public.comments
for insert
to authenticated
with check (
  auth.uid() is not null
  and auth.uid() = user_id
  and is_approved = true
);
