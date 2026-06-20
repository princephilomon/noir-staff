-- If you already have the orders table, run this to add the new columns for tips and ratings

-- Add tip column if it doesn't exist
ALTER TABLE orders ADD COLUMN IF NOT EXISTS tip numeric DEFAULT 0;

-- Add rating column if it doesn't exist
ALTER TABLE orders ADD COLUMN IF NOT EXISTS rating integer;

-- Add rating_comment column if it doesn't exist
ALTER TABLE orders ADD COLUMN IF NOT EXISTS rating_comment text;
