# pr-on-comment

## A probot app which can create a pull request on comment in a corresponding issue

>You can install it from https://github.com/apps/pr-on-comment

This probot app creates a pull request regarding the issue on which one comments.
If user comments on an issue using the phrase "Create PR" in it and providing the branch-name from which the PR is to be made then automatically the mentioned branch of the users fork and master of the repository gets compared and a PR is created.


## STEPS TO BE FOLLOWED:

1. Get the app installed from https://github.com/apps/pr-on-comment on your project repository (let it's name be 'yourrepo').
2. A contributor should fork and push commits to the fork.
3. Suppose the contributor's username is 'username' pushes commits to the branch 'new' of his fork.
4. He should comment on the corresponding issue as ```<any text here> Create PR <any text here> "head":<space>"new"; <any text here>```
5. The Pull Request will be created comparing 'username:new' to 'yourrepo:master'.


# -----------------------------------------
> a GitHub App built with [probot](https://github.com/probot/probot) that

## Setup

```
# Install dependencies
npm install

# Run the bot
npm start
```

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this app.
