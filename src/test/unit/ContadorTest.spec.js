import { shallowMount, mount } from '@vue/test-utils'
import store from '@/store'
import ContadorView from '@/components/ContadorView.vue'

describe('Componente Contador.vue', () => {
  test('Debería recibir el valor inicial del contador', () => {
    const wrapper = shallowMount(ContadorView, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.find('.contador').text()).toBe('Contador: 0')
  })
})

describe('Componente Contador.vue', () => {
  test('Comprobar funcionalidad del boton incrementar', async () => {
    const wrapper = shallowMount(ContadorView, {
      global: {
        plugins: [store]
      }
    })
    const botonIncrementar = wrapper.find('.incrementar')
    await botonIncrementar.trigger('click')
    const valor = wrapper.find('.contador').text()
    expect(valor).toBe('Contador: 1')
  })
})

describe('Componente Contador.vue', () => {
  test('Comprobar funcionalidad del boton disminuir', async () => {
    const wrapper = shallowMount(ContadorView, {
      global: {
        plugins: [store]
      }
    })
    const botonDisminuir = wrapper.find('.disminuir')
    await botonDisminuir.trigger('click')
    const valor = wrapper.find('.contador').text()
    expect(valor).toBe('Contador: 0')
  })
})
