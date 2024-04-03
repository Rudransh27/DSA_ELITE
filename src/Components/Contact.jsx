import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Connect With Us</h1>
            <form>
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder='Enter You Name'/>
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" required placeholder='abc@gmail.com'/>
                </div>
                <div>
                    <label >Message</label>
                    <input type="text" required placeholder='Tell Us About Yourself...'/>
                </div>
                    
                
                <button type='submit'>Post</button>
            </form>
        </main>
    </div>
  )
}

export default Contact