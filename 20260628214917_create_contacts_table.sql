/*
# Create contacts table for form submissions

1. New Tables
- `contacts`
- `id` (uuid, primary key, auto-generated)
- `name` (text, not null) - Contact's full name
- `email` (text, not null) - Contact's email address
- `company` (text, nullable) - Company name if applicable
- `phone` (text, nullable) - Phone number
- `services` (text[], default '{}') - Array of selected services
- `budget` (text, nullable) - Selected budget range
- `timeline` (text, nullable) - Project timeline preference
- `message` (text, not null) - Project details message
- `source` (text, nullable) - How they heard about us
- `inquiry_type` (text, default 'project') - Type of inquiry (project, partnership, general)
- `status` (text, default 'new') - Contact status (new, contacted, qualified, closed)
- `created_at` (timestamptz, default now()) - Submission timestamp

2. Security
- Enable RLS on `contacts`.
- Allow anon + authenticated to INSERT (for public form submissions).
- Only authenticated users can SELECT/UPDATE/DELETE (for admin access).
- This is a single-tenant app without user sign-in, so inserts must work with anon key.
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  services text[] DEFAULT '{}',
  budget text,
  timeline text,
  message text NOT NULL,
  source text,
  inquiry_type text DEFAULT 'project',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to insert contact form submissions
DROP POLICY IF EXISTS "anon_insert_contacts" ON contacts;
CREATE POLICY "anon_insert_contacts" ON contacts FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Only authenticated users can view contacts (admin access)
DROP POLICY IF EXISTS "authenticated_select_contacts" ON contacts;
CREATE POLICY "authenticated_select_contacts" ON contacts FOR SELECT
TO authenticated USING (true);

-- Only authenticated users can update contacts
DROP POLICY IF EXISTS "authenticated_update_contacts" ON contacts;
CREATE POLICY "authenticated_update_contacts" ON contacts FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated users can delete contacts
DROP POLICY IF EXISTS "authenticated_delete_contacts" ON contacts;
CREATE POLICY "authenticated_delete_contacts" ON contacts FOR DELETE
TO authenticated USING (true);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS contacts_email_idx ON contacts (email);

-- Create index for status filtering
CREATE INDEX IF NOT EXISTS contacts_status_idx ON contacts (status);

-- Create index for created_at ordering
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts (created_at DESC);
