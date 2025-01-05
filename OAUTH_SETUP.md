# OAuth Configuration Guide

## 1. Appwrite Console Configuration

1. Go to [Appwrite Console](https://cloud.appwrite.io)
2. Select project: `67704838003d3092b954`
3. Configure OAuth:
   - Click "Auth" in the left sidebar
   - Click "OAuth2 providers" tab
   - Find "Google" in the list
   - Click the toggle to enable it
   - Click "Google" to open settings

4. Add Platforms:
   - Click "Settings" in the left sidebar
   - Select "Platforms"
   - Click "Add Platform"
   - Select "Web App"
   - Add these domains:
     ```
     localhost
     http://localhost:3000
     https://*.netlify.app
     ```
   - Click "Submit"

## 2. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create or select a project
3. Enable OAuth2 API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google OAuth2"
   - Click "Enable"

4. Configure OAuth Consent Screen:
   - Go to "APIs & Services" > "OAuth consent screen"
   - Choose "External" user type
   - Fill in required information:
     ```
     App name: Event Logistics Management
     User support email: [your-email]
     Developer contact email: [your-email]
     ```
   - Add scopes:
     ```
     ./auth/userinfo.email
     ./auth/userinfo.profile
     openid
     ```
   - Click "Save and Continue"

5. Create OAuth Client ID:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Application type: "Web application"
   - Name: "Event Logistics Management"
   
   Add Authorized JavaScript Origins:
   ```
   https://cloud.appwrite.io
   http://localhost:3000
   https://[your-netlify-site].netlify.app
   ```
   
   Add Authorized Redirect URIs:
   ```
   https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google
   ```

6. Copy Credentials to Appwrite:
   - Copy the generated Client ID
   - Copy the generated Client Secret
   - Go back to Appwrite Console > Auth > OAuth2 providers > Google
   - Paste Client ID and Client Secret
   - Click "Save"

## 3. Environment Configuration

1. Verify your `.env` file has these values:
   ```env
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=67704838003d3092b954
   ```

2. If deploying to Netlify, add these environment variables in Netlify:
   - Go to Site settings > Environment variables
   - Add the same variables as above

## 4. Testing OAuth Flow

1. Local Testing:
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000
   - Click "Continue with Google"
   - Should redirect to Google consent screen
   - After authorization, should redirect back to your app

2. Production Testing:
   - Deploy to Netlify
   - Open your Netlify site
   - Test the Google login flow
   - Should work the same as local testing

## Troubleshooting

If you get a 401 invalid_client error:

1. In Appwrite Console:
   - Verify Google OAuth provider is enabled
   - Check Client ID and Secret are entered correctly
   - Verify platform URLs are added

2. In Google Cloud Console:
   - Verify OAuth consent screen is configured
   - Check authorized domains include:
     * cloud.appwrite.io
     * localhost
     * your-netlify-domain.netlify.app
   - Verify redirect URI exactly matches:
     * https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google

3. Common Issues:
   - Mismatched Client ID/Secret
   - Missing authorized domains
   - Incorrect redirect URI
   - OAuth consent screen not configured
   - API not enabled in Google Cloud Console

## Security Notes

1. Keep Client ID and Secret secure
2. Use environment variables for configuration
3. Monitor OAuth usage in Google Cloud Console
4. Use HTTPS in production
5. Implement proper error handling
6. Regular security audits

## Need Help?

If you're still experiencing issues:
1. Check Appwrite Console logs
2. Verify Google Cloud Console OAuth consent screen status
3. Ensure all domains are properly configured
4. Test with incognito/private browsing
5. Clear browser cache and cookies