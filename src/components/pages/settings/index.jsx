import { BillingInfo } from "../checkout/BillingInfo"
import Navigation from "../Navigation"
import { AccountSettings } from "./AccountSettings"

export const Settings = () => {
    return(
        <>
        <div>
            <Navigation />
            <AccountSettings/>
            <BillingInfo />
        </div>
        </>
    )
}