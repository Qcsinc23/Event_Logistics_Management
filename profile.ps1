# Add Node.js and npm to PATH
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
$env:PATH = "$env:APPDATA\npm;$env:PATH"

# Set Netlify auth token
$env:NETLIFY_AUTH_TOKEN = "nfp_shCjC6ednM1ky8DgV8kTB7ku8PoWRLana00d"

# Set Appwrite variables
$env:APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1"
$env:APPWRITE_PROJECT_ID = "67704838003d3092b954"

# Function to refresh PATH
function Update-Path {
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
}

Update-Path