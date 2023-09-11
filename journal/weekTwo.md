

## Implementing Cognito User Pools with AWS Cli


DOCS -->
https://docs.aws.amazon.com/cli/latest/reference/cognito-idp/create-user-pool.html


 -> Default values, no required attributes, no application clients, MFA and advanced security is disabled -->
aws cognito-idp create-user-pool --pool-name MyUserPool


 -> Configured to accept email as a username attribute-->
aws cognito-idp create-user-pool --pool-name MyUserPool --username-attributes "email" 


1. Create User Pool -->

aws cognito-idp create-user-pool --pool-name TailzMain --policies 'PasswordPolicy={MinimumLength=8,RequireLowercase=true,RequireNumbers=true,RequireSymbols=true,RequireUppercase=true}' --username-attributes "email" 


2. Create App Client-->
aws cognito-idp create-user-pool-client --user-pool-id <Your_User_Pool_ID> --client-name MyUserPoolAppClient --no-generate-secret

( Replace <Your_User_Pool_ID> with the actual ID of the user pool you created in step 1.)


3. Configure Google Identity Provider-->
aws cognito-idp create-identity-provider --user-pool-id <Your_User_Pool_ID> --provider-name Google --provider-type Google --provider-details '{"client_id":"<Your_Google_Client_ID>","client_secret":"<Your_Google_Client_Secret>","authorize_scopes":"email profile openid"}'


4. Configure Apple Identity Provider-->
aws cognito-idp create-identity-provider --user-pool-id <Your_User_Pool_ID> --provider-name Apple --provider-type SignInWithApple --provider-details '{"client_id":"<Your_Apple_Client_ID>","team_id":"<Your_Apple_Team_ID>","key_id":"<Your_Apple_Key_ID>","private_key":"<Your_Apple_Private_Key>","authorize_scopes":"email name"}'


//////////////////////////////////////////////////////////////////NOT SURE IF WE HAVE TO DO THIS
5. Create UserPool client 

aws cognito-idp create-user-pool-client --user-pool-id us-west-2_mN95BT1gK --client-name my-client-app --allowed-o-auth-flows "code" --allowed-o-auth-scopes "openid" "email" --allowed-o-auth-flows-user-pool-client --required-attributes "email" "phone_number" --allowed-o-auth-providers "COGNITO" --callback-urls "https://example.com/callback" --logout-urls "https://example.com/logout" --default-redirect-uri "https://example.com/redirect" --supported-identity-providers "COGNITO" 


6. Get Schema for User Pool

aws cognito-idp describe-user-pool --user-pool-id <your-user-pool-id>

Schema -->
aws cognito-idp create-user-pool --pool-name cruddur-user-pool --policies '{
    "PasswordPolicy": {
        "MinimumLength": 8,
        "RequireUppercase": true,
        "RequireLowercase": true,
        "RequireNumbers": true,
        "RequireSymbols": true,
        "TemporaryPasswordValidityDays": 7
    }
}' --lambda-config '{
    "PostConfirmation": "arn:aws:lambda:us-west-2:678530945395:function:cruddur-post-confirmation"
}' --deletion-protection "ENABLED"

Here's a breakdown of the options used in the command:

create-user-pool: The command to create a new Cognito user pool.
--pool-name: Specifies the name of the user pool.
--policies: Specifies the password policy for the user pool.
--lambda-config: Specifies Lambda triggers for the user pool, in this case, the PostConfirmation trigger.
--deletion-protection: Specifies whether deletion protection is enabled.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

DOCS --> https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/

Existing Authentication resources from AWS (e.g. Amazon Cognito UserPools or Identity Pools) can be used with the Amplify Libraries by calling the Amplify.configure() method.
In your app's entry point (i.e. App.js, index.js, _app.js, or main.js), import and load the configuration file:

import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

    // REQUIRED - Amazon Cognito Region
    region: 'XX-XXXX-X',

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: 'XX-XXXX-X',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'XX-XXXX-X_abcd1234',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
    // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
    signUpVerificationMethod: 'code', // 'code' | 'link'

    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      domain: '.yourdomain.com',
      // OPTIONAL - Cookie path
      path: '/',
      // OPTIONAL - Cookie expiration in days
      expires: 365,
      // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      sameSite: 'strict' | 'lax',
      // OPTIONAL - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      secure: true,
    },

    // OPTIONAL - customized storage object
    storage: MyStorage,

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_PASSWORD_AUTH',

    // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
    clientMetadata: {myCustomKey: 'myCustomValue'},

    // OPTIONAL - Hosted UI configuration
    oauth: {
      domain: 'your_cognito_domain',
      scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin',
      ],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
});

