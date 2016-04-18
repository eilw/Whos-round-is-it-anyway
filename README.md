# Whos-round-is-it-anyway

A new concept for sharing group expenses through a lightweight, mobile-friendly web-app. Designed and built in the Makerthon (3 days). 
#####User context

Many of my social networks revolve around recurring activities that cost money. Paying as a group can often be tiresome, and takes attention away from what matters. In addition, it might be hard to collect money after each event. 

What I am looking for is a tool that lets me split expenses, in a way that ensures that money is split evenly, recognises that it happens on a regular basis, ensures that noboby gets to far behind, while at the same time focuses on what really matters - whos turn is it to pay? 

#####Approach

Project was completed as part of Maker Academy's Makerthon, lasting over 3 days. We Test-Driven Development and pair programming throughout the entire process. We initially set up the project as a seperate Angular and Rails projects, but integrated Angular into the Rails project midway through, in order to more easily ensure that the two parts worked together.

#####How does it work?

A user can set up a new 'payment-group' by adding any of the users on the site. After the group has to pay for something, one of the users click: Whos round is it anyway?, selecting the person who owes the rest of the group the most (or randomnly if users are equal). The user can enter how much he/she paid, and this updates the group's accounts. The next time the group has to pay for something, the same process is repeated. This gives a certain playfulness to the process, while ensuring that expenses are shared fairly. 

#####Challenges and obstacles

I started the project with less than a week's experience of working with AngularJS. It was therefore quite timeconsuming to make even small features. We also found it quite complicated to make a user signup/login process, by trying to integrate Angular with Devise. It was also challenging to later integrate Angular with Rails.

#####What I learnt

Besides the obvious (more experience in AngularJS, APIs and Git workflow), the short timeframe involved meant that I in retrospect would not have spent as much time with user authentification, but rather focused on the application's features - which is where the app's value lies.

#####User stories

```
As a user,
So I can share costs with the right people,
I want to create a payment group where I can invite people.
```
```
As a user,
So I can easily find the right people,
I want to search for people to add to a group.
```
```
As a user,
So the groups knows whos turn it is,
I want to find out who's paying next.
```
```
As a user,
So that my costs are split evenly in the group,
I want to add how much I paid.
```
```
As a user,
So I feel reassured that only the right people have access to our group,
I want to be able to sign up and login securely.
```

#####Technologies used

- AngularJS via Node.js in the front
- Bootstrap for styling
- Ruby on Rails in the back
- RSpec, Jasmine, Karma, and Protractor for testing
- Git/GitHub/Waffle for version control

###### Team
Rufus Raghunath, Eirik Wiig, Arnold Manazano and Chris Terry.
