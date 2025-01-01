-- Replace 'USER_EMAIL' with the email of the user you want to make admin
UPDATE auth.users
SET role = 'admin'
WHERE email = 'sales@quietcraftsolutions.com'
AND role = 'user';

-- Verify admin was set
SELECT email, role 
FROM auth.users 
WHERE role = 'admin';
