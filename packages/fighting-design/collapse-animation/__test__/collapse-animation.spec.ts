import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCollapseAnimation } from '../index'

describe('CollapseAnimation', () => {
  test('class', () => {
    const wrapper = mount(FCollapseAnimation)
    expect(wrapper.classes()).toContain('f-collapse-animation')
  })
})
