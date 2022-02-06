const endpoint = (params, version = "/api/v1") => {
  return {
    postDocument: `${version}/document`,
    getAllCollections: `${version}/get-all-collections`,
    editDocument: `${version}/edit-document`,
    getDocumentById: `${version}/get-document-by-id`,
    getAllDocuments: `${version}/${params}/get-all-document`,
  };
};

export default endpoint;