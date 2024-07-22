const Minio = require('minio');

// Instantiate the minio client with your endpoint and credentials
const minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000, // typically 9000 for MinIO
  useSSL: false, // true if your MinIO server uses SSL
  accessKey: 'jwoA9wN97UObDQgTEUqs',
  secretKey: 'qF7jaiSX6AcQJ1OBGI1zceyJnOQ1JOPxleKrLBBz'
});

module.exports = minioClient;
