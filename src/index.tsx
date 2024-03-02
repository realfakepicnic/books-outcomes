import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'

export const app = new Frog({
  basePath: '/api',
  // Supply a Hub API URL to enable frame verification.
  // hubApiUrl: 'https://api.hub.wevm.dev',
})

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          🔮 Gaze into the future of /books
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         Let's imagine some possible futures we can create together
        </div>
      </div>
    ),
    intents: [
      <Button action="/readers" value="readers">Readers</Button>,
      <Button action="/friends" value="friends">Friends</Button>,
      <Button action="/wowow" value="wowow">Wowow</Button>,
      <Button action="/you" value="you">You</Button>,
      <Button action="/" value="home">🏡</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

// Readers

app.frame('/readers', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          📚 Readers First
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          The /books channel is for people who genuinely love to read, and we all participate in making it what we want it to be
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/" value="home">←</Button>,
      <Button action="/readers-1" value="readers-1">→</Button>,
    ],
  })
})

// Readers: 1

app.frame('/readers-1', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          📚 Readers First
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         We welcome everyone, but we exist for people who love to read—people who feel a wrongness when they've gone too long without a book
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/readers" value="readers">←</Button>,
      <Button action="/readers-2" value="readers-2">→</Button>,
    ],
  })
})

// Readers: 2

app.frame('/readers-2', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          📚 Readers First
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         We all collaborate to make this a space where readers give and receive excellent recommendations, make friends with other readers, and connect over books and bookishness
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/readers-1" value="readers-1">←</Button>,
      <Button action="/" value="home">Choose Another</Button>,
    ],
  })
})

// Friends

app.frame('/friends', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          🤓 Bookish Friends
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          The most bookish people on Farcaster are here, and we learn and make friends through books
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/" value="home">←</Button>,
      <Button action="/friends-1" value="friends-1">→</Button>,
    ],
  })
})

// Friends: 1

app.frame('/friends-1', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          🤓 Bookish Friends
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Our conversations attract the most bookish people on Farcaster. We meet new, interesting people and connect with old friends through the books we love.
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/friends" value="friends">←</Button>,
      <Button action="/friends-2" value="friends-2">→</Button>,
    ],
  })
})

// Friends: 2

app.frame('/friends-2', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          🤓 Bookish Friends
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          We welcome newcomers, and we encourage all bookish people to show up regularly and share what they're loving and learning with us
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/friends-1" value="friends-1">←</Button>,
      <Button action="/" value="home">Choose Another</Button>,
    ],
  })
})

// Wowow

app.frame('/wowow', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          ✨ Book Magic
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Books don't need improvement, but we're always innovating to help us learn and connect over the books we read
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/" value="home">←</Button>,
      <Button action="/wowow-1" value="wowow-1">→</Button>,
    ],
  })
})

// Wowow: 1

app.frame('/wowow-1', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          ✨ Book Magic
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Connecting over books is hard. We read alone and at varying speeds. There are so many books that it’s rare to find someone else who’s read a book you love unless it’s popular. This is good for us.
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/wowow" value="wowow">←</Button>,
      <Button action="/wowow-2" value="wowow-2">→</Button>,
    ],
  })
})

// Wowow: 2

app.frame('/wowow-2', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          ✨ Book Magic
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          With the tech and community we have in crypto and on Farcaster, there's an enormous opportunity to innovate how we connect over the books we love
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/wowow-1" value="wowow-1">←</Button>,
      <Button action="/" value="home">Choose Another</Button>,
    ],
  })
})

// You

app.frame('/you', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          🔮 What else do you see?
        </div>
        
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Share your ideas in the comments, and help shape the future of the /books channel
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/" value="home">←</Button>,
      <Button action="/" value="home">Choose Another</Button>,
    ],
  })
})

export const GET = handle(app)
export const POST = handle(app)