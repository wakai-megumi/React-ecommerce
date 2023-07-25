import counterReducer, {
  CounterState,
  increment,
 
} from "./ProductListSlice"

describe("counter reducer", () => {
  const initialState: CounterState = {
    value: 3,
    status: "idle",
  }
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    })
  })

  it("should handle increment", () => {
    const actual = counterReducer(initialState, increment())
    expect(actual.value).toEqual(4)
  })

  
 
})
