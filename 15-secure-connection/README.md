# Create testing HTTPS connection using OpenSSL

To create private key and certificate files, use the following commands in `bin/` folder.

`
openssl genrsa 1024 > private.key
openssl req -new -key private.key -out cert.csr
openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
`
