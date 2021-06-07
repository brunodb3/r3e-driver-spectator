# r3e-driver-spectator
 
 A simple script that changes the camera to spectate a specific car. Every 10 seconds it updates, so you can just leave it running on a spectator instance of the game, it will work when changing from Practice/Qualifying/Race sessions.

## How to start

Make sure to have `nodeJS` installed on your computer. See [their website](https://nodejs.org/en/) for the download information. 

- Download this repository and open it on your console (Command Prompt on Windows).
- Run `npm install` to install the dependencies and prepare the project.
- To start, run `npm start` and then open the game.

## Changing the driver

On the file [driver-spectator.js](./r3e/lib/driver-spectator.js) you can find the following lines:

```typescript
  const targetDriver = {
    id: 5931666,
    name: "Bruno Brito"
  };
```

These are the details for my driver on RaceRoom. If you want to make the camera chase a different driver, just change these details above, hit save and restart the application.

You can get the driver details by going to `https://game.raceroom.com/users/BrunoBrito/?json=true`. Change `/BrunoBrito/` to your username. If you look for `user_id`, that will give you the number you're supposed to put under `id` on the file. You should also be able to find a `name` property with your profile name on it, but this is the same as what shows on your profile normally.

## Note

This is a personal project that I created to help on my stream, where I have a live "TV-like" feed of the race while driving. This was done with a multi-PC setup, a proper guide on how to do it is in the works. I will update this project as I need to, but it is not supposed to replace something like [the spectator guide by Sector3](https://forum.sector3studios.com/index.php?threads/spectator-broadcast-guide.3046/).
