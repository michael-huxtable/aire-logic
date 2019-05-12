import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Index from '~/pages/bugs/index.vue'

const localVue = createLocalVue()
localVue.config.productionTip = false
localVue.use(Vuex)
localVue.use(Vuetify)

describe('bugs/index', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(Index, {
      computed: {
        bugs: () => [
          {
            id: 1,
            title: 'my bug',
            description: 'test',
            dateCreated: new Date(2019, 0, 1)
          },
          {
            id: 2,
            title: 'not my bug',
            description: 'test #2',
            dateCreated: new Date(2019, 1, 1)
          }
        ]
      },
      stubs: { NuxtLink: RouterLinkStub },
      localVue
    })
  })

  it('renders the bug titles', () => {
    const titles = wrapper
      .findAll('.v-list__tile__title')
      .wrappers.map(i => i.text().trim())

    const expected = ['my bug', 'not my bug']
    expect(titles).toEqual(expected)
  })

  it('renders the bug dates', () => {
    const dates = wrapper
      .findAll('.v-list__tile__sub-title')
      .wrappers.map(i => i.text().trim())

    // TODO: Should be a more sensible date format
    const expected = [
      'Tue Jan 01 2019 00:00:00 GMT+0000 (Greenwich Mean Time)',
      'Fri Feb 01 2019 00:00:00 GMT+0000 (Greenwich Mean Time)'
    ]
    expect(dates).toEqual(expected)
  })

  it('renders the view bug links', () => {
    const links = wrapper
      .findAll(RouterLinkStub)
      .wrappers.map(i => i.props('to'))
    const expected = ['/bugs/1', '/bugs/2']
    expect(links).toEqual(expected)
  })
})
