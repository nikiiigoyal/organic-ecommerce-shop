// import { ProductQuickModal } from './../shopPage/./ProductQuickModal'
import { useState } from "react"
import { TabNavigation } from "./TabNavigation"
import { DescriptionsTab } from "./DescriptionsTab"
import { AdditionalInfo } from "./AdditionalInfo"


export const ProductDetails = () => {
    const [activeTab , setActiveTab] = useState('Descriptions')
    return (
        <>
        <div>
            {/* <ProductQuickModal /> */}
            <TabNavigation activeTab={activeTab} setActiveTAb={setActiveTab} />
      {activeTab === 'Descriptions' && <DescriptionsTab />}
      {activeTab === 'Additional information' && <AdditionalInfo />}
        </div>
        </>
    )
}