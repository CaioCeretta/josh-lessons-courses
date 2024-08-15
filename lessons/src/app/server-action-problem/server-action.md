# Are react server actions that bad?


To use a server action we define an asynchronous function, it doesn't matter if we are doing something asynchronous or not
and we mark it as "use server" to ensure this only runs in the server as a react server actione.

If we have a function named deleteUser on the action file, it'll call this function on the client and it's ok, but the
security breach happens, if let's say we have a function named get userId, and that function would return the id of the
current user.

One thing we should know is that:

"The "use server" annotation exposed an endpoint that makes all exported functions invokable
by the client. The identifiers is currently a hash of the source code location. As long as a user gets the handle to the
id of an action, it can invoke it with any arguments.

As a result, those functions should aways start by validating that the current user is allowed to invoke this action.
Function should also validate the integrity of each argument. This can be done manually or with a tool like zod."

So that as long as the user can figure out somehow the id of this action, the deleteUser that nextjs automatically signs
under the hood, even if we think that the user cannot find out the id, it's not difficult for someone to find it.

to get the id of a server action, we only need to go to the network tab and once we perform a click on the button, and
check the Next-Action id, simple as that.

So deleting a user, we just need to grab the entire request, mock it, and change the user id to the user id we want to.

So the real problem is not client side input validation or a request forgery issue, is authorization, there is no logic
checking who is authorized to delete which user in our user action

So the security risk in this case comes down to 2 security threats and vulnerabilities

1. Broken access control: if the 'userID' is not properlyu authorized, an attacker could potentially delete any team member
by guessing the 'userId' value. 
2. Enumerating attack: if the 'userId' is in the format of an easily-guessed sequential format such as incrementing integer,
and it is not bound by rate-limit or orhter security control, an attack could potentially enumerate all the team members
in the database by iterating over the 'userID' values



