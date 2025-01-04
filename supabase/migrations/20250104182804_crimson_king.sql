/*
  # Add nickname field to profiles

  1. Changes
    - Add nickname column to profiles table
    - Make nickname optional initially to support existing users
    
  2. Security
    - Maintain existing RLS policies
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' 
    AND column_name = 'nickname'
  ) THEN
    ALTER TABLE profiles ADD COLUMN nickname TEXT;
  END IF;
END $$;