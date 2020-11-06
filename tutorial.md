# Cosmos SDK gRPC Introduction


The gRPC helps to get and submit information from the Cosmos SDK. It is a convienient method that let's you avoid having to care about efficiency of an API, latency, scaling, load balancing, interoperability between languages, authenitication, monitoring or logging.
The Cosmos gRPC let's you create functions in the language of your choice and interact with your blockchain application. Let's look at the basics.

## What is an API with gRPC?

At its core, the API is a contract saying: Send me this REQUEST (Client side) and I send you this RESPONSE (Server side).

From here on builds gRPC the logic, developed by Google as a free and open-source project. It supports streaming, language independend and easy to use authentication, load balancing, logging and monitoring. The RPC stands for "Remote Procedure Call". Eventually on the Client it will look like just calling a function directly on the Server.

![gRPC Call](grpc-call.png)

RPC is not a new concept. Other frameworks and languages have used this in the past and the concept is battle tested. gRPC is a clean implementation of the RPC concet. The protocol is basically defined in Proto Request and Proto Responses, handled by the Server.

![gRPC Procedure](grpc-procedure.jpg)

## Let's get started

At the core we need to define the gRPC messages and services using Protocol Buffers. The rest of the gRPC code will be generated and we need an implementation for it. The .proto file works for over 12 programming languages server and client side and allows the framework to scale to millions of RPC requests per second.

In order to understand the implementation, we need to look into Protocol Buffers. Protocol Buffers mainly do two things, they define `messages` and `services`. The `messages` are for data, request and response while the `service` is for the name and RPC endpoint.