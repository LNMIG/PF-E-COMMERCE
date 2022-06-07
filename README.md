# PROJECT DEVELOPED  BY A TEAM - done at soyHenry's Bootcamp

## PF-E-commerce
- This is our final project which allowed us to end soyHENRY's Bootcamp and say that we are FULL STACK DEVELOPERS.
- The project's goal was to make easer and faster selling high level electronics using an online platform and multiply sells.

## The e-commerce's home looks like this
![2022-06-06 (4)](https://user-images.githubusercontent.com/96741070/172272812-6003d223-8029-4137-837c-a1fba0520e35.png)

## You are viewing Details of a particular product
![2022-06-07 (3)](https://user-images.githubusercontent.com/96741070/172387720-ad075a9d-c9b1-4a48-87f0-1055b62d6450.png)

## You are viewing how to start your Session
![2022-06-07 (5)](https://user-images.githubusercontent.com/96741070/172388080-bc164cbf-9efe-4d5b-8925-f7843d2a9699.png)

## You are viewing user's home
![2022-06-07 (6)](https://user-images.githubusercontent.com/96741070/172388845-08e981f4-b726-4a80-b58c-e5fa4bc3d628.png)


## Development team
- https://github.com/LNMIG
- https://github.com/federicoacuna
- https://github.com/Jyankc
- https://github.com/mutriaxx
- https://github.com/emanuelsaucedoa
- https://github.com/Scerutti
- https://github.com/brayanobispo
- https://github.com/valenbenitez

## Project's Goals
- Build an E-commerce using **React, Redux, Node, Express and Sequelize - PostgreSQL**.
- Use and practice all concepts learned in the soyHENRY's Bootcamp.
- Learn better **coding practices**.
- Learn and practice **GIT's workflow**, **SCRUM** and project management tools like **TRELLO**.
- Use authentication processes and payment methods suchs as MercadoPago.

## Statement
The main idea was to create an application which would allow the user to:
- see all products the store offers
- see relevant information of each product
- add products to they wishlist
- buy products in simple steps
- add information about themselves: addresses, payment methods, name/lastname/phone number
- get newsletters from the store
- be in touch with any branch by using whatsapp

In the case of an admin it will allow to:
- see / add / update each product the store should offer
- see / add / delete categories for each product the store offers
- see / add / update bracnhes
- see / ban any existing admin or add new admins

## What I learned and my participation
- As part of the development team I learned:
  - a new way to organize and how to process information in the Backend, creating functionalities that until now I did not know were possible to do,
  - spread the code in several files to easy read it and find bugs or use the same path/route to GET different amount of information was mindblowing,
  - keep each State in the Redux's Store updated each time a request was performed so one can see changes in no time was something revealing,
  - use several files for actions and reducers in order to make it easier to follow the flow is something I will use from now on.
- I participated:
  - creating routes and their functionalities,
  - some complex site's functionalities that required to be envolved in the Frontend as well as in the Backend, for example:
    - any user can update information about Name, Lastname, Phone number and Birthdate: I developed the entire code for this action (Front and Back End),
    - an admin can See, Add or Delete any category the store / products require: I developed the entire code for this action (Front and Back End),
    - coded part of the seeder that allowed the e-commerce to show LATAM countries,
    - did QA / QC controls when Pull Request where performed by others. This was one of the most satisfying processes I performed. 

## What we achieved
### Any User can...
*	...log in using Google or its own email.
* ...log out in order to protect its account.
*	...add, see and remove any product from their wishlists.
*	...use the searchbar to find out a list of products while typing.
* ...get a confirmation email after bying products.
* ...get an email after the order was despatched.
*	...see history of orders.
*	...see details of any order including any product bought, quantities and date.
*	...subscribe or not to the newsletter.
*	...modify their personal data: name, lastname, phone number and birthdate.
*	...add new addresses for the products they buy.
*	...add reviews for those products they bought.
*	...see the wishlist.
*	...pay using MercadoPagos' platform.
*	...chat or find out information about branches via Whatsapp.

### Any admin can...
* ...see a list of orders and filter / sort / find any particular one.
* ...see / update products' data.
* ...see / update branches' data.
* ...see / add / delete categories.
* ...see / add / delete countries where the company has branches and/or sell products to.
*	...manage the stock.
*	...change any order's status and follow the life cicle.
*	...change the status of any user to admin or viceversa.
*	...ban any admin or user.
*	...notify any user via newsletter when a product is available.
* ...see the history of all the emails sent via newsletter.
*	...admin. emails sent (frecuency, templates, etc...) and which user or users are targeted.

### Any Guest can...
*	...see and move around the e-commerce's site.
*	...refresh the page or go away and come back and still have the cart with products already selected.
*	...edit or buy the same cart after loging in.
*	...create an account and enjoy user's benefits.

## How it works
* Clone this repository,
* Run **npm install** in folders Api and Client,
* Run **npm start** in both folders Api and Client,
* Open http://localhost:3000 in your browser if it does not pops up automatically
