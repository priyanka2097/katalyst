// const express = require('express');
// const path = require('path');
// const app = express();

// const posts = require('./server/routes/posts');


// app.listen(4600, (req, res) => {
//     console.log('running on 4600');
// })

// // Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');
// // Set the region 
// var cred = new AWS.Credentials('AKIARSSEPWVXP3DX6ZVB', 'wD+z8K772AXHWSm6duLaADkiIe0x+LiOfqeCKC6y', null)
// AWS.config.update({ region: 'ap-south-1', credentials: cred });
// // AWS.config.update({ region: 'REGION' });

// // Create S3 service object
// s3 = new AWS.S3({ apiVersion: '2006-03-01' });


// var params = {
//     Bucket: 'priyankabucket007',
//     /* required */
// };
// s3.getBucketEncryption(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
// });

// // Call S3 to list the buckets
// s3.listBuckets(function(err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data.Buckets);
//     }
// });