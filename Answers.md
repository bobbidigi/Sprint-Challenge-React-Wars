# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

Speeding up DOM manipulations by doing it in memory through the virtual DOM

1. What does it mean to think in react?

Thinking about the apps as you build them.

1. Describe state.

This is data maintained inside a component. It is local or owned by that specific component. The component itself will update the state using the setState function or setter funtion from a hook.

1. Describe props.

Data passed in from a parent component. props are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

https://medium.com/trabe/react-useeffect-hook-44d8aa7cccd0

intentional or causes of ran by a function. The useEffect hook provides for a dependancy array to sync that function with the State the will be changing.
