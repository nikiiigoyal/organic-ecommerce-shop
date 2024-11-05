import { useEffect, useState } from "react"

export const SimplePopup = () => {
    const [isOpen, setIsOpen] = useState(true); // Start with false
    const [email, setEmail] = useState('')

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('homePopupSeen')

        if (!hasSeenPopup) {
            // Show popup after 1 second
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
    
            return () => clearTimeout(timer);
        }
    }, []);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email submitted", email);
        localStorage.setItem('homePopupSeen', 'true');
        setIsOpen(false);
    }

    return (
        // Overlay that covers the entire screen
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            {/* Popup container */}
            <div className="bg-white rounded-lg p-6 max-w-3xl mx-4 relative">
                {/* Content container */}
                <div className="flex flex-col md:flex-row font-poppins gap-6">
                    {/* Image section */}
                    <div className="md:w-1/2">
                        <img 
                            src="/images/popup.png" 
                            alt="Newsletter popup"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Content section */}
                    <div className="md:w-1/2 flex flex-col space-y-4">
                        {/* Close button */}
                        <button 
                            onClick={() => {
                                setIsOpen(false);
                                localStorage.setItem('homePopupSeen', 'true');
                            }} 
                            className="absolute top-6 right-6 bg-black"
                        >
                            <img src="src/components/images/closeicon.svg" alt="Close" />
                        </button>
 
                        <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
                        
                        <p className="text-[#999999] text-sm">
                            Subscribe to our newsletter and Save your <span className="text-[#fb8a00]">20% money</span> with discount code today.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex gap-2">
                                <input 
                                    placeholder="Enter your email" 
                                    type="email"
                                    className="flex-1 text-[#808080] rounded-md text-sm p-4 border border-[#E6E6E6] border-r-0 w-full focus:outline-none"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button 
                                    type="submit"
                                    className="bg-[#00B207] text-white rounded-full px-6 py-2 hover:bg-[#009706]"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>

                        {/* Checkbox */}
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="checkbox" 
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        localStorage.setItem('homePopupSeen', 'true');
                                    }
                                }}
                            />
                            <span className="text-sm text-[#666666] text-center p-4">Do not show this window</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}