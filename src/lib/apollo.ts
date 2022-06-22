import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o64kdp0ry801xm70ti9r31/master',
  cache: new InMemoryCache()
})