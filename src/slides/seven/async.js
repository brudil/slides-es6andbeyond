import React from 'react';
import Radium from 'radium';
import Snippet from '../../Snippet';
import {bindShowHelper} from '../../utils';


const styles = {
  inlinePre: {
    display: 'inline'
  },
  slide: {
    textAlign: 'center'
  },
  snippet: {
    fontSize: '0.5em'
  }
};

const sourceSteps = [
`
function handle(req, reply) {
  UserModel.getByUsername(req.payload.username, function (err, data) {
    if (err) {
      reply(error: 'user not found!')
      return;
    }

    asyncHash(req.payload.password,  function(err, hashedPassword) {
      if (err) {
        reply({error: 'hashing error'})
      }

      if (hashedPassword === data.password) {
        reply.ok();
      } else {
        reply({error: 'wrong password'});
      }
    });
  })
}
`,
`
function handle(req) {
  UserModel.getByUsername(req.payload.username)
    .then(function(user) {
      asyncHash(req.payload.password)
        .then(function(hashedPassword) {
          if (hashedPassword === data.password) {
            reply.ok();
          } else {
            reply({error: 'wrong password'});
          }
        })
        .catch(function(error) {
          reply({error: 'hashing error'})
        })
    })
    .catch(function(error) {
      reply(error: 'user not found!')
    })
}
`,
`
async function handle(req) {
  const userInstance = await UserModel.getByUsername(req.payload.username);
  if (!userInstance) {
    return {error: 'user not found!'};
  }

  try {
    const hashedPassword = await asyncHash(req.payload.password);

    if (hashedPassword === userInstance) {
      return ok();
    } else {
      return {error: 'wrong password'};
    }
  } catch (e) {
    return {error: 'internal server error'};
  }
}
`

];


@Radium
export default class AsyncAwait extends React.Component {
  static actionCount = 2;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);
    return (
      <div style={[this.props.style, styles.slide]}>
        <h1>async/await</h1>
        <Snippet style={styles.snippet} source={show.withArray(sourceSteps, 0)} />
      </div>
    );
  }
}
