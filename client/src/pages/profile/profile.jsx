import { Image } from 'libs/components/image/image';
import { Input } from 'libs/components/input/input';
import { IconName,ImageSize } from 'libs/enums/enums';
import { useAppForm, useSelector } from 'libs/hooks/hooks';
import { DEFAULT_USER_AVATAR } from 'packages/user/constants/constants';

import styles from './styles.module.scss';

const Profile = () => {
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));

  const { control } = useAppForm({
    defaultValues: {
      username: user.username,
      email: user.email
    }
  });

  return (
    <form name="profile" className={styles.profile}>
      <Image
        alt="profile avatar"
        isCentered
        src={user.image?.link ?? DEFAULT_USER_AVATAR}
        size={ImageSize.MEDIUM}
        isCircular
      />
      <fieldset disabled className={styles.fieldset}>
        <Input
          iconName={IconName.USER}
          placeholder="Username"
          name="username"
          value={user.username}
          control={control}
        />
        <Input
          iconName={IconName.AT}
          placeholder="Email"
          name="email"
          type="email"
          value={user.email}
          control={control}
        />
      </fieldset>
    </form>
  );
};

export { Profile };
