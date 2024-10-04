import { mount } from '@vue/test-utils'
import Child from '@/components/Child.vue'

describe('TodoApp.vue', () => {
  test('Deberá enviar un texto hacia el componente Parent', async () => {
    const wrapper = mount(Child)

    await wrapper.find('[data-text="nuevo-texto"]').setValue('Texto enviado desde test')
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('enviar')[0]).toEqual(['Texto enviado desde test'])
  })
})
