import { applyMiddleware } from "redux";

let middleware = [];

//DEVELOPMENT ONLY
if (process.env.NODE_ENV === `development`) {

}

export default applyMiddleware(...middleware);