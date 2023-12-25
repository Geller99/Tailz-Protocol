// amplify-config.js
import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  "AWS_PROJECT_REGION": process.env.NEXT_PUBLIC_REACT_APP_AWS_PROJECT_REGION,
  "aws_cognito_identity_pool_id": process.env.NEXT_PUBLIC_REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  "aws_cognito_region": process.env.NEXT_PUBLIC_REACT_APP_AWS_COGNITO_REGION,
  "aws_user_pools_id": process.env.NEXT_PUBLIC_REACT_APP_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.NEXT_PUBLIC_REACT_APP_CLIENT_ID,
  "oauth": {},
  Auth: {
    region: process.env.NEXT_PUBLIC_REACT_APP_AWS_PROJECT_REGION,
    userPoolId: process.env.NEXT_PUBLIC_REACT_APP_AWS_USER_POOLS_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_REACT_APP_CLIENT_ID,
  }
};

Amplify.configure(amplifyConfig);


export default amplifyConfig;


// {
//   "UserPoolClient": {
//       "UserPoolId": "us-east-1_kvPzTDvWb",
//       "ClientName": "TailzClient",
//       "ClientId": "4bgd5r70a8gtfe4d5d2us1gs6r",
//       "LastModifiedDate": "2023-08-30T21:51:35.978000-06:00",
//       "CreationDate": "2023-08-30T21:51:35.978000-06:00",
//       "RefreshTokenValidity": 30,
//       "TokenValidityUnits": {},
//       "AllowedOAuthFlowsUserPoolClient": false,
//       "EnableTokenRevocation": true,
//       "EnablePropagateAdditionalUserContextData": false,
//       "AuthSessionValidity": 3
//   }
// }