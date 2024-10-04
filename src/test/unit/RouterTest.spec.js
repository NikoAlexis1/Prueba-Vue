import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

describe('Componente Home.vue', () => {
  test('Comprobar la existencia del componente Home', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    })
    router.push('/')
    await router.isReady()

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })
})

describe('Componente About.vue', () => {
  test('Comprobar la existencia del componente About', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/about',
          name: 'about',
          component: AboutView
        }
      ]
    })
    router.push('/about')
    await router.isReady()

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})
