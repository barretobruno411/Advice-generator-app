# Welcome - Bruno here! 👨‍💻

This time, i solve other Frontend mentor challenge, we need to consume an api, work the data, set it in a state do update.

## Author

- Linkedin - [Bruno Barreto Duarte](https://www.linkedin.com/in/bruno-duarte-119a08b7/)

# React state tips! 🥸

I used a function to fetch data, verify if the id of advice is the same than before, and if it, i callback another time the function, else, its just put the new value to state.

i used a object state, with id and the advice, so we dont need to create more than 1 state.

example of the function:

function Dice(event) {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const Newadvice = data.slip;
        if(Newadvice.id === advice.id){
           return Dice();
        }
        return setAdvice(Newadvice);
      });
  }

# CSS tips! 💅

css tips is just to make the advice container position relative, and make the button, position absolute and give a negative value of bottom, use a half of heigth, its make you button splited in middle;

use a box-shadow with 0 0 and spread the value in pixels that you think enougth, i used 20px, this will distribute the shadow equaly.

Div with all content:

.advice {
  border-radius: 10px;
  position: relative;
  padding: 20px;
  min-height: 300px;
  max-height: 300px;
  min-width: 300px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--Dark-Grayish-Blue);
}

button css:

.advice button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -35px;
  background-color: var(--Neon-Green);
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
}

# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Useful resources

- [MDN Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) - You will leard how to do a fecth on an endpoint.
