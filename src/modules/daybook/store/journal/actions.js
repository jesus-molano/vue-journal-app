import journalApi from '@/api/journalApi'

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')
  if (!data) {
    commit('setEntries', [])
    return
  }
  const entries = []
  for (const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }
  commit('setEntries', entries)
}
export const updateEntry = async ({ commit }, entry) => {
  const { date, text, picture } = entry
  const dataToSave = { date, text, picture }
  await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
  commit('updateEntry', { ...entry })
}
export const createEntry = async ({ commit }, entry) => {
  const { date, text, picture } = entry
  const dataToSave = { date, text, picture }
  const { data } = await journalApi.post('/entries.json', dataToSave)
  dataToSave.id = data.name
  commit('addEntry', dataToSave)
  return dataToSave.id
}
export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`)
  commit('deleteEntry', id)
  return id
}
