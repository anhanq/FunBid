import React, { Component } from 'react';
import { Button, Icon, Image } from 'semantic-ui-react';

class Stream extends Component {
  render () {
    return (
      <div>
        <Image src={'stream.png'} style={{width: 400, height: 400}}/>
        <div style={{textAlign: 'center', marginTop: '5%'}}>
          <Button icon labelPosition='left'>
            <Icon name='left arrow'/>
            Prev
          </Button>
          <Button icon labelPosition='right'>
            Next
            <Icon name='right arrow'/>
          </Button>
        </div>
      </div>
    );
  }
}

export default Stream;