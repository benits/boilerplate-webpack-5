[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/benits/boilerplate-webpack-5)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Open Source Helpers](https://www.codetriage.com/benits/boilerplate-webpack-5/badges/users.svg)](https://www.codetriage.com/benits/boilerplate-webpack-5)

# First Contributions

It's difficult. It is always difficult to do something the first time. Especially when collaborating, making mistakes is not a pleasant thing. But *open source* (open source) is about collaboration and working together. We want to simplify the way that new *open source* employees learn and contribute for the first time.

Reading articles and watching tutorials can help, but what's better than actually getting your hands dirty in a practical environment? This project aims to guide and simplify the way newbies make their first contribution. If you want to make your first contribution, follow the steps below.

If you don't have git on your machine, [install it here]( https://help.github.com/articles/set-up-git/ ).

## Fork this repository

Make a Fork by clicking on the "Fork" button at the top of this page. This will create a copy of this repository in your account.

## Clone the repository

Now clone this repository to your machine. Click the "Clone or download" button, then click the "Copy to clipboard" icon to copy the URL.

Open your terminal and run the following git command:

```

git clone "url you copied"

```

where "url you copied" (without quotes) is the URL for this repository. See the previous steps for the URL.

For example:

```

git clone https://github.com/your-user/first-contributions.git

```

where "your-user" is your GitHub user. Here you are copying the contents of the first-contributions repository to your computer.

## Create a Branch

Go to the repository directory on your computer (if you are not already there):

```

cd first-contributions

```

Now create a Branch using the command `git checkout`:

```

git checkout -b <add-your-name>

```

For example:

```

git checkout -b add-matheus-benites

```

Note: The name of the Branch does not need to have the acronym "add", but in this case it is recommended, because the purpose of this Branch is to add your name to a list.

## Make the necessary changes and make a Commit

Now open the file `Contributors.md` in your code editor, add your name to it and save the file.

If you go to the project directory and run the `git status` command, you will see that there are changes. Add these changes to the Branch you just created using the `git add` command:

```

git add Contributors.md

```

Now commit these changes using the `git commit` command:

```

git commit -m "Add <your-name> to Contributors list"

```

filling in `<you-name>` with your name.

## Push changes to GitHub

Push using the `git push` command:

```

git push origin <add-your-name>

```

replacing `<add-your-name>` with the name of the Branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you will see a `Compare & pull request` button. Click that button.

Now send a Pull Request.

Soon I will be merging ('dipping') your changes into the main branch (master) of this project. You will receive a notification email when the changes are merged.

## Where to go from here?

Congratulations! You have completed the basic _fork -> clone -> edit -> PR_ workflow that you will often find as a contributor!
