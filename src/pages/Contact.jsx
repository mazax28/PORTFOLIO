import React from 'react'
function Contact() {
  return (
<div className="hero  min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-4xl">
        <div className="card card-border bg-base-100 w-full mt-4 p-4">
            <div className="card-body grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className='grid grid-cols-1 gap-6'>
                    <h2 className="card-title text-3xl gradient-text">Lets Work Together!</h2>
                    <div className='grid grid-cols-2 gap-4'>
                    <input type="text" placeholder="Name" className="input input-info" />
                    <input type="text" placeholder="Lastname" className="input input-info" />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                    <input type="text" placeholder="Email address" className="input input-info" />
                    <input type="text" placeholder="Phone Number" className="input input-info" />
                    </div>
                    <textarea type="text" placeholder="Type your message here" className="textarea textarea-info w-full"></textarea>
                    <button className="btn btn-soft btn-info">Send Message</button>


                    


                </div>
                <div className='flex flex-col justify-center items-start  gap-4'>
                   <div className='flex gap-4 items-center text-left'>
                   <i  class="ri-mail-line text-4xl text-[#00bafe]"></i>

                        <div>
                            <p className='text-gray-400'>Email</p>
                            <p>marcoskrause2002@gmail.com</p>
                        </div>
                   </div>
                   <div className='flex gap-4 items-center text-left'>
                   <i class="ri-phone-fill text-4xl  text-[#00bafe]"></i>
                        <div >
                            <p className='text-gray-400'>Phone Number</p>
                            <p>(+595) 986 746 209</p>
                        </div>
                   </div>

                   <div className='flex gap-4 items-center text-left'>
                   <i class="ri-map-pin-2-line text-4xl  text-[#00bafe]"></i>
                        <div>
                            <p className='text-gray-400'>Location</p>
                            <p>Asuncion,Paraguay</p>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
      
      
    </div>
    
  </div>
</div>
  )
}

export default Contact
