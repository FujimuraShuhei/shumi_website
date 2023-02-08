import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'shumiofficial1007',
  apiKey: process.env.API_KEY || 'uqPEvqymW8AscBTlQ8aTIp5W6w8OfTNo1FgM',
});
