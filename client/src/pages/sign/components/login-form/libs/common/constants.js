import { UserPayloadKey } from 'packages/user/enums/enums';

const DEFAULT_LOGIN_PAYLOAD = {
  [UserPayloadKey.EMAIL]: '',
  [UserPayloadKey.PASSWORD]: ''
};

export { DEFAULT_LOGIN_PAYLOAD };
