const CreateConnection = (serverUrl, roomId) => {
  return {
    connect() {
      console.log("connecting to this " + roomId + "at this" + serverUrl);
    },
    disconnect() {
      console.log("disconnecting from this" + roomId + "room at" + serverUrl);
    },
  };
};

export default CreateConnection;
