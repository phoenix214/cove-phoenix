import React, { Component } from 'react';
import { string } from 'prop-types';

import AccountCard from './accountCard';
import s from './accountNav.scss';

const navigation = [
  { name: 'Summary', route: '/account/summary' },
  { name: 'Account/Alarm Info', route: '/account/info' },
  { name: 'Subscriptions', route: '/account/subscriptions' },
  { name: 'Payment Methods', route: '/account/payment-methods' },
  { name: 'Addresses', route: '/account/addresses' },
  { name: 'Order History', route: '/account/order-history' },
  { name: 'Rewards', route: '/account/rewards' },
];

export default class AccountNav extends Component {
  static propTypes = {
    pathname: string,
  };

  static defaultProps = {
    pathname: '',
  }

  render() {
    return (
      <div>
        <div className="accountNav">
          { navigation.map(item => (
            <a
              href={item.route}
              className={`navBtn
              ${this.props.pathname === item.route ? 'active' : ''}`}
              key={item.name}
            >
              <AccountCard style={{ padding: '10px', overflow: 'hidden' }}>
                <div className="navBtn__inner">
                  {item.name}
                </div>
              </AccountCard>
            </a>
          ))}
        </div>
        <style jsx>{s}</style>
      </div>
    );
  }
}
