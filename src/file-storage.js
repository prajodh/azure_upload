const { BlobServiceClient } = require("@azure/storage-blob");

async function getTheImage(accountName, accessKey, imagePath) {
    const blobServiceClient = BlobServiceClient.fromConnectionString(`DefaultEndpointsProtocol=https;AccountName=${accountName};AccountKey=${accessKey};EndpointSuffix=core.windows.net`);
    const containerName = "philosiphers";
    const containerClient = blobServiceClient.getContainerClient(containerName); 
    const blobClient = containerClient.getBlobClient(imagePath);
    const properties = await blobClient.getProperties();
    const response = await blobClient.download();
    return [response, properties];
}

module.exports = { getTheImage };
