-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Create Categories Table
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  slug text not null unique,
  description text,
  image_url text
);

-- 2. Create Products Table
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  category_id uuid references public.categories(id) on delete cascade,
  name text not null,
  slug text not null unique,
  description text,
  price numeric,
  material text,
  usage_application text,
  color text,
  brand text default 'Motorline',
  automation_grade text,
  frequency text,
  voltage text,
  model_name text,
  specifications jsonb, -- Store other specs
  image_url text,
  is_featured boolean default false
);

-- 3. Create Enquiries Table
create table public.enquiries (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  phone text not null,
  company text,
  message text,
  status text default 'new', -- new, contacted, closed
  product_interest text
);

-- 4. Enable Row Level Security (RLS)
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.enquiries enable row level security;

-- 5. Create Policies

-- Categories: Everyone can read, only authenticated (admin) can insert/update/delete
create policy "Public categories are viewable by everyone"
  on categories for select
  using ( true );

create policy "Admins can insert categories"
  on categories for insert
  to authenticated
  with check ( true );

create policy "Admins can update categories"
  on categories for update
  to authenticated
  using ( true );

create policy "Admins can delete categories"
  on categories for delete
  to authenticated
  using ( true );

-- Products: Everyone can read, only authenticated (admin) can insert/update/delete
create policy "Public products are viewable by everyone"
  on products for select
  using ( true );

create policy "Admins can insert products"
  on products for insert
  to authenticated
  with check ( true );

create policy "Admins can update products"
  on products for update
  to authenticated
  using ( true );

create policy "Admins can delete products"
  on products for delete
  to authenticated
  using ( true );

-- Enquiries: Everyone can insert (submit form), only admins can view/update
create policy "Anyone can submit enquiries"
  on enquiries for insert
  with check ( true );

create policy "Admins can view enquiries"
  on enquiries for select
  to authenticated
  using ( true );

create policy "Admins can update enquiries"
  on enquiries for update
  to authenticated
  using ( true );

-- 6. Setup Storage for Images
-- You need to create a bucket named 'product-images' in the Storage dashboard manually or via SQL if supported (usually manual is safer for perms)
-- If running via SQL:
insert into storage.buckets (id, name, public) 
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

create policy "Public Access to Product Images"
  on storage.objects for select
  using ( bucket_id = 'product-images' );

create policy "Auth users can upload Product Images"
  on storage.objects for insert
  to authenticated
  with check ( bucket_id = 'product-images' );
  
create policy "Auth users can update Product Images"
  on storage.objects for update
  to authenticated
  using ( bucket_id = 'product-images' );

create policy "Auth users can delete Product Images"
  on storage.objects for delete
  to authenticated
  using ( bucket_id = 'product-images' );

-- 7. Insert Initial Sample Data
insert into public.categories (name, slug, description) values
('Boom Barriers', 'boom-barriers', 'High-performance automatic boom barriers for traffic control.'),
('Turnstiles', 'turnstiles', 'Robust turnstiles for pedestrian access control.'),
('Sliding Gates', 'sliding-gates', 'Heavy-duty industrial sliding gates.'),
('Bollards', 'bollards', 'Hydraulic and fixed bollards for high security.');
