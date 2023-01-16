# This repository was created for learning React in `The Rolling Scopes School`.

---

## [Deploy link](https://justkwer.github.io/learn-react/)

## My tasks:

- ### `Components`:

    - #### 1. Create a separate branch for this task.

    - #### 2. Use CRA with template --typescript.

    - #### 3. Set up eslint and prettier so that the project would not build if having errors. Use [configs](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md) [RU]

    - #### 4. Add React-Router version 6. Add header which shows the current page. Also add pages “About Us”, “404”. If user will input unknown route into url – application should redirect to “404”.

    - #### 5. Draw the following on the main page:

      - #### Search Bar: Input value should be saved to LocalStorage during component’s unmount. During the initialization pick the value from LocalStorage and show it.

      - #### Cards: The more details are on the card – the better.

      - #### In the situation when the access to life cycles of a component is needed or there is a necessity of state – use class components. Using hooks is forbidden at this stage.**

    - #### 6. Add tests for components. Mock LocalStorage. Add test for one card, as well as tests for the list of all cards. You can use either React Testing Library or Enzyme, but only one of them. Preferr React Testing Library.

      - #### All logical parts should be set into separate components.
  
---

- ### `Forms`:

    - #### 1. Create a separate branch for this task.

    - #### 2. Create a separate route for forms.

    - #### 3. Form should be implemented using uncontrolled components

    - #### 4. Add functionality to your app:

      - #### Collect information through a form

      - #### You can collect any type of information, but form has to include at least one control of the following types:

            text input
            date input
            dropdown/select
            checkbox
            switcher
            file upload (image)
      - #### After the Submit button is clicked, all data from the form has to be displayed as Card in the cards list below the form. The confirmation message (with information that the data has been saved) should be displayed, after that form has to be cleared.
      - #### The quantity of cards should equal the number of form submissions (if the user filled in and submitted the form five times, then five cards have to be displayed under the form).
      - #### Validation should happen after the **Submit** button was clicked. In case some field was filled incorrectly, then error messages should be displayed under it. The card mustn’t be created until the user fixes all errors.
      - #### After changing the value of erroneous input, the reset should happen only for this particular field, but not for the others.
      - #### Submit button should be disabled at initialization (before the first typing), and until the user fixes all errors.
    - #### 5. Add tests.
    - #### 6. All logical parts should be extracted into components.
---

- ### `API`:

    - #### 1. Create a separate branch for this task.

    - #### 2. Choose an API. There are several recommended APIs. But you may choose any other API that you prefer if it supports search, pagination and sorting.

       - #### The API should support searching, pagination and sorting. Although you don’t need it at this stage, but there’s a good chance it might come in handy later.

    - #### 3. Rewrite the search page, and split it into 2 logical parts:

        - #### Search bar. Enter text -> Press Enter -> Send the request to API with the searching parameters -> the list of results is updating

        - #### The result list of searching: display the data that the API query returned using Cards.

    - #### 4. A customer decided to change requirement. Now every element of the list has to show a small piece of information. After the click on the element we have to show all the available information about the element in the modal window. The modal window should be closed by clicking on the cross button in the upper right corner or by clicking on a page outside the modal window. When we open a modal window the page should be covered with overlay.
    - #### 5. Creat a download indicator ( a component with animation, or at least with the string - ‘Downloading’). You should place this indicator with your own sense of beauty.
     
---

- ### `Hooks`:

    - #### 1. Create a separate branch for this task.

    - #### 2. Retain the functionality and rewrite the main page with the hooks. All tests should be working in the end

    - #### 3. Retain the functionality and rewrite the form with React Hook Form. All tests should be working in the end

---
