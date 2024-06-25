<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

=======
// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Todo from "../views/Todo.vue";
import Post from "../views/Post.vue";
import Album from "../views/Album.vue";
import AlbumDetail from "../views/AlbumDetail.vue";
>>>>>>> c411fc6 (UAS Menambah Refactor dan Album)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
=======
      path: "/",
      name: "mainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "Todo",
          component: Todo,
        },
        {
          path: "/post",
          name: "Post",
          component: Post,
        },
        {
          path: "/album",
          name: "Album",
          component: Album,
        },
        {
          path: "photo/:photoId",
          name: "AlbumDetail",
          component: AlbumDetail,
        },
      ],
    },
  ],
});

export default router;
>>>>>>> c411fc6 (UAS Menambah Refactor dan Album)
