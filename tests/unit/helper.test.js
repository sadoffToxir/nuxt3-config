import {toUpperFirstLetter} from '../../helpers/index.js'

describe('toUpperFirstLetter', () => {
  it('works', () => {
    const beforeFunc = 'word'
    const afterFunc = 'Word'
    const funcGenerated = toUpperFirstLetter(beforeFunc)

    expect(funcGenerated).toBe(afterFunc)
  })
})