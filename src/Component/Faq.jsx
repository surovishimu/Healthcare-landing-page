import React from 'react';

const Faq = () => {
    return (
        <div>
            <button className="btn btn-outline rounded-3xl mb-5 hover:bg-[#020043] w-24">Faq</button>
            <h1 className="text-[#020043] text-3xl font-semibold mb-10">Frequntly Asked Question</h1>

            <div className=''>
                <div className="collapse collapse-plus bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-[#020043]"> What are your office hours?</div>
                    <div className="collapse-content bg-base-100">
                        <p className='text-[#343268] text-sm'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-[#020043]"> How can I schedule an appointment?</div>
                    <div className="collapse-content bg-base-100">
                        <p className='text-[#343268] text-sm'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-[#020043]">Do you accept insurance?</div>
                    <div className="collapse-content bg-base-100">
                        <p className='text-[#343268] text-sm'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-[#020043]"> What should I bring to my appointment?</div>
                    <div className="collapse-content bg-base-100">
                        <p className='text-[#343268] text-sm'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-[#020043]"> Do you offer telemedicine appointments?</div>
                    <div className="collapse-content bg-base-100">
                        <p className='text-[#343268] text-sm'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Faq;