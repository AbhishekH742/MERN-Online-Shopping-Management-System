import React from 'react'
import '../navbar/style.css'
function UserFeedback() {
   
  return (
    <div className='feedback p-6'>
      
        <form className='feed-form'>
            <h1 className='font-bold'>FeedBack Form</h1>
            <div class="mb-4">
                <label class="block text-white font-bold mb-2 text-lg" for="name">
                    Name
                </label>
                <input class="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
            </div>
            <div class="mb-4">
                <label class="block text-white text-lg font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
            </div>
           
            <div class="mb-4">
                <label class="block text-white text-lg font-bold mb-2" for="feedback">
                    Feedback
                </label>
                <textarea class="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="feedback" placeholder="Your feedback" rows='6'></textarea>
            </div>
            <div class="flex items-center justify-between">
                <button class="submit-btn">
                    Submit
                </button>
            </div>
        </form>
    </div>



  )
}

export default UserFeedback;
