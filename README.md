# Pricing Component for SquadVoice

[https://o1fut.csb.app/](https://o1fut.csb.app/)

codesandbox - [https://codesandbox.io/s/silly-yonath-o1fut?file=/src/index.js](https://codesandbox.io/s/silly-yonath-o1fut?file=/src/index.js)

github - [https://github.com/shelby-tarun/pricing](https://github.com/shelby-tarun/pricing)

## How to Install

```
$ git clone https://github.com/shelby-tarun/pricing.git

$ cd pricing

$ npm install

$ npm run build

$ sudo npm insall -g serve

$ serve -s build
```

Open [http://localhost:5000](http://localhost:5000) to view project in the browser.

## Business Logic

### Navigation

Navigation controls the pricing page according to the categories.

### Plans

Plans component is responsible for rendering all available plans.

It takes pricing details array and uses its child component plan.

#### Plan

A plan is the fundamental card component responsible for rendering individual plan card.

### Modal

A modal is a generalised component which can be further forked in order to meet use cases of modals.

#### Activation Modal

It uses modal component to input user information when `Start your Trial` or `Get in Touch` is clicked.
