This is an counter project to demonstrate the importance of Redux Toolkit 
This clearly means that the two child components are sharing the state of the counter value using the Redux store. There is no need of passing the state up to the parent component and then down to the other child components. This is the power of Redux Toolkit.
We created a store using Redux Toolkit, added a reducer to the store, provided the store to the app, and used the store in components to share the state between them. We also learned how to use the useSelector and useDispatch hooks provided by Redux Toolkit to access the state of the store and dispatch actions to the store. I hope this article helped you understand the basics of Redux Toolkit and how to use it in your React applications.