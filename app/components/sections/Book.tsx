import Button from "../parts/Botton"

export const Book = () => {
    return <>
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4FC3F7]">
          Airiの本棚
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
         ここはAiriの本棚です。
        </p>
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