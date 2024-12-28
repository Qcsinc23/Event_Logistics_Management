const sdk = require('node-appwrite');

/*
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200
  
  If an error is thrown, a response with code 500 will be returned.
*/

module.exports = async function (req, res) {
  const client = new sdk.Client();
  const users = new sdk.Users(client);

  // Don't forget to add your API key in the Appwrite Console
  if (
    !req.variables['APPWRITE_FUNCTION_ENDPOINT'] ||
    !req.variables['APPWRITE_FUNCTION_API_KEY']
  ) {
    throw new Error('Environment variables are not set.');
  }

  client
    .setEndpoint(req.variables['APPWRITE_FUNCTION_ENDPOINT'])
    .setProject(req.variables['APPWRITE_FUNCTION_PROJECT_ID'])
    .setKey(req.variables['APPWRITE_FUNCTION_API_KEY']);

  const payload = JSON.parse(req.payload);
  const { userId, secret, password } = payload;

  try {
    // Update the password
    await users.updatePassword(userId, secret, password);
    
    return res.json({
      success: true,
      message: 'Password successfully reset'
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    }, 400);
  }
};
