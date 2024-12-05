import { BillingInfo } from '../checkout/BillingInfo';

import { AccountSettings } from './AccountSettings';
import { ChangePassword } from './ChangePassword';

export const Settings = () => {
  return (
    <>
      <div>
        <AccountSettings />
        <div>
          <BillingInfo />
          <button className="bg-[#00B207] text-white py-2 px-3 rounded-full my-2">
            Save Changes
          </button>
        </div>
        <ChangePassword />
      </div>
    </>
  );
};
