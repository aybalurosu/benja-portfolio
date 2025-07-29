
import "./../css/contact.css";

export default function Contact() {

  return (
    <div id="contact" className="min-h-screen relative z-10 flex flex-col items-center justify-center">
       <div className="contact-box rounded-xl p-10 flex flex-col items-center justify-center gap-6">
           <div className="w-[60%] text-center">
                <div className="bg-[#282829] border-1 border-[#c4dddf] text-[#dee3ee] p-2 rounded-lg w-25">LET'S TALK</div>
                <h1 className="text-5xl text-[#dee3ee] mb-6">Let’s Build Something Amazing Together.</h1>
                <p className="text-[#dee3ee] max-w-150">Have a question or an exciting project in mind? I’d love to hear from you. Let’s create user experiences that make a difference.</p>
           </div>
       </div>
    </div>
  );
}