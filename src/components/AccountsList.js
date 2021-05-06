import React, { Component } from 'react';
import { StyledList } from '../styled/styledList';
import * as api from '../utils/api';
import AccountsCard from './AccountsCard';
import { Ring } from 'react-awesome-spinners';

export default class AccountsList extends Component {
  state = {
    accounts: [],
    isLoading: true,
    ascending: true,
    sort_by: 'account_id',
    submitted: false
  };
  componentDidMount() {
    api.getAccounts().then((accounts) => {
      this.setState({ accounts, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, ascending, submitted } = this.state;
    if (
      prevState.sort_by !== sort_by ||
      prevState.ascending !== ascending ||
      submitted === true
    ) {
      let order = ascending ? 'asc' : 'desc';

      api.getAccounts(sort_by, order).then((accounts) => {
        this.setState({ accounts, isLoading: false, submitted: false });
      });
    }
  }

  sortAccounts = (sort_by) => {
    const { ascending } = this.state;
    this.setState({
      isLoading: true,
      sort_by,
      ascending: !ascending
    });
  };

  render() {
    const { accounts, isLoading, ascending, sort_by } = this.state;
    let arrow = ascending ? <p>⬇️</p> : <p>⬆️</p>;

    if (isLoading)
      return (
        <div className="ring">
          <Ring />
        </div>
      );
    return (
      <StyledList>
        <h1>Accounts</h1>
        <h3>Sort by</h3>
        <div className="btnWrapper">
          <button
            className="sortBtn"
            onClick={() => {
              this.sortAccounts('account_id');
            }}
          >
            Account ID {sort_by === 'account_id' && <span>{arrow}</span>}
          </button>
          <button
            className="sortBtn"
            onClick={() => {
              this.sortAccounts('surname');
            }}
          >
            Surname {sort_by === 'surname' && <span>{arrow}</span>}
          </button>
        </div>
        <ul>
          {accounts.map(({ account_id, email, first_name, surname }) => {
            return (
              <AccountsCard
                account_id={account_id}
                email={email}
                first_name={first_name}
                surname={surname}
                key={account_id}
              />
            );
          })}
        </ul>
      </StyledList>
    );
  }
}
