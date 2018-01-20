import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const FeedTransaction = (props) => {
  let isDebit = props.transaction.amount && (props.transaction.amount[0] === '-');

  return (
    <div>
      <ListItem disabled={true}
        leftAvatar={<Avatar src={props.transaction.payer.avatarUrl || '/images/no-image.gif'} />}
        primaryText={
          <span>
            {if (props.transaction.request === 'pending') {
                <span>
                  <span className='feed-item-user'><Link to={`/${props.transaction.payer.username}`}>{props.transaction.payer.fullName}</Link></span> sent <span className='feed-item-user'><Link to={`/${props.transaction.payee.username}`}>{props.transaction.payee.fullName}</Link></span> a payment request for ${+props.transaction.amount.replace(/-*/g,'')}. {props.transaction.private ? '(private)' : ''}
                </span>
              } else if (props.trans.request === 'declined') {
                <span>
                  <span className='feed-item-user'><Link to={`/${props.transaction.payer.username}`}>{props.transaction.payer.fullName}</Link></span> has declined <span className='feed-item-user'><Link to={`/${props.transaction.payee.username}`}>{props.transaction.payee.fullName}</Link></span>'s payment request {props.transaction.private ? '(private)' : ''}
                </span>
              } else {
                <span>
                  <span className='feed-item-user'><Link to={`/${props.transaction.payer.username}`}>{props.transaction.payer.fullName}</Link></span> paid <span className='feed-item-user'><Link to={`/${props.transaction.payee.username}`}>{props.transaction.payee.fullName}</Link></span> {props.transaction.private ? '(private)' : ''}
                </span>
              }
            }
            <p className='feed-item-note'>{props.transaction.note}</p>
          </span>
        }
        rightAvatar={
          <div className={isDebit ? 'feed-item-amount showDebit' : 'feed-item-amount'}>
            {props.transaction.amount}
          </div>
        }
        secondaryText={
         <div className='feed-item-timestamp'>{props.transaction.timestamp}</div>
        }
        secondaryTextLines={1}
      />
      {!props.isLastItem && <Divider />}
    </div>
  );
}

export default FeedTransaction;
