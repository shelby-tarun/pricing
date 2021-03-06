# Pricing Component for SquadVoice

codesandbox - [https://codesandbox.io/s/cocky-carson-ez7oy](https://codesandbox.io/s/cocky-carson-ez7oy)

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

### Constant.js

It contains all the static data.

## Project Structure

```
\pricing\src\public
│   index.js
|   index.scss
|   serviceWorker.js
|   setupTests.js
|   README.md
├───components
├─────────Modal
|             index.jsx
|             Modal.scss
├───container
├─────────App
│             App.scss
│             App.test.js
│             index.jsx
├─────────Navigation
|             index.jsx
|             Navigation.scss
├─────────────Plans
│                 index.jsx
│                 Plans.scss
├─────────────────Plan
│                     index.jsx
│                     Plan.scss
├─────────────────────ActivationModal
|                         ActivationModal.scss
|                         index.jsx
├───utils
|       constants.js
```
