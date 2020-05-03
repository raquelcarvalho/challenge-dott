import home from "./home";
//import notFound from './notFound'
import navigation from "./navigation";

const routes = [
  home("/:id", navigation, true, "Home 2"),
  home("/", navigation, true, "Home"),
  //	notFound('/*', navigation)
];

export default routes;
