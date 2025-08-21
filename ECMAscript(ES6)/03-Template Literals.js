
const massage = "hello \n";
console.log(massage + "How are you!");

// combine two string + best way.
const firstName = "Piysuh";
const lastName = "Garg Sir";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName}`);

// common in React interviews because they combine JS expressions + JSX.
function Greeting({ firstName }) {
  return <h1>{`Hello, ${firstName}!`}</h1>;
}

<Greeting firstName="Alice" />;
