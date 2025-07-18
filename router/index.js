import { createRouter as createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'

// Import components
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import RegisterView from '../views/RegisterView.vue'
import RecipesView from '../views/RecipesView.vue'
import RecipeDetailsView from '../views/RecipeDetailsView.vue'
import CategoryView from '../views/CategoryView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import CollectionCartView from '../views/CollectionCartView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import CreateCollectionView from '../views/CreateCollectionView.vue'
import SearchResultView from '../views/SearchResultView.vue'

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */
const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        requiresAuth: false
      }
    },
    {
   path: "/recipes",
   name: "recipes",
   component: RecipesView,
   meta: {
    requiresAuth: true
  }
    },

  {
  path: "/recipes/:recipeId",
  name: "recipeDetails",
  component: RecipeDetailsView,
  meta: {
    requiresAuth: true
  }
  },
{
  path: "/category/:categoryId",
  name: "category",
  component: CategoryView,
  meta: {
    requiresAuth: true
  }
  }, 
  {
  path: "/about",
  name: "about",
  component: AboutView,
  meta: {
    requiresAuth: true
  }
  },
  
  {
  path: "/contact",
  name: "contact",
  component: ContactView,
  meta: {
    requiresAuth: true
  }
  },

  {
  path: "/collections",
  name: "collectionCart",
  component: CollectionCartView,
  meta: {
    requiresAuth: true
  }
},

{
path: "/createCollection",
name: "CreateCollection",
component: CreateCollectionView,
meta: {
  requiresAuth: true
}
},

{
  path: "/searchResults/:nameLike",
  name: "SearchResults",
  component: SearchResultView,
  meta: {
    requiresAuth: true
  } 
},

{
path:"/userProfile",
name: "userProfile",
component: UserProfileView,
meta: {
  requiresAuth: true
}
}

  ];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to) => {

  // Get the Vuex store
  const store = useStore();

  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    return {name: "login"};
  }
  // Otherwise, do nothing and they'll go to their next destination
});

export default router;
