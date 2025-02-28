import { ContactDetails } from '../ui/ContactDetails'
import { ContactForm } from '../ui/ContactForm'
import { SectionTitle } from '../ui/SectionTitle'

/**
 * コンタクトページ
 */
export const Contact = () => {
    return (
        <div className="py-16 px-4">
          <SectionTitle
            title='Contact'
            subtitle=''
          />
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
    )
}