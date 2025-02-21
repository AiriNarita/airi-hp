import { ContactDetails } from '../ui/ContactDetails'
import { ContactForm } from '../ui/ContactForm'

export const Contact = () => {
    return (
        <div className="py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#4FC3F7]">
                Contact Me
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <ContactDetails />
                <ContactForm />
            </div>
        </div>
    )
}