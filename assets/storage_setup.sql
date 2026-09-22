-- ============================================================
-- RAKSHA RIDE — Storage setup for Voice/Video SOS
-- Run this once in Supabase SQL Editor.
-- Creates a public bucket so a WhatsApp/SMS link to a recording
-- can be opened by the trusted contact without logging in, while
-- only the owning user can upload into their own folder.
-- ============================================================

insert into storage.buckets (id, name, public)
values ('sos-media', 'sos-media', true)
on conflict (id) do nothing;

drop policy if exists "Users can upload own sos media" on storage.objects;
create policy "Users can upload own sos media" on storage.objects for insert
with check (bucket_id = 'sos-media' and auth.uid()::text = (storage.foldername(name))[1]);

drop policy if exists "Public can view sos media" on storage.objects;
create policy "Public can view sos media" on storage.objects for select
using (bucket_id = 'sos-media');
