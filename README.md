# Local setup

## OpenSSL

1. Make sure OpenSSL is installed
2. _In your terminal_ generate a 2048-bit RSA key:<br>
   `openssl genrsa -des3 -out private.pem 2048`
3. Export private and public key to your local folder:<br>
   `openssl rsa -in private.pem -outform PEM -pubout -out public.pem`
4. Copy/paste files to the _root_ of this project and change extension to `.key`

## Environment variables

1. _In the root_ create `.env` file with required keys from the `.env.local` file
2. _In your terminal_ type the following to connect your `.env`:
    1. `set -a`
    2. `source .env`
