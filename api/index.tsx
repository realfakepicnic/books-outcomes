import { Button, Frog, TextInput } from 'frog'
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
         "What brings a fresh future into being is citizens who are willing to self-organize."
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
        —Peter Block, Community
        </div>
      </div>
    ),
    intents: [
      <Button action="/start" value="start">Start</Button>,
    ],
  })
})

// Start

app.frame('/start', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: 'https://raw.githubusercontent.com/realfakepicnic/books-outcomes/main/images/books-alone.jpg',
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/" value="home">←</Button>,
      <Button action="/start-1" value="start-1">→</Button>,
      <Button action="/choose" value="choose">Skip</Button>,
    ],
  })
})

// Start: 1

app.frame('/start-1', (c) => {
  const { buttonValue, inputText, status } = c
  const outcome = inputText || buttonValue
  return c.res({
    image: 'https://raw.githubusercontent.com/realfakepicnic/books-outcomes/main/images/books-together-2.jpg',
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/start" value="start">←</Button>,
      <Button action="/start-2" value="start-2">→</Button>,
      <Button action="/choose" value="choose">Skip</Button>,
    ],
  })
})

// Start: 2

app.frame('/start-2', (c) => {
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         I've been thinking a lot about the future of /books, and what it's going to take to make it a place we'd all like to spend more time in.
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/start-1" value="start-1">←</Button>,
      <Button action="/start-3" value="start-3">→</Button>,
      <Button action="/choose" value="choose">Skip</Button>,
    ],
  })
})

// Start: 3

app.frame('/start-3', (c) => {
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         A lot of you have chimed in with some really great ideas, and I've been thinking about what those ideas represent—a bigger picture vision for the future of this channel.
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/start-2" value="start-2">←</Button>,
      <Button action="/start-4" value="start-4">→</Button>,
      <Button action="/choose" value="choose">Skip</Button>,
    ],
  })
})

// Start: 4

app.frame('/start-4', (c) => {
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         I'd like to put these ideas in front of you. I want to see if you agree/disagree, or if there's anything you'd love to see that we haven't talked about yet.
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
         Are you ready?
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/start-3" value="start-3">←</Button>,
      <Button action="/choose" value="choose">→</Button>,
      <Button action="/choose" value="choose">Yes</Button>,
    ],
  })
})

// Choose

app.frame('/choose', (c) => {
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
         Choose a possible future below 👇
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/readers" value="readers">Readers</Button>,
      <Button action="/friends" value="friends">Friends</Button>,
      <Button action="/wowow" value="wowow">Wowow</Button>,
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
      <Button action="/choose" value="choose">Choose</Button>,
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         That doesn't mean we're book snobs—we welcome everyone, and all our beloved books.
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
         But we exist for people who love reading, and who feel a wrongness when we've gone too long without a book in our hands. 
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/readers" value="readers">←</Button>,
      <Button action="/readers-2" value="readers-2">→</Button>,
      <Button action="/choose" value="choose">Choose</Button>,
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         To make this possible, we share our gifts and uniqueness for the benefit of all.
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
         We want a channel where readers give and receive excellent recommendations, make friends with other readers, and connect over books and bookishness.
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/readers-1" value="readers-1">←</Button>,
      <Button action="/choose" value="choose">→</Button>,
      <Button action="/choose" value="choose">Choose</Button>,
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
      <Button action="/choose" value="choose">Choose</Button>,
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          We want our conversations to attract the readers of Farcaster, and we want them to become regulars.
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
          We want to recognize each other's faces, rather than see a channel full of people we don't know who aren't interested in being a part of this.
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/friends" value="friends">←</Button>,
      <Button action="/friends-2" value="friends-2">→</Button>,
      <Button action="/choose" value="choose">Choose</Button>,
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          We welcome newcomers, and we encourage all bookish people to show up and share what they're loving & learning with us. 
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
          That's how we make friends with Farcaster readers—by becoming regulars & sharing about the books we love.
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/friends-1" value="friends-1">←</Button>,
      <Button action="/choose" value="choose">→</Button>,
      <Button action="/choose" value="choose">Choose</Button>,
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
      <Button action="/choose" value="choose">Choose</Button>,
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Connecting over books is hard. We read alone and at varying speeds. There are so many books—it’s rare to find someone else who’s read a book you love unless it’s popular.
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
          This is good for us.
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/wowow" value="wowow">←</Button>,
      <Button action="/wowow-2" value="wowow-2">→</Button>,
      <Button action="/choose" value="choose">Choose</Button>,
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          With the tech and community we have in crypto and on Farcaster, there's an enormous opportunity to innovate how we connect over the books we love.
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/wowow-1" value="wowow-1">←</Button>,
      <Button action="/wowow-3" value="wowow-3">→</Button>,
      <Button action="/choose" value="choose">Choose</Button>,
    ],
  })
})

// Wowow: 3

app.frame('/wowow-3', (c) => {
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
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          📚 Readers First: We love to read
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
          🤓 Bookish Friends: We hang out often
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
          ✨ Book Magic: We're always innovating
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/wowow-2" value="wowow-2">←</Button>,
      <Button action="/you" value="you">→</Button>,
      <Button action="/choose" value="choose">Choose</Button>,
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
          Share your ideas in the comments, and help shape the future of the /books channel 🙏
        </div>
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/wowow-3" value="wowow-3">←</Button>,
      <Button action="/thanks" value="thanks">→</Button>,
      <Button action="/thanks" value="thanks">Done</Button>,
    ],
  })
})

// Thank you

app.frame('/thanks', (c) => {
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
          🤩 Thanks for being a part of the future of /books!
        </div>
        
      </div>
    ),
    intents: [
      <Button action="/" value="home">🏡</Button>,
      <Button action="/you" value="you">←</Button>,
      <Button action="/thanks" value="thanks">→</Button>,
      <Button action="/thanks" value="thanks">Done</Button>,
    ],
  })
})

export const GET = handle(app)
export const POST = handle(app)