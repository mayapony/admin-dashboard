import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import React from 'react';
import './widget.scss';
import PropTypes from 'prop-types';

export const Widget = ({ type }) => {
  let data;
  const amount = (1000 * Math.random()).toFixed(2);
  const percentage = (100 * Math.random()).toFixed(2);

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: <PersonOutlineOutlinedIcon className="icon icon-user" />,
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'See all orders',
        icon: <ShoppingCartOutlinedIcon className="icon icon-order" />,
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earings',
        icon: <MonetizationOnOutlinedIcon className="icon icon-earning" />,
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCES',
        isMoney: true,
        link: 'View details',
        icon: (
          <AccountBalanceWalletOutlinedIcon className="icon icon-balance" />
        ),
      };
      break;
    default:
      throw new Error(`Widget props type error! your type is ${type}`);
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && '$'} {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

Widget.propTypes = {
  type: PropTypes.oneOf(['user', 'order', 'earning', 'balance']),
};
