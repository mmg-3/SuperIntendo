[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/caulipizzas/SuperIntendo.svg?branch=master)](https://travis-ci.org/caulipizzas/SuperIntendo)

<p align="center">
<a href='superintendo.herokuapp.com'>
<img width="250" alt="superintendo logo" src="public/images/superintendo.jpg">
</a>
</p>

The Salesforce for property management with one view for 3 different users:

* Tenants - Submit maintenance tickets and news
* Workers - Work on issues brought up by tickets
* Building owner - Control overview of system and ensure work is being done

## Development

### To install and work on Superintendo locally:

#### Requirements

* MacOS & Linux supported, Windows support experimental
* Node v7 minimum
* PostgreSQL

#### How to install & run

```bash
git clone https://github.com/caulipizzas/SuperIntendo/ # you may want to fork
cd SuperIntendo
npm install # grab all our dependencies
npm run seed # initialize db with some data
npm run start-dev # start server and client
```

In order to ensure full operation, please register with imgur.com and grab an api key. Then make a file called `secrets.js` in the root folder (it's already git-ignored) and copy paste the following (make sure to replace the ID)

```
process.env.IMGUR_CLIENT_ID = 'YOUR_CLIENT_ID'
```

#### Running tests

```bash
npm run test
```

You'll see the coverage summary at the end.

## Features

Upon signup, you'll be asked to register as a resident or worker and be presented with a form
| Resident | Worker |
| ---------------------------------------------|---------------|
| ![Resident Application](https://my.catbo.at/marv/ZjhlM.png) | ![Worker Application](https://my.catbo.at/marv/YzkzN.png) |
Let's switch to an owner and see all our users
![All users view from the owner](https://i.heart.lolisports.com/marv/OTI0M.png)

From here, we can check out any unverified residents and see what they submitted on their form
![Owner reviewing a resident application](https://i.heart.lolisports.com/marv/Njk4M.png)
Hmm, perhaps Mr Blobman could have used a better image, so we'll reject them for now

Let's take a look at some tickets for a building (as an owner)
![Multi ticket view for owner](https://i.heart.lolisports.com/marv/MDkyM.png)

We can see tickets have several different modes that they can be in.
Any tickets requiring the user to take action will be brought to the top to bring attention to them.

### Ticket lifecycle

1.  A resident makes a ticket for a certain issue plaguing them
2.  An owner reviews the ticket and can reject or approve
    * if rejected, the ticket ends its life here
    * if approved, it will move on
3.  Once approved, a worker can take a ticket and begin working on it
4.  When the worker finishes, they will 'finish' a ticket and let the resident confirm the work is done
5.  A resident will have the option to reject or approve
    * if rejected, it will go back to the worker to fix whatever is still broken
    * if approved, it will move on
6.  An owner will have the final overview and be able to close the ticket finally!

### Ticket Info

Clicking on a ticket row will give the user more information about the ticket
![Single ticket view for any user](https://i.heart.lolisports.com/marv/ZTFmN.png)

Similar views can be seen in the worker and resident roles but will not be shown here.

Superintendo is the one platform to rule them all. Life is too complicated not to be orderly.

Check us out on superintendo.herokuapp.com

## Tech stack & other info

Built on Express, React, and PostgreSQL

**Creators:**

* [Vivian T.](https://github.com/vivtong/)
* [Manuel B.](https://github.com/marvinody/)
* [Constance K.](https://github.com/republicofkang/)
