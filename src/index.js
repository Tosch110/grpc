
const grpc = require("@grpc/grpc-js");

const client = new grpc.Client('http://localhost:1317', grpc.credentials.createInsecure());

client.makeUnaryRequest(`/cosmos/bank/v1beta1/balances/cosmos12x6x3gs24klu398hxf85cgr4w07p9evasusy7g/token`, Buffer.from([]), (err, response) => {
    if(err) {
        console.error(err);
    } else {
        console.log(response);
    }

    client.close();
});