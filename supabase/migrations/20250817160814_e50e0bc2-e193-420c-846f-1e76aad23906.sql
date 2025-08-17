-- Remove the dangerous public SELECT policy
DROP POLICY "Anyone can view contact messages" ON public.contact_messages;

-- Create a restricted policy that only allows authenticated users to view messages
-- This is a temporary fix - you should implement proper admin roles for production
CREATE POLICY "Only authenticated users can view contact messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated
USING (true);

-- The INSERT policy remains the same so the public contact form still works
-- CREATE POLICY "Anyone can submit contact messages" 
-- ON public.contact_messages 
-- FOR INSERT 
-- WITH CHECK (true);