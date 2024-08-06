

export interface IElelment {
  el: IUser;
}

const UserCard = ({ el }: IElelment) => {
  return (
    <div>
      {el.name}
      {el.name}
    </div>
  );
};

export default UserCard;
