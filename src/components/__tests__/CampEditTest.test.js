import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import { describe, expect, it } from 'vitest';
import TableCamps from '../campament/TableCamps.vue';

describe('TableCamps', () => {
 it('renders the component', () => {
    const pinia = createPinia();

    const wrapper = mount(TableCamps, {
      global: {
        plugins: [pinia],
      },
    });

    // Verifica que el componente se renderiza correctamente
    expect(wrapper.html()).toContain('Campamentos');
 });

});