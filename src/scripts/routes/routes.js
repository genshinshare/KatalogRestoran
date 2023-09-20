import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorit from '../views/pages/favorit';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorit': Favorit,
};

export default routes;
