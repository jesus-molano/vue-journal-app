export default {
  name: 'daybook',
  component: () => import('@/modules/daybook/layouts/DayBookLayout'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import('@/modules/daybook/views/NoEntrySelected')
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import('@/modules/daybook/views/EntryView')

    }
  ]
}
