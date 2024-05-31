'use server'

/* These are server side logic functions that we can write, by adding 'use server' to the first line, we tell next that
we only want to execute everything inside this client in the server, never on the client, one example is when we utilize
our db.

So in our example, we can simply retrieve all the parameters we need. This is not something we need to pass with the URL
parameters, post parameters, or anything like that.
This is as if we were calling a function, the name of this is RPC, a Remote Procedure Call
*/

export async function saveConfig({
  color,
  finish,
  material,
  model,
  configId,
}) {}
