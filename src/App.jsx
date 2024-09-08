import 'modern-normalize/modern-normalize.css';

import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './userData.json';
import friendsData from './friendsData.json';
import transactions from './transactions.json';

function App() {
  return (
    <>
      <br />
      <br />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <br />
      <br />
      <FriendList friends={friendsData} />
      <br />
      <br />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
