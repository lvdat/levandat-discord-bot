## Example Discord BOT with DiscordJS

## Guide
- Set up environment: ```Nodejs >= 16```
- Install DiscordJS and some packages:
```
    yarn add discord.js dotenv
```
- Duplicate `.env.example` and config.
- Edit some slash command(s) in `commands` folder
- Register slash command after edit commands:
```
    node deploy-command
```
- Simple run server
```
    node index
```