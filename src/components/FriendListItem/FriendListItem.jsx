import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.profileCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? css.statusOnline : css.statusOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
