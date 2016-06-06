#React / RequireJS / Knockout / TypeScript
A small client side calculator

- Calculator code taken from [here](https://github.com/SMH110/My-Calculator)
- React JS for the "view engine"
- Require JS for the module management / DI (should probably use SystemJS)
- Knockout JS for the eventing / observable (should probably use RxJS)
- TypeScript for TSX compilation and type checking

I did make this without Knockout at first but what I found was that if I didn't move all the "business
logic" of the calculator into the React component then it would become a mess of having to forceUpdate each
time the user pressed a button. I would rather use Knockout so that I have a nice observable to subscribe to.
This way the React component is kept as simple as possible and the business logic is easier to test.

One thing I really like about this approach is that all of the "business logic" lives in a DOM agnostic module
which can be easily tested and the bindings to that module are strongly typed so the TypeScript compiler does
all those checks at compile time so there is basically zero requirement to unit test it.