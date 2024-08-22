# Dialogs Animation

## What are dialogs

Dialogs are UI components that display content in a layer above the main application interface, often used to capture user
input, confirm actions, or provide information. They temporarily interrupt the user’s workflow to focus attention on a specific task or message.

Key characteristics of dialogs include:

Overlay: Dialogs typically appear with a semi-transparent background overlay to draw focus away from the main content and toward the dialog itself.
Interaction: Users interact with dialogs to perform tasks such as filling out forms, making selections, or confirming actions.
Modal vs. Non-modal:
Modal Dialogs: Require the user to interact with them before returning to the main application (e.g., a confirmation dialog).
Non-modal Dialogs: Allow the user to interact with other parts of the application while the dialog remains open (e.g., a chat window).
Close Mechanism: Dialogs usually include buttons or options to close them, and many also support closing by clicking outside of the dialog area or pressing the escape key.
Dialogs are essential for guiding users through tasks that need their full attention or for displaying important information that should not be missed.


## Dialog useClickOutsideHook

Dialogs with Click Outside Detection:

These dialogs are interactive UI elements that often need to close or trigger specific actions when the user clicks or touches outside of them. To achieve this:

Click Outside Detection: The dialog component uses a custom hook (useClickOutside) to monitor click or touch events on the entire document.
Inside vs. Outside Clicks: The hook checks whether the event occurred inside the dialog. If the click or touch happens inside, nothing happens, allowing the user to interact with the dialog without closing it accidentally. If the event occurs outside the dialog, a designated callback function is triggered, typically closing the dialog or executing another action.
This approach ensures that the dialog remains open while the user interacts with it but closes gracefully when they click elsewhere, improving the overall user experience.


### Dialog Basics One

To present the dialog to be expanded have a dialog animation, the dialog animation consists of a DialogTrigger, which
will cause the modal to open, in this case, the dialog trigger is a desk lamp, and below it we have a div with a title,
subtitle, and a button where we tell the user to click to see more.
On button click, we will have the expanded dialog, where we are going to have all the informations, such as the description
and the dialog content. The dialog description component may receive a boolean of disableLayoutAnimation, that would hide
the miniature of the trigger dialog. And a property of the variants that we want to include on that description, variants like
initial, animate, exit.
Inside the description we are going to have some p tags where we will fill that description like we would do normally
and below the description we will have a DialogClose