import expect from 'expect'
import { fromJS } from 'immutable'
import configureMockStore from 'redux-mock-store'
import * as counterActions from 'universal/actions/counter'
import * as types from 'universal/constants/ActionTypes'
import promiseMiddleware from 'universal/lib/promiseMiddleware'

const middlewares = [ promiseMiddleware ]
const mockStore = configureMockStore(middlewares)

describe('actions: counter', () => {

	it('should incrementIfOdd with Odd', () => {
		const data = fromJS({
			clicked: 1
		})
		const fn = counterActions.incrementIfOdd()
		expect(fn).toBeA('function')
		const dispatch = expect.createSpy()
		const getState = () => ({ counter: data })
		fn(dispatch, getState)
		expect(dispatch).toHaveBeenCalledWith({ type: types.INCREMENT_COUNTER })
	})

	it('should incrementIfOdd with Even', () => {
		const data = fromJS({
			clicked: 2
		})
		const fn = counterActions.incrementIfOdd()
		expect(fn).toBeA('function')
		const dispatch = expect.createSpy()
		const getState = () => ({ counter: data })
		fn(dispatch, getState)
		expect(dispatch).toNotHaveBeenCalled()
	})

	it('should incrementAsync', (done) => {
		const expectedActions = [
			{ type: types.INCREMENT_COUNTER }
		]
		const store = mockStore({}, expectedActions, done)
		store.dispatch(counterActions.incrementAsync())
	})

})
