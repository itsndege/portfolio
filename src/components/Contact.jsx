import contacts from "../data/contactData";
import FadeInSection from "./FadeInSection";

function Contact() {
    return (
        <FadeInSection>
        <section
            id="contact"
            className="scroll-mt-20 max-w-6xl mx-auto py-24 px-8"
        >
            <h2 className="text-4xl font-bold text-center mb-6">
                Contact
            </h2>

            <p className="text-center text-slate-400 max-w-2xl mx-auto">
                I'm always open to discussing opportunities, collaborating on
                projects, or simply connecting with other developers.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
                {contacts.map((contact) => {
    const Icon = contact.icon;

    return (
        <div
            key={contact.name}
            className="bg-slate-800 p-6 rounded-xl"
        >
            <div className="flex items-center gap-3 mb-3">
                <Icon className="text-cyan-400 text-xl" />

                <h3 className="text-xl font-semibold">
                    {contact.name}
                </h3>
            </div>

            <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium break-all"
            >
                {contact.value}
            </a>
        </div>
    );
})}
</div>
            <div className="flex justify-center gap-6 mt-12">

                <a
                    href="mailto:ochiengsilas934@gmail.com"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors">
                        Send Email
                </a>

                <a
                    href="/Silas_Ochieng_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition-colors"
                >
                    Download CV
                </a>

</div>
            

            {/* Contact cards go here */}

        </section>
        </FadeInSection>
    );
}

export default Contact;