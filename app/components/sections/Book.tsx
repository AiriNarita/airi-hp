import Button from "../parts/Botton"
import { SectionTitle } from "../ui/SectionTitle"

export const Book = () => {
    return <>
      
        <SectionTitle
          title="Airiの本棚"
          subtitle="私の本棚"
        />
        <div className="flex justify-center">
          <Button
              href="/book"
              variant="secondary"
              className="mt-4 w-32"
              // icon={}
              target="_blank"
              rel="noopener noreferrer"
            >
            Details
          </Button>
        </div>

    </>
}