const axios = require("axios");

/*
Get started on localhost:
Install Starport: https://github.com/tendermint/starport/
Then: 
```
starport app github.com/username/app --sdk-version stargate && cd app
starport serve
```
Now the following RPC calls can be made
*/

// Get balance
// https://github.com/cosmos/cosmos-sdk/blob/master/proto/cosmos/bank/v1beta1/query.proto#L53
// axios.get("http://localhost:1317/cosmos/bank/v1beta1/balances/cosmos12x6x3gs24klu398hxf85cgr4w07p9evasusy7g/token").then(console.log);

// Get account (sequence, account_number and address)
// https://github.com/cosmos/cosmos-sdk/blob/master/proto/cosmos/auth/v1beta1/query.proto#L35
// axios.get("http://localhost:1317/cosmos/auth/v1beta1/accounts/cosmos12x6x3gs24klu398hxf85cgr4w07p9evasusy7g").then(console.log);

// Get Slashing params
// https://github.com/cosmos/cosmos-sdk/blob/master/proto/cosmos/slashing/v1beta1/query.proto#L32
// axios.get("http://localhost:1317/cosmos/slashing/v1beta1/params").then(console.log);

// Get staking validators
// https://github.com/cosmos/cosmos-sdk/blob/master/proto/cosmos/staking/v1beta1/query.proto#L104
// axios.get("http://localhost:1317/cosmos/staking/v1beta1/validators").then(x => {
//     console.log(x.data.validators);
// });

// Get pool info
// https://github.com/cosmos/cosmos-sdk/blob/master/proto/cosmos/staking/v1beta1/query.proto#L335
// axios.get("http://localhost:1317/cosmos/staking/v1beta1/pool").then(console.log);

// IBC client info
// https://github.com/cosmos/cosmos-sdk/blob/master/proto/ibc/core/client/v1/query.proto#L64
axios.get("http://localhost:1317/ibc/client/v1beta1/client_states").then(x => {
    console.log(x.data);
});