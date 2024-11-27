import { BillingInfo } from "../checkout/BillingInfo"

import { AccountSettings } from "./AccountSettings"
import { ChangePassword } from "./ChangePassword"

export const Settings = () => {
    return(
        <>
        <div>
           
            <AccountSettings/>
            <BillingInfo />
            <ChangePassword />
        </div>
        </>
    )
}