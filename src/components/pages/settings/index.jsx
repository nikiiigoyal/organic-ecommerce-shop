import { BillingInfo } from "../checkout/BillingInfo"
import Navigation from "../Navigation"
import { AccountSettings } from "./AccountSettings"
import { ChangePassword } from "./ChangePassword"

export const Settings = () => {
    return(
        <>
        <div>
            <Navigation />
            <AccountSettings/>
            <BillingInfo />
            <ChangePassword />
        </div>
        </>
    )
}