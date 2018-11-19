import React, {Component} from 'react';
import {Button, Card, Feed, Icon, Image, Menu} from 'semantic-ui-react';
import auth from '../utils/auth';

class Auction extends Component {

  render() {
    const {id, price, start, end, remain, bidder} = this.props.data;
    return (
      <Card>
        <Image src='/macbook.jpeg'/>
        <Card.Content>
          <Card.Header>Macbook Pro</Card.Header>
          <Card.Meta>
            <span className='date'>100$ Start price</span>
          </Card.Meta>
          <Card.Header>200$</Card.Header>
          <Card.Header>5s left</Card.Header>
          <Card.Header><a>Hung</a> current winner</Card.Header>
          <Feed>
            <Feed.Event>
              <Feed.Label image='/user.png'/>
              <Feed.Content>
                <Feed.Date content='1 second ago'/>
                <Feed.Summary>
                  <a>Hung</a> just bid.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image='/user.png'/>
              <Feed.Content>
                <Feed.Date content='3 second ago'/>
                <Feed.Summary>
                  <a>Thanh</a> just bid.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image='/user.png'/>
              <Feed.Content>
                <Feed.Date content='4 second ago'/>
                <Feed.Summary>
                  <a>Quynh Anh</a> just bid.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
        <Card.Content extra>
          <Button fluid color='teal'>
            Bid
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default Auction;